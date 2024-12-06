/* eslint-disable react/prop-types */
import { useMemo } from "react";

function Demo2({ filterTerm, items }) {
  const filteredItems = useMemo(() => {
    console.log("Filtering...");
    return items.filter((item) => item.includes(filterTerm));
  }, [items, filterTerm]);

  return (
    <ul>
      {filteredItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
export default Demo2;
