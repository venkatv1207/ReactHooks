import { useEffect, useState } from "react";

function FetchApi() {
  const [inpvalue, setInpvalue] = useState("");
  const [data, setData] = useState([]);

  const handleClick = (e) => {
    setInpvalue(e.target.value.toLowerCase());
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const dt = await res.json();
      setData(dt);
    };
    fetchData();
  }, []);

  // Filter data based on input value
  const searchFilter = data.filter((item) =>
    item.title.toLowerCase().includes(inpvalue)
  );

  return (
    <div>
      <input type="text" onChange={handleClick} className="inp" />
      {searchFilter.map((value) => (
        <div key={value.id} className="main">
          <img src={value.image} alt={value.title} className="img" />
          <h2>{value.title}</h2>
          <h2>${value.price}</h2>
        </div>
      ))}
    </div>
  );
}

export default FetchApi;
