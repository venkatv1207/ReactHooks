import { useCallback, useState } from "react";
import Header from "./header";

function UseCallBack() {
  const [count, setCount] = useState(0);
  const Fun = useCallback(() => {}, []);

  return (
    <div>
      <h3>{count}</h3>
      <Header Fun={Fun} />
      <button onClick={() => setCount((p) => p + 1)}>click</button>
    </div>
  );
}
export default UseCallBack;
