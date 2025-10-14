// import { useState } from 'react';

function App() {

  return (
    <>
      <header className="bg-red-500 text-3xl font-bold text-center text-white">
        <h1 className="p-2">My Calculator Space</h1>
        <div className="bg-yellow-200 text-base flex overflow-x-auto justify-center">
          <span className="bg-gray-300 border-black border-2 cursor-pointer">&ensp;Home&ensp;</span>
          <span className="bg-gray-300 border-black border-2 cursor-pointer">&ensp;Calculator&ensp;</span>
          <span className="bg-gray-300 border-black border-2 cursor-pointer">&ensp;Exponent Calculator&ensp;</span>
          <span className="bg-gray-300 border-black border-2 cursor-pointer">&ensp;Root Calculator&ensp;</span>
          <span className="bg-gray-300 border-black border-2 cursor-pointer">&ensp;Area Calculator&ensp;</span>
          <span className="bg-gray-300 border-black border-2 cursor-pointer">&ensp;Surface Area Calculator&ensp;</span>
          <span className="bg-gray-300 border-black border-2 cursor-pointer">&ensp;BMI Calculator&ensp;</span>
        </div>
      </header>
      <main>
        <div className="p-2 flex flex-wrap justify-center gap-10">
          <div className="text-center">
            <img src="/src/assets/calculator.webp" alt="Calculator Logo" className="w-40 cursor-pointer"/>
            <p>Calculator</p>
          </div>
          <div className="text-center">
            <img src="/src/assets/Exponent.webp" alt="Exponent Calculator Logo" className="w-40 cursor-pointer"/>
            <p>Exponent Calculator</p>
          </div>
          <div className="text-center">
            <img src="/src/assets/root.webp" alt="Root Calculator Logo" className="w-40 cursor-pointer"/>
            <p>Root Calculator</p>
          </div>
          <div className="text-center">
            <img src="/src/assets/area.webp" alt="Area Calculator Logo" className="w-40 cursor-pointer"/>
            <p>Area Calculator</p>
          </div>
          <div className="text-center">
            <img src="/src/assets/perimeter.webp" alt="Perimeter Calculator Logo" className="w-40 cursor-pointer"/>
            <p>Perimeter Calculator</p>
          </div>
          <div className="text-center">
            <img src="/src/assets/surfacearea.webp" alt="Surface Area Calculator Logo" className="w-40 cursor-pointer"/>
            <p>Surface Area Calculator</p>
          </div>
          <div className="text-center">
            <img src="/src/assets/bmilogo.webp" alt="bmi Calculator Logo" className="w-40 cursor-pointer"/>
            <p>BMI Calculator</p>
          </div>
        </div>
        <div className="p-4 text-justify">
          <p>Welcome to My Calculator Space, your go-to destination for free online calculators. Whether you're a student, a professional, or just someone who needs to crunch some numbers, we've got you covered. Our calculators are designed to be user-friendly and efficient, providing you with quick and accurate results. From basic arithmetic to complex mathematical operations, you can find the right tool for your needs. Explore our range of calculators and simplify your calculations today!</p>
        </div>
      </main>
    </>
  );
}

export default App;