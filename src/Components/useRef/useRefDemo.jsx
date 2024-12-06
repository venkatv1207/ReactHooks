import { useEffect, useRef, useState } from "react";

function UseRefDemo() {
  const [val, setVal] = useState(0);
  // const [count, setCount] = useState(0);
  //useRef

  const count = useRef(0);
  // console.log(count);
  //accessing dom element using useref

  const dom = useRef();

  useEffect(() => {
    count.current = count.current + 1;
  });

  // useEffect(() => {
  //   setCount((prev) => prev + 1);
  // });
  const btnClicked = () => {
    console.log(dom.current);
    dom.current.style.background = "red";
  };

  return (
    <div>
      <button
        onClick={() => {
          setVal((prev) => prev + 1);
        }}
      >
        +
      </button>
      <h3>{val}</h3>

      <h2>Render count:{count.current}</h2>

      <div>
        <input type="text" name="" id="" ref={dom} />
        <button onClick={btnClicked}>click</button>
      </div>
    </div>
  );
}
export default UseRefDemo;
