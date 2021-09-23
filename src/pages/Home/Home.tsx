import React, { useEffect, useState } from "react";
import Gang from "../../components/Gang/Gang";
import Roadmap from "../../components/Roadmap/Roadmap";
import Timer from "../../components/Timer/Timer";
import "./home.css";
import SolDoggosComic from "../../assets/images/SolDoggosComic.png";
import Team from "../../components/Team/Team";
import "aos/dist/aos.css";
import AOS from "aos";

import "./home.css";

import styled from "styled-components";
import Countdown from "react-countdown";
import { Button, CircularProgress, Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

import * as anchor from "@project-serum/anchor";

import { LAMPORTS_PER_SOL } from "@solana/web3.js";

import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { WalletDialogButton } from "@solana/wallet-adapter-material-ui";

import {
  CandyMachine,
  awaitTransactionSignatureConfirmation,
  getCandyMachineState,
  mintOneToken,
  shortenAddress,
} from "../../utils/candy-machine";

const ConnectButton = styled(WalletDialogButton)``;

const CounterText = styled.span``; // add your styles here

const MintContainer = styled.div``; // add your styles here

const MintButton = styled(Button)`
  border: none;
  box-sizing: border-box !important;
  outline: none;
  width: 360px !important;
  font-family: Nova Mono !important;
  line-height: unset;
  margin: 11vh auto !important;
  font-size: 36px !important;
  border-radius: 10px !important;
  padding: 10px 0;
  background-color: white !important;
  box-shadow: 0 1px 2px 2px red !important;
  &:hover {
    background-color: #ea413b !important;
    box-shadow: unset;
    color: white !important ;
    box-shadow: 0 1px 2px 2px white !important;
  }
  &:disabled {
    color: #000000 !important;
    background-color: gray !important;
  }
`; // add your styles here

export interface HomeProps {
  candyMachineId: anchor.web3.PublicKey;
  config: anchor.web3.PublicKey;
  connection: anchor.web3.Connection;
  startDate: number;
  treasury: anchor.web3.PublicKey;
  txTimeout: number;
}

const Home = (props: HomeProps) => {
  useEffect(() => {
    AOS.init({
      duration: 1400,
    });
  }, []);

  //////////////////////////////////////
  const [balance, setBalance] = useState<number>();
  const [isActive, setIsActive] = useState(true); // true when countdown completes
  const [isSoldOut, setIsSoldOut] = useState(false); // true when items remaining is zero
  const [isMinting, setIsMinting] = useState(false); // true when user got to press MINT

  const [alertState, setAlertState] = useState<AlertState>({
    open: false,
    message: "",
    severity: undefined,
  });

  const [startDate, setStartDate] = useState(new Date(props.startDate));

  const wallet = useAnchorWallet();
  const [candyMachine, setCandyMachine] = useState<CandyMachine>();

  const onMint = async () => {
    try {
      setIsMinting(true);
      if (wallet && candyMachine?.program) {
        const mintTxId = await mintOneToken(
          candyMachine,
          props.config,
          wallet.publicKey,
          props.treasury
        );

        const status = await awaitTransactionSignatureConfirmation(
          mintTxId,
          props.txTimeout,
          props.connection,
          "singleGossip",
          false
        );

        if (!status?.err) {
          setAlertState({
            open: true,
            message: "Congratulations! Mint succeeded!",
            severity: "success",
          });
        } else {
          setAlertState({
            open: true,
            message: "Mint failed! Please try again!",
            severity: "error",
          });
        }
      } else {
        setAlertState({
          open: true,
          message: "Please connect wallet correctly!",
          severity: "error",
        });
      }
    } catch (error: any) {
      // TODO: blech:
      let message = error.msg || "Minting failed! Please try again!";
      if (!error.msg) {
        if (error.message.indexOf("0x138")) {
        } else if (error.message.indexOf("0x137")) {
          message = `SOLD OUT!`;
        } else if (error.message.indexOf("0x135")) {
          message = `Insufficient funds to mint. Please fund your wallet.`;
        }
      } else {
        if (error.code === 311) {
          message = `SOLD OUT!`;
          setIsSoldOut(true);
        } else if (error.code === 312) {
          message = `Minting period hasn't started yet.`;
        }
      }

      setAlertState({
        open: true,
        message,
        severity: "error",
      });
    } finally {
      if (wallet) {
        const balance = await props.connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
      setIsMinting(false);
    }
  };

  useEffect(() => {
    (async () => {
      if (wallet) {
        const balance = await props.connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
    })();
  }, [wallet, props.connection]);

  useEffect(() => {
    (async () => {
      if (!wallet) return;

      const { candyMachine, goLiveDate, itemsRemaining } =
        await getCandyMachineState(
          wallet as anchor.Wallet,
          props.candyMachineId,
          props.connection
        );

      setIsSoldOut(itemsRemaining === 0);
      setStartDate(goLiveDate);
      setCandyMachine(candyMachine);
    })();
  }, [wallet, props.candyMachineId, props.connection]);
  //////////////////////////////////////

  return (
    <div className="home">
      <div className="banner"></div>
      <Timer
        data-aos="fade-in"
        data-aos-duration="1000"
        mintStartAt={1633011600}
      />
      <MintContainer>
        <MintButton
          className="mint-btn"
          disabled={isSoldOut || isMinting || !isActive}
          onClick={onMint}
          variant="contained"
        >
          {isSoldOut ? (
            "SOLD OUT"
          ) : isActive ? (
            isMinting ? (
              <CircularProgress />
            ) : (
              "MINT a SoiDoggo"
            )
          ) : (
            <Countdown
              date={startDate}
              onMount={({ completed }) => completed && setIsActive(true)}
              onComplete={() => setIsActive(true)}
              renderer={renderCounter}
            />
          )}
        </MintButton>
      </MintContainer>

      <Gang />
      <Roadmap />
      <div className="origin-container">
        <div data-aos="fade-down" data-aos-duration="1500" className="origins">
          <img src={SolDoggosComic} alt="" />
          <div>
            <h3>SOL DOGGOS: ORIGINS</h3>
            <p>
              Once we hit 50% milestone we will start working on publishing the
              official Sol Doggos comic book!
            </p>
          </div>
        </div>
      </div>
      <Team />

      <Snackbar
        open={alertState.open}
        autoHideDuration={6000}
        onClose={() => setAlertState({ ...alertState, open: false })}
      >
        <Alert
          onClose={() => setAlertState({ ...alertState, open: false })}
          severity={alertState.severity}
        >
          {alertState.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

interface AlertState {
  open: boolean;
  message: string;
  severity: "success" | "info" | "warning" | "error" | undefined;
}

const renderCounter = ({ days, hours, minutes, seconds, completed }: any) => {
  return (
    <CounterText>
      {hours} hours, {minutes} minutes, {seconds} seconds
    </CounterText>
  );
};

export default Home;
