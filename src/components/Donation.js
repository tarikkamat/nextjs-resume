// components/DonateBitcoin.js

import { useState } from 'react';

const DonateBitcoin = () => {
  const [copied, setCopied] = useState(false);

  const btcAddress = "bc1qr9vnlr2ewrqzc8ldcwa2yyht9y75tjyjckz6zy";

  const handleCopyClick = () => {
    navigator.clipboard.writeText(btcAddress);
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
      <h2>Support Us with Bitcoin</h2>
      <p>Send BTC to the following address:</p>
      <input 
        type="text" 
        value={btcAddress} 
        readOnly 
        style={{ width: "100%", padding: "10px", fontSize: "16px", marginBottom: "10px", textAlign: "center" }}
      />
      <br />
      <button 
        onClick={handleCopyClick} 
        style={{ padding: "10px 20px", backgroundColor: "#f9a825", border: "none", borderRadius: "5px", color: "white", cursor: "pointer" }}
      >
        {copied ? "Copied!" : "Copy Address"}
      </button>
    </div>
  );
};

export default DonateBitcoin;

