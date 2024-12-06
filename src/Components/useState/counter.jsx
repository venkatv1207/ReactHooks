import { useState } from "react";

const Counter = () => {
  const [state, setState] = useState(0);
  const Increment = () => {
    setState((prev) => prev + 1);
  };

  return (
    <div>
      <h1>Count: {state}</h1>
      <button onClick={Increment}>Increment</button>
    </div>
  );
};

export default Counter;
