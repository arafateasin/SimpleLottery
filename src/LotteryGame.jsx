import React, { useState } from "react";
import "./App.css";
import { generateTicket, getResultMessage } from "./helper";
import Header from "./Header";
import ResultCard from "./ResultCard";

const LotteryGame = () => {
  const [ticket, setTicket] = useState(null);
  const [result, setResult] = useState("");

  const handleGenerateTicket = () => {
    const { ticketNumber, sum } = generateTicket();
    setTicket(ticketNumber);
    setResult(getResultMessage(sum));
  };

  return (
    <div className="lottery-container">
      <Header />
      <button className="generate-btn" onClick={handleGenerateTicket}>
        Generate Ticket
      </button>
      {ticket !== null && <ResultCard ticket={ticket} result={result} />}
    </div>
  );
};

export default LotteryGame;
