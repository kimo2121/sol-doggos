import React from "react";
import "./styles.css";
import Mini_main from "../../assets/images/Mini_main.png";
import project from "../../assets/images/project.png";
import kopia from "../../assets/images/kopia.png";
import KopiaSolFlare from "../../assets/images/Kopia-SolFlare.png";
import Header from "../../components/Header/Header";
const HowToBuy: React.FC = () => {
  return (
    <div>
      <img className="how-to-buy-img" src={Mini_main} alt="" />
      <div className="how-buy">
        <div className="Buy-sol">
          <Header className="team-header how-to-buy" header="1. Buy SOL" />
          <img src={project} alt="" />
          <h3>Buy SOL from one of the exchanges listed below:</h3>
          <em>
            *You need to buy a bit more than 1.5 SOL (gas fees for Solana are
            very low) to cover the gas fee for minting (check below for
            details).
          </em>
          <div className="wallets-addr-container">
            <div>
              <strong>U.S. based Buyers</strong>
              <a href="https://www.binance.us/en/home">Binance.us</a>
              <a href="https://www.coinbase.com/">Coinbase</a>
              <a href="https://ftx.us/">FTX.us</a>
              <a href="https://www.gate.io/">Gate.io</a>
              <a href="https://www.kraken.com/">Kraken</a>
            </div>
            <div>
              <strong>Non-U.S. Buyers</strong>
              <a href="https://www.binance.com/en">Binance</a>
              <a href="https://www.bitfinex.com/">Bitfinex</a>
              <a href="https://ftx.com/">FTX</a>
              <a href="https://www.gate.io/">Gate.io</a>
              <a href="https://www.huobi.com/en-us/">Huobi</a>
              <a href="https://www.okex.com/pl">OKEx</a>
            </div>
          </div>
        </div>
        <div className="create-wallet">
          <Header
            className="team-header how-to-buy"
            header="2. Create your wallet"
          />
          <h4>Choose a crypto-wallet of your choice to deposit SOL.</h4>
          <button>Phantom Wallet</button>
        </div>
        <div className="exchange">
          <Header
            className="team-header how-to-buy"
            header="3. Transfer SOL from exchange to your wallet"
          />
          <div className="exchange-steps">
            <div>
              <h2>1. Find your wallet address</h2>
              <img src={kopia} alt="" />
            </div>
            <div>
              <h2>2. Transfer SOL to your wallet</h2>
              <h5>
                Transfer SOL to your wallet from the exchange where you bought
                SOL.
              </h5>
              <h5>
                Be sure to transfer more than the amount for the mint to pay the
                gas fee.
              </h5>
            </div>
            <div>
              <h2>3. Approve your transaction.</h2>
              <h5>
                It may take a couple minutes for your deposit to appear in your
                wallet.
              </h5>
            </div>
            <div>
              <h2>4. Check your SOL balance</h2>
              <h5>
                Go to your wallet and make sure you have 1.5 SOL + gas fee or
                more if you plan to buy more than 1 SolDoggo.
              </h5>
              <h5>
                There will be a limit for the number of SolDoggos per
                transaction.
              </h5>
            </div>
          </div>
        </div>
        <div className="mint-sol">
          <Header
            className="team-header how-to-buy"
            header="4. Mint a SolDoggo"
          />
          <img src={KopiaSolFlare} alt="" />
        </div>
      </div>
      <img className="how-to-buy-img" src={Mini_main} alt="" />
    </div>
  );
};

export default HowToBuy;
