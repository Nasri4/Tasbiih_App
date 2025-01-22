import { useState } from "react";

const Tasbiix = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const handleReset = () => {
    setCounter(0);
  };

  return (
    <div className="flex flex-col items-center h-screen">
      {/* Top Header */}
      <h1 className="text-4xl font-bold pt-12 mt-2"><span className="text-orange-600">Tasbih Counter</span></h1>

      {/* Centered Counter App */}
      <div className="flex flex-col justify-center items-center flex-grow">
        <h1
          style={{ color: counter === 10 ? "orange" : "" }}
          className="text-8xl font-bold pb-10"
        >
          {counter}
        </h1>
        <div>
          <button
            onClick={handleIncrement}
            className="bg-green-500 px-8 py-2 rounded-3xl text-3xl text-white"
          >
            +
          </button>
          <button
            onClick={handleDecrement}
            className="bg-red-500 px-8 py-2 rounded-3xl text-3xl text-white ml-5"
          >
            -
          </button>
          <button
            onClick={handleReset}
            className="bg-blue-500 px-8 py-2 rounded-3xl text-3xl text-white ml-5"
          >
            x
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tasbiix;
