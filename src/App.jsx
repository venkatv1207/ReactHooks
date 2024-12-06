import ArrayUSestate from "./Components/useState/arrayUsestate";
import Counter from "./Components/useState/counter";
import UsestateObject from "./Components/useState/objectUsestate";
import "./App.css";
import UseReducerDemo from "./Components/useReducer/useReducerDemo";
import UseEffectDemo from "./Components/useEffect/useEffectdemo";
import FetchApi from "./Components/useEffect/FetchApi";
import UseEffect from "./Components/useEffect/DemoUseEffect";
import UseRefDemo from "./Components/useRef/useRefDemo";
import UseMemoDemo from "./Components/useMemo/useMemoDemo";
import UseCallBack from "./Components/useCallback/useCallBackDemo";
import UseContex from "./Components/useContext/useContextDemo";
import UseReducer from "./Components/useReducer/useReducerExample";
import CounterCallBack from "./Components/useCallback/Counter";

function App() {
  return (
    <div>
      <Counter />
      <UsestateObject />
      <ArrayUSestate />
      <FetchApi />
      <UseEffectDemo />
      <UseReducerDemo />
      <UseEffect />
      <UseRefDemo />
      <UseMemoDemo />
      <UseCallBack />
      <UseReducer />
      <UseContex />
      <CounterCallBack />
    </div>
  );
}

export default App;
