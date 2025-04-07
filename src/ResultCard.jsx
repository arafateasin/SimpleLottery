import React from "react";

const ResultCard = ({ ticket, result }) => {
  return (
    <div className="mt-6 p-4 bg-white bg-opacity-20 rounded-lg shadow-md text-center">
      <h2 className="text-xl font-semibold text-white">
        Your Ticket: <span className="text-yellow-300 font-bold">{ticket}</span>
      </h2>
      <p
        className={`mt-2 text-lg font-bold ${
          result.includes("won") ? "text-green-400" : "text-red-400"
        }`}
      >
        {result}
      </p>
    </div>
  );
};

export default ResultCard;
