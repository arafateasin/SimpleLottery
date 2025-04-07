import React, { useState } from "react";
import "./App.css";
import { generateTicket, getResultMessage } from "./helper";

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
      <h1 className="title">🎲 React Lottery Game</h1>
      <p className="subtitle">
        Click the button to generate a random 3-digit ticket. If the digits add
        up to 15, you win!
      </p>

      <button className="generate-btn" onClick={handleGenerateTicket}>
        Generate Ticket
      </button>

      {ticket !== null && (
        <div className="result-card">
          <h2>
            Your Ticket: <span className="ticket-number">{ticket}</span>
          </h2>
          <p className={result.includes("won") ? "win" : "lose"}>{result}</p>
        </div>
      )}
    </div>
  );
};

export default LotteryGame;
