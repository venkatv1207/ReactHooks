import { useMemo, useState } from "react";
import Demo2 from "./useMemoDemo1";

function UseMemoDemo() {
  const [num, setNum] = useState(0);
  const [count, setCount] = useState(0);
  const [filterTerm, setFilterTerm] = useState("");
  const items = ["apple", "banana", "cherry", "date", "fig", "grape"];
  function cubeNum(n) {
    console.log("done");
    return Math.pow(n, 3);
  }
  const res = useMemo(() => cubeNum(num), [num]);
  return (
    <div>
      <input
        type="number"
        value={num}
        onChange={(e) => {
          setNum(e.target.value);
        }}
      />
      <h3>Cube of num: {res}</h3>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click
      </button>
      <h3>{count}</h3>
      <div>
        <input
          type="text"
          value={filterTerm}
          onChange={(e) => setFilterTerm(e.target.value)}
          placeholder="Filter items"
        />
        <Demo2 items={items} filterTerm={filterTerm} />
      </div>
    </div>
  );
}
export default UseMemoDemo;
