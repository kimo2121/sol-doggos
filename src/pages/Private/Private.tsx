import React, { useEffect } from "react";
import styled from "styled-components";
import { Button, CircularProgress, Snackbar } from "@material-ui/core";
import "./private.css";

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
const PrivatePage = () => {
  useEffect(() => {
    let sign: any = prompt("What's your sign?");
    if (sign == "SolDoggos3267") {
      alert("Password Correct!");
    } else {
      alert("Password Wrong!");
      window.location.replace("/");
    }
  }, []);
  return (
    <div className="presale-inner">
      <MintContainer>
        <MintButton
          className="mint-btn"
          //   disabled={isSoldOut || isMinting || !isActive}
          //   onClick={onMint}
          variant="contained"
        >
          MINT a SoiDoggo
        </MintButton>
      </MintContainer>
    </div>
  );
};

export default PrivatePage;
