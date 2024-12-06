import { useState } from "react";

function UsestateObject() {
  const [first, setFirst] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <form>
        <input
          type="text"
          value={first.firstName}
          onChange={(e) => setFirst({ ...first, firstName: e.target.value })}
        />
        <input
          type="text"
          value={first.lastName}
          onChange={(e) => setFirst({ ...first, lastName: e.target.value })}
        />

        <h5>FirstName: {first.firstName}</h5>
        <h5>LastName: {first.lastName}</h5>
        <h6>{JSON.stringify(first)}</h6>
      </form>
    </div>
  );
}

export default UsestateObject;
