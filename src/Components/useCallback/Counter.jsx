import { useCallback } from "react";
import { useState } from "react";

function CounterCallBack() {
  const [count, setCount] = useState(0);
  const [inc, setInc] = useState(1);

  const handleClick = useCallback(() => {
    setCount((prev) => prev + inc);
  }, [inc]);

  return (
    <div>
      <h1>{count}</h1>
      <h3>{inc}</h3>
      <button onClick={handleClick}>INC</button>
      <button onClick={() => setInc((prev) => prev + 1)}>inc</button>
    </div>
  );
}
export default CounterCallBack;
