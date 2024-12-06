/* eslint-disable react/prop-types */
import { createContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ContextDemo = createContext();
const ContextProvider = (props) => {
  const phone = "+919390443840";
  const name = "JavaScript lib ReactJS";
  return (
    <ContextDemo.Provider value={[phone, name]}>
      {props.children}
    </ContextDemo.Provider>
  );
};
export default ContextProvider;
