import { useReducer } from "react";

function useCount(state, input) {
  console.log(state, input);
  return state + input;
}

function UseReducerDemo() {
  const [counter, dispatch] = useReducer(useCount, 0);
  return (
    <div>
      <button onClick={() => dispatch(-1)}>-</button>
      <h2>{counter}</h2>
      <button onClick={() => dispatch(1)}>+</button>
    </div>
  );
}
export default UseReducerDemo;
