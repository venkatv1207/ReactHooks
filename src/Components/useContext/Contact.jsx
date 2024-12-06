import { useContext } from "react";
import { ContextDemo } from "./Context";

function Contact() {
  const phone = useContext(ContextDemo);
  return (
    <div>
      <h3>Contact</h3>
      <h5>Phone:{phone}</h5>
    </div>
  );
}

export default Contact;
