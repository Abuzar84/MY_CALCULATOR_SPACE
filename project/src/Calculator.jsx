import { useState } from "react";

function Calculator() {
  const [expression, setExpression] = useState("0"); // Full expression (e.g., "88 - 62 × 6")
  const [result, setResult] = useState(""); // Calculated result (e.g., "-284")
  const [previousNumber, setPreviousNumber] = useState(null); // Previous number
  const [operator, setOperator] = useState(null); // Current operator
  const [currentNumber, setCurrentNumber] = useState(""); // Current number being entered

  // Handle button clicks
  const handleClick = (value) => {
    if (value >= "0" && value <= "9") {
      // Handle number input
      setCurrentNumber(currentNumber + value);
      setExpression(expression === "0" ? value : expression + value);
    } else if (["+", "-", "*", "/"].includes(value)) {
      // Handle operator
      if (currentNumber !== "" && previousNumber !== null && operator !== null) {
        calculate();
      }
      if (currentNumber !== "") {
        setPreviousNumber(parseFloat(currentNumber));
        setCurrentNumber("");
      }
      setOperator(value);
      setExpression(expression + " " + value + " ");
    } else if (value === "=") {
      // Handle calculation
      if (previousNumber !== null && operator !== null && currentNumber !== "") {
        calculate();
        setPreviousNumber(null);
        setOperator(null);
        setCurrentNumber("");
      }
    } else if (value === "C") {
      // Handle clear
      setExpression("0");
      setResult("");
      setPreviousNumber(null);
      setOperator(null);
      setCurrentNumber("");
    }
  };

  // Perform calculation
  const calculate = () => {
    const current = parseFloat(currentNumber || "0");
    let computedResult;
    switch (operator) {
      case "+":
        computedResult = previousNumber + current;
        break;
      case "-":
        computedResult = previousNumber - current;
        break;
      case "*":
        computedResult = previousNumber * current;
        break;
      case "/":
        computedResult = current !== 0 ? previousNumber / current : "Error";
        break;
      default:
        return;
    }
    setResult(computedResult.toString());
    setExpression(expression + " = " + computedResult.toString());
    setPreviousNumber(computedResult);
  };

  // Button layout
  const buttons = [
    "7", "8", "9", "+","%",
    "4", "5", "6", "-","Back",
    "1", "2", "3", "*","M+",
    "•", "0", "e", "/","M-",
    "RND","AC","=","MR","MC"
  ];

  return (
    <div className="w-screen">
      <div className="flex justify-center pt-5">
        <div className="border-2 w-100">
          <div className="w-full h-12 border border-gray-300 text-center bg-white">
            {expression}
          </div>
          {/* Result/History Display */}
          <div className="w-full h-8 border border-gray-500 text-center bg-green-300 text-black">
            {result}
          </div>
          <div className="w-full h-8 border border-gray-500 text-center bg-gray-300 text-black">
            History
          </div>
          {/* Buttons */}
          <div className="grid grid-cols-5">
            {buttons.map((btn) => (
              <div
                key={btn}
                className={`h-10 text-center leading-10 cursor-pointer ${
                  ["+", "-", "*", "/", "=", "C","%","Back","M+","M-","MR","MC","AC","RND"].includes(btn)
                    ? "bg-gray-300"
                    : "bg-gray-100"
                } border hover:bg-gray-400`}
                onClick={() => handleClick(btn)}
              >
                {btn}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;