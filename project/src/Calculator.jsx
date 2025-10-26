
import React from "react";
import * as math from "mathjs";

function Calculator() {
  const [expression, setExpression] = React.useState(""); // Current input expression
  const [result, setResult] = React.useState(""); // Calculated result
  const [memory, setMemory] = React.useState(0); // Memory for M+, M-, MR, MC
  const [history, setHistory] = React.useState([]); // Array to store history
  const [showHistory, setShowHistory] = React.useState(false); // Toggle history display

  // Handle button clicks and keyboard input
  const handleInput = (value) => {
    switch (value) {
      case "Back":
        setExpression(expression.slice(0, -1));
        break;
      case "=":
        try {
          const cleanExpression = expression.replace(/×/g, "*").replace(/•/g, ".");
          const res = math.evaluate(cleanExpression);
          const calculation = `${expression} = ${res}`;
          setHistory([...history, calculation]); // Add to history
          setExpression(res.toString()); // Update expression with result
          setResult(res.toString()); // Update result
        } catch {
          setResult(" ");
          setExpression("");
        }
        break;
      case "M+":
        setMemory(memory + parseFloat(result || 0));
        break;
      case "M-":
        setMemory(memory - parseFloat(result || 0));
        break;
      case "MR":
        setExpression(expression + memory.toString());
        setResult(memory.toString());
        break;
      case "MC":
        setMemory(0);
        break;
      case "AC":
        setExpression("");
        setResult(" ");
        break;
      case "RND": {
        const randomNum = Math.random().toString();
        setExpression(expression + randomNum);
        setResult(randomNum);
        break;
      }
      case "History":
        setShowHistory(!showHistory); // Toggle history display
        break;
      case "e": {
        const eValue = math.evaluate("e").toString();
        setExpression(expression + eValue);
        setResult(eValue);
        break;
      }
      default:
        setExpression(expression + value.replace(/•/g, "."));
        break;
    }
    // Update result after each input (except for certain cases)
    if (value !== "=" && value !== "AC" && value !== "History") {
      updateResult();
    }
  };

  // Keep a ref to the latest handleInput so the keyboard handler can call it
  // without causing the effect to re-run on every render.
  const handleInputRef = React.useRef();
  handleInputRef.current = handleInput;

  // Function to evaluate and update the result
  const updateResult = () => {
    try {
      const cleanExpression = expression.replace(/×/g, "*").replace(/•/g, ".");
      const res = math.evaluate(cleanExpression);
      setResult(res.toString());
    } catch {
      setResult(expression === "" ? " " : result);
    }
  };

  // Add keyboard event listener (handler defined inside effect to avoid
  // a missing-dependency lint warning)
  React.useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key;
      switch (key) {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case ".":
          handleInputRef.current && handleInputRef.current(key);
          break;
        case "+":
        case "-":
        case "*":
        case "/":
        case "%":
          handleInputRef.current && handleInputRef.current(key === "*" ? "×" : key);
          break;
        case "Enter":
          handleInputRef.current && handleInputRef.current("=");
          break;
        case "Backspace":
          handleInputRef.current && handleInputRef.current("Back");
          break;
        case "Escape":
          handleInputRef.current && handleInputRef.current("AC");
          break;
        case "m":
        case "M":
          if (event.shiftKey) {
            handleInputRef.current && handleInputRef.current("M+");
          } else {
            handleInputRef.current && handleInputRef.current("MR");
          }
          break;
        case "r":
        case "R":
          handleInputRef.current && handleInputRef.current("RND");
          break;
        case "h":
        case "H":
          handleInputRef.current && handleInputRef.current("History");
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [expression, result, memory, history, showHistory]);

  // Button layout
  const buttons = [
    "7", "8", "9", "+", "%",
    "4", "5", "6", "-", "Back",
    "1", "2", "3", "×", "M+",
    "•", "0", "e", "/", "M-",
    "RND", "AC", "=", "MR", "MC",
  ];

  return (
    <div className="w-screen">
      <div className="flex justify-center pt-5">
        <div className="border-2 w-96">
          {showHistory && (
              <div className="p-2 text-left max-h-32 overflow-y-auto">
                {history.length > 0 ? (
                  history.map((calc, index) => (
                    <div key={index}>{calc}</div>
                  ))
                ) : (
                  <div>No history available</div>
                )}
              </div>
            )}
          {/* Expression Display */}
          <div className="w-full h-12 border border-gray-300 text-center bg-white">
            {expression || "0"}
          </div>
          {/* Result Display */}
          <div className="w-full h-8 border border-gray-500 text-center bg-green-300 text-black">
            {result || " "}
          </div>
          {/* History Display */}
          <div className="w-full border border-gray-500 text-center bg-gray-200 text-black">
            <div
              className="font-bold text-lg cursor-pointer"
              onClick={() => handleInput("History")}>
              History
            </div>    
          </div>
          {/* Buttons */}
          <div className="grid grid-cols-5 gap-1 p-2">
            {buttons.map((btn) => (
              <div
                key={btn}
                className={`h-10 text-center leading-10 cursor-pointer border ${
                  ["+", "-", "×", "/", "=", "AC", "%", "Back", "M+", "M-", "MR", "MC", "RND", "•", "e", "History"].includes(btn)
                    ? "bg-gray-300"
                    : "bg-gray-100"
                } hover:bg-gray-400`}
                onClick={() => handleInput(btn)}
              >
                {btn}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="text-justify pl-10 pr-10">
        <h2 className="text-3xl font-bold text-center">Calculator: An Overview</h2>
                <p>
                    A <strong>calculator</strong> is an electronic or mechanical device designed to perform mathematical operations. 
                    From simple arithmetic like addition, subtraction, multiplication, and division, to more complex functions involving
                    square roots, logarithms, trigonometry, and even calculus, calculators have become an essential tool in both 
                    everyday life and specialized fields such as engineering, finance, and science.
                </p>
                <hr />
                <h3 className="text-2xl font-bold text-center">Types of Calculators</h3>
                <h4 className="font-bold">1. Basic Calculators</h4>
                <p>
                    These perform fundamental arithmetic operations addition, subtraction, multiplication, and division. They usually 
                    have a small display and a set of 10 to 20 keys. Commonly used for quick calculations at home or in school settings.
                </p>
                <h4 className="font-bold">2. Scientific Calculators</h4>
                <p>
                    These are designed to handle more advanced mathematical functions like trigonometric, logarithmic, and exponential 
                    operations. Often used by students and professionals in fields such as physics, engineering, and mathematics. 
                    Includes functions like sine, cosine, tangent, square roots, and powers.
                </p>
                <h4 className="font-bold">3. Graphing Calculators</h4>
                <p>
                    These allow users to plot graphs of functions and solve equations involving multiple variables. Popular in higher
                    education, especially for courses in mathematics, physics, and engineering. Some models also support programming,
                    making them versatile tools for advanced problem-solving.
                </p>
                <h4 className="font-bold">4. Financial Calculators</h4>
                <p>
                    Specifically designed for solving financial and business-related calculations like interest rates, loan payments,
                    amortization schedules, and investments. They are commonly used in accounting, finance, and real estate sectors.
                </p>
                <h4 className="font-bold">5. Programming Calculators</h4>
                <p>
                    These can be programmed to perform a series of custom functions and are often used by engineers, mathematicians, or 
                    in specific industries requiring repetitive or specialized calculations.
                </p>
                <h4 className="font-bold">6. Online and Mobile Calculators</h4>
                <p>
                    Software-based calculators are available on virtually every smartphone, tablet, and computer. Many modern
                    smartphones have built-in calculators that often include both basic and scientific functions. Additionally, 
                    there are apps for more complex needs, such as graphing or programming calculators.
                </p>
                <hr />
                <h3 className="text-3xl font-bold text-center">History and Development</h3>
                <h4 className="font-bold">Early Calculating Devices</h4>
                <p>
                    The concept of calculation tools dates back thousands of years. Ancient devices such as the abacus were used by 
                    early civilizations for basic arithmetic. Later, the mechanical calculator was invented in the 17th century by
                    figures like Blaise Pascal and Gottfried Wilhelm Leibniz. These devices were the precursors to the more 
                    sophisticated calculators we have today.
                </p>
                <h4 className="font-bold">Electronic Calculators</h4>
                <p>
                    The first electronic calculators appeared in the mid-20th century. In the 1960s, the advent of semiconductor 
                    technology allowed for the development of portable electronic calculators, which were smaller, faster, and more 
                    accurate than their mechanical predecessors. The invention of the integrated circuit (IC) in the 1960s
                    revolutionized the design of calculators, making them cheaper to produce and more reliable. In the 1970s, 
                    companies like Texas Instruments and Hewlett-Packard began producing the first commercially successful
                    pocket-sized calculators.
                </p>
                <h4 className="font-bold">Modern Calculators</h4>
                <p>
                    Today, calculators are widely available, both as physical devices and software on computers, smartphones, and 
                    other devices. Many of them are highly specialized for different fields, and their functions have expanded to 
                    include statistical analysis, matrix operations, and even symbolic computation.
                </p>
                <hr />
                <h3 className="text-2xl font-bold text-center">Importance and Uses</h3>
                <h4 className="font-bold">1. Education</h4>
                <p>
                    Calculators are essential in modern education, helping students perform complex calculations quickly and 
                    efficiently. They are particularly useful in high school and university courses in mathematics, physics, and 
                    engineering.
                </p>
                <h4 className="font-bold">2. Business and Finance</h4>
                <p>
                    Calculators are used for accounting, budgeting, financial analysis, and tax computations. They can help 
                    business owners and accountants perform cost analysis, profitability calculations, and investment appraisals.
                </p>
                <h4 className="font-bold">3. Science and Engineering</h4>
                <p>
                    Scientists and engineers use calculators to solve complex equations, model data, and perform simulations. In many 
                    cases, advanced calculators are equipped with the ability to handle variables, matrices, and calculus operations.
                </p>
                <h4 className="font-bold">4. Everyday Use</h4>
                <p>
                    Most people rely on calculators for personal finance (e.g., calculating shopping totals, bills, or budgeting) 
                    and for general arithmetic in daily life. Modern smartphones have built-in calculators for these purposes.
                </p>
                <hr />
                <h3 className="text-2xl font-bold text-center">Impact on Society</h3>
                <p>
                    The calculator has had a profound impact on society by simplifying complex calculations and making them
                    accessible to a wider audience. In the past, only those with formal education in mathematics had the tools 
                    necessary to perform advanced computations. Today, anyone with a basic calculator (or access to one through their 
                    phone or computer) can solve complex problems quickly.
                </p>
                <p>
                    Moreover, calculators have played a significant role in enabling advances in fields such as engineering, medicine, 
                    and technology. The ability to handle large numbers and perform rapid calculations is critical to advancements in 
                    areas like cryptography, data science, and artificial intelligence.
                </p>
                <hr />
                <h3 className="text-2xl font-bold text-center">Conclusion</h3>
                <p>
                    The calculator has evolved from a mechanical tool for basic arithmetic to a sophisticated device that can 
                    perform complex mathematical and scientific functions. It remains a vital instrument in education, business, 
                    science, and daily life. Whether it's a simple hand-held device or a powerful graphing calculator with the 
                    capability to handle advanced functions, the calculator continues to be an indispensable tool in modern society.
                </p>
      </div>
    </div>
  );
}

export default Calculator;