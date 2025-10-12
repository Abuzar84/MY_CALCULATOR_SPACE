// import { useState } from 'react';

function App() {

  return (
    <>
      <header className="bg-red-500 text-3xl font-bold text-center p-1 text-white">
        <h1>My Calculator Space</h1>
      </header>
      <main>
        <div className="p-2 flex justify-center gap-10">
          <div className="text-center">
            <img src="/src/assets/calculator.webp" alt="Calculator Logo" className="w-50"/>
            <p>Calculator</p>
          </div>
          <div className="text-center">
            <img src="/src/assets/Exponent.webp" alt="Calculator Logo" className="w-50"/>
            <p>Exponent Calculator</p>
          </div>
          <div className="text-center">
            <img src="/src/assets/root.webp" alt="Calculator Logo" className="w-50"/>
            <p>Root Calculator</p>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;