import React from 'react';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Tokenomics from './components/Tokenomics';
import Lore from './components/Lore';
import HowToBuy from './components/HowToBuy';
import PfpGenerator from './components/PfpGenerator';
import Footer from './components/Footer';

function App() {
  const contractAddress = "9Y4kbrPr2ck2FHubhjLcd9jmANqArZAzrYscvNTTpump";

  return (
    <>
      <Cursor />
      <Navbar cau={contractAddress} />
      <Hero cau={contractAddress} />
      <Ticker />
      <Tokenomics />
      <Lore cau={contractAddress} />
      <HowToBuy cau={contractAddress} />
      <PfpGenerator />
      <Footer cau={contractAddress} />
    </>
  );
}

export default App;
