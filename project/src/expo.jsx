import React from "react";

function Expo() {
  const [base, setBase] = React.useState("");
  const [exponent, setExponent] = React.useState("");
  const [result, setResult] = React.useState(null);

  function expoCalculate() {
    const baseNum = parseFloat(base);
    const expNum = parseFloat(exponent);

    if (isNaN(baseNum) || isNaN(expNum) || base === "" || exponent === "") {
      setResult("Invalid input or input missing");
      return;
    }

    const calcResult = Math.pow(baseNum, expNum);

    if (Number.isInteger(expNum) && expNum > 0) {
      // Positive integer exponent: show multiplication string
      const multiplicationString = Array(expNum).fill(baseNum).join(" x ");
      setResult(
        <div className="text-center">
          <p>
            = {baseNum}<sup>{expNum}</sup>
          </p>
          <p>
            = {multiplicationString}
          </p>
          <p>
            = {calcResult}
          </p>
        </div>
      );
    } else {
      // Non-integer or negative exponent: show standard notation
      setResult(
        <div>
          <p>
            {baseNum}
            <sup>{expNum}</sup> = {calcResult}
          </p>
        </div>
      );
    }
  }

  function clearInputs() {
    setBase("");
    setExponent("");
    setResult(null);
  }

  return (
    <div>
      <div className="flex justify-center pt-5">
        <div className="w-80 border-2 p-2">
          <h2 className="font-bold text-center text-xl pb-4">Exponent Calculator</h2>
          <div className="flex justify-center gap-2">
            <input
              type="number"
              placeholder="Enter Base"
              className="w-30 border-2"
              value={base}
              onChange={(e) => setBase(e.target.value)}
            />
            <input
              type="number"
              placeholder="Enter Exponent"
              className="w-30 border-2"
              value={exponent}
              onChange={(e) => setExponent(e.target.value)}
            />
          </div>
          <div className="flex justify-center pt-5 gap-2">
            <button
              className="bg-gray-300 border pl-1 pr-1 rounded-lg cursor-pointer"
              onClick={clearInputs}
            >
              Clear
            </button>
            <button
              className="bg-gray-300 border pl-1 pr-1 rounded-lg cursor-pointer"
              onClick={expoCalculate}
            >
              Calculate
            </button>
          </div>
          <div className="text-center pt-4">
            {<div>{result}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expo;