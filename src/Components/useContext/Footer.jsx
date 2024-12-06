import { useContext } from "react";
import { ContextDemo } from "./Context";

function Footer() {
  const [phone, name] = useContext(ContextDemo);

  return (
    <div>
      <h3>Footer</h3>
      <h3>Phone:{phone}</h3>
      <h4>Name:{name}</h4>
    </div>
  );
}

export default Footer;
