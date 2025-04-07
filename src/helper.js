// Function to generate a random 3-digit ticket
export const generateTicket = () => {
  const digits = Array.from({ length: 3 }, () =>
    Math.floor(Math.random() * 10)
  );
  const ticketNumber = digits.join("");
  const sum = digits.reduce((a, b) => a + b, 0);

  return { ticketNumber, sum };
};

// Function to determine the result based on the sum
export const getResultMessage = (sum) => {
  return sum === 15 ? "🎉 You won the Lottery!" : "❌ Try Again!";
};
