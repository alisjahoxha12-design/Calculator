import React, { useState } from "react";

function App() {
  const [display, setDisplay] = useState("0");

  function updateDisplay(token) {
    if (display == "Please press button") {
      setDisplay(token);
    } else {
      setDisplay(display + token);
    }
  }

  function calculate() {
    console.log("Hello I calculate for you");
    const results = eval(display);
    setDisplay(results);
  }

  return (
    <section className="bg-blue-950 min-h-screen">
      <div className="sm:hidden">
        Please make your app window bigger to see this app.
      </div>

        <h1 className="text-center sm:text-3xl font-bold text-center text-white">Calculator</h1>
        
        <div className="flex justify-center my-3">
           <div class="bg-black rounded-2xl p-10 ">
       <div className="p-2 my-4 text-white">{display}
        <div class="grid grid-cols-4 gap-2.5">
          
          <button
            onClick={() => updateDisplay("7")}
            className="w-[50px] h-[50px] text-lg border border-yellow-600 border-3 rounded-full cursor-pointer bg-black text-white"
          >
            7
          </button>
          <button
            onClick={() => updateDisplay("8")}
            className="w-[50px] h-[50px] text-lg border border-yellow-600 border-3 rounded-full cursor-pointer bg-black text-white"
          >
            8
          </button>
          <button
            onClick={() => updateDisplay("9")}
            className="w-[50px] h-[50px] text-lg border border-yellow-600 border-3 rounded-full cursor-pointer bg-black text-white"
          >
            9
          </button>
          <button
            onClick={() => updateDisplay("/")}
            className="w-[50px] h-[50px] text-lg border-none rounded-full cursor-pointer bg-yellow-500 text-black flex justify-center items-center text-white"
          >
            ÷
          </button>
        </div>
        <div className="flex justify-between my-3">
          <button
            onClick={() => updateDisplay("4")}
            className="w-[50px] h-[50px] text-lg border border-yellow-600 border-3 rounded-full cursor-pointer bg-black text-white"
          >
            4
          </button>
          <button
            onClick={() => updateDisplay("5")}
            className="w-[50px] h-[50px] text-lg border border-yellow-600 border-3 rounded-full cursor-pointer bg-black text-white"
          >
            5
          </button>
          <button
            onClick={() => updateDisplay("6")}
            className="w-[50px] h-[50px] text-lg border border-yellow-600 border-3 rounded-full cursor-pointer bg-black text-white"
          >
            6
          </button>
          <button
            onClick={() => updateDisplay("*")}
            className="w-[50px] h-[50px] text-lg border-none rounded-full cursor-pointer bg-yellow-500 text-black flex justify-center items-center text-white"
          >
            ×
          </button>
        </div>
        <div className="flex justify-between my-3">
          <button
            onClick={() => updateDisplay("1")}
            className="w-[50px] h-[50px] text-lg border border-yellow-600 border-3 rounded-full cursor-pointer bg-black text-white"
          >
            1
          </button>
          <button
            onClick={() => updateDisplay("2")}
            className="w-[50px] h-[50px] text-lg border border-yellow-600 border-3 rounded-full cursor-pointer bg-black text-white"
          >
            2
          </button>
          <button
            onClick={() => updateDisplay("3")}
            className="w-[50px] h-[50px] text-lg border border-yellow-600 border-3 rounded-full cursor-pointer bg-black text-white"
          >
            3
          </button>
          <button
            onClick={() => updateDisplay("-")}
            className="w-[50px] h-[50px] text-lg border-none rounded-full cursor-pointer bg-yellow-500 text-black flex justify-center items-center text-white"
          >
            -
          </button>
        </div>
        <div className="flex justify-between my-3">
          <button
            onClick={() => updateDisplay("0")}
            className="w-[50px] h-[50px] text-lg border border-yellow-600 border-3 rounded-full cursor-pointer bg-black text-white"
          >
            0
          </button>
          <button
            onClick={() => setDisplay("Please press button")}
            className="w-[50px] h-[50px] text-lg border border-yellow-600 border-3 rounded-full cursor-pointer bg-blacks text-white"
          >
            C
          </button>
          <button
            onClick={calculate}
            className="w-[50px] h-[50px] text-lg border-none rounded-full cursor-pointer bg-yellow-500 text-black flex justify-center items-center text-white"
          >
            =
          </button>
          <button
            onClick={() => updateDisplay("+")}
            className="w-[50px] h-[50px] text-lg border-none rounded-full cursor-pointer bg-yellow-500 text-black flex justify-center items-center text-white"
          >
            +
          </button>
        </div></div>
      </div></div>
    </section>
  );
}

export default App;
