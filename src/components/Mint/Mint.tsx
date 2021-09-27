import React, { useEffect, useState } from "react";
import "./mint.css";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

// import toast from "react-hot-toast";
// import { useWeb3React } from "@web3-react/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      "& > *": {
        marginBottom: theme.spacing(2),
      },
      "& .MuiBadge-root": {
        marginRight: theme.spacing(4),
      },
    },
    buttonStyle: {
      boxShadow: "0 1px 2px 2px #c93638",
      background: "black ",
      color: "white",
      fontWeight: "bolder",
      width: "25px",
      height: "25px",
      borderRadius: "5px",
      "&:hover": {
        backgroundColor: "#c93638",
      },
      "&:disabled": {
        color: "gray",
      },
    },
    rootButton: {
      background: "black",
      borderRadius: 8,
      border: 0,
      color: "white",
      fontWeight: "bolder",
      fontSize: "1.6vmax",
      height: 50,
      padding: "0 30px",
      boxShadow: "0 1px 2px 2px #c93638",
      "&:hover": {
        backgroundColor: "#c93638",
      },
    },
    label: {
      textTransform: "capitalize",
    },
  })
);

const Mint: React.FC = () => {
  const classes = useStyles();
  const [count, setCount] = React.useState(1);
  // const [loginStatus, setLoginStatus] = useState(false);

  // const { connector, library, chainId, account, active } = useWeb3React();
  // useEffect(() => {
  //   const isLoggedin = account && active && chainId === parseInt(process.env.REACT_APP_NETWORK_ID, 10);
  //   if (isLoggedin) {
  //   }
  //   setLoginStatus(isLoggedin);
  // }, [connector, library, account, active, chainId]);

  // const mintTokens = async () => {
  //   if (!loginStatus) {
  //     // toast.error("Please connect wallect correctly on Etherium Network");
  //     toast.error("Please connect wallect correctly on RinkerBy Network");
  //     return;
  //   }
  //   if (count <= 0) {
  //     toast.error("Mint Count should be over than 0");
  //     return;
  //   }
  //   const load_toast_id = toast.loading("Plesae wait for Mint...");
  //   try {
  //     const bSuccess = await purchase(chainId, library.getSigner(), account, count);
  //     if (bSuccess) {
  //       toast.success("Mint Success!");

  //       setTimeout(() => {
  //         window.location.reload();
  //       }, 3000);
  //     } else {
  //       toast.error("Mint Failed!");
  //     }
  //   } catch (error) {
  //     toast.error("Mint Failed!");
  //   }
  //   toast.dismiss(load_toast_id);
  // };

  return (
    <div className="mint-component">
      <div id="mint" className="mint-container">
        <div className="inner-mint-component">
          <div className="counter-button-container">
            <div className="btn-group">
              <div className={classes.root}>
                <div>
                  <ButtonGroup className="inner-btn-group">
                    <Button
                      className={classes.buttonStyle}
                      aria-label="reduce"
                      onClick={() => {
                        setCount(Math.max(count - 1, 0));
                      }}
                      disabled={count === 1}
                    >
                      <RemoveIcon
                        style={{
                          fontWeight: "bolder",
                          fontSize: "1.6vmax",
                        }}
                      />
                    </Button>
                    <Button
                      disabled
                      style={{
                        boxShadow: "0 1px 2px 2px #c93638",
                        width: "50px",
                        height: "50px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "0 10px",
                        background: "black",
                        color: "white",
                        fontSize: "1.3vmax",
                        fontWeight: "bolder",
                        borderRadius: "8px",
                      }}
                    >
                      {count}
                    </Button>
                    <Button
                      className={classes.buttonStyle}
                      aria-label="increase"
                      onClick={() => {
                        setCount(count + 1);
                      }}
                      disabled={count === 20}
                    >
                      <AddIcon
                        style={{
                          fontWeight: "bold",
                          fontSize: "1.5vmax",
                        }}
                      />
                    </Button>
                  </ButtonGroup>
                </div>
              </div>
              <Button
                classes={{
                  root: classes.rootButton,
                  label: classes.label,
                }}
                // onClick={mintTokens}
              >
                Mint
              </Button>
            </div>
            <div className="mint-span-details">
              {/* <span style={{ marginRight: "2vw" }}>Minted {0} / 5000</span> */}
              <span> 0.01 ETH per Mint</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mint;
