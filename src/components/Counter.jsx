import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="w-48 mx-auto mt-8 bg-white shadow-md rounded-lg overflow-hidden">
      <h2 className="text-center text-xl font-semibold py-4 bg-gray-200">
        Counter Page
      </h2>
      <div className="flex justify-center items-center py-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l"
          onClick={decrement}
        >
          -
        </button>
        <span className="bg-gray-200 px-4 py-2">{count}</span>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
          onClick={increment}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
