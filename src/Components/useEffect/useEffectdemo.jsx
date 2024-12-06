import { useEffect, useState } from "react";

function UseEffectDemo() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }
  useEffect(() => {
    console.log("useEffect called", count);
    return () => {
      console.log("cleaned up!");
    };
  }, [count]);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>click</button>
    </div>
  );
}
export default UseEffectDemo;
