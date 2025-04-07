import React from "react";

const Header = () => {
  return (
    <div className="text-center">
      <h1 className="title">🎲 React Lottery Game</h1>
      <p className="subtitle">
        Click the button to generate a random 3-digit ticket. If the digits add
        up to 15, you win!
      </p>
    </div>
  );
};

export default Header;
