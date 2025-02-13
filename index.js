import { useState } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

function App() {
  const [count, setCount] = useState(0);

  return (

    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold"> Proyecto Base en React</h1>
      <p className="text-lg">Contador: {count}</p>
      <button className="px-4 py-2 mt-4 bg-blue-500 text-white rounded"
        onClick={() => setCount(count + 1)}>
        Aumentar
      </button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
