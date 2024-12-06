import { useReducer } from "react";

function UseReducer() {
  const initial = { count: 0 };
  const reducer = (s, action) => {
    switch (action.type) {
      case "increase":
        return { count: s.count + 1 };
      case "decrease":
        return { count: s.count - 1 };
      case "input":
        return { count: action.payload };
      default:
        return s;
    }
  };

  const [state, dispatch] = useReducer(reducer, initial);

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "increase" })}>INcrease</button>
      <button onClick={() => dispatch({ type: "decrease" })}>Decrease</button>
      <br />
      <input
        type="number"
        onChange={(e) =>
          dispatch({ type: "input", payload: Number(e.target.value) })
        }
      />
    </div>
  );
}
export default UseReducer;
