import React, { useState } from "react";
import { useEffect } from "react";

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  console.log(items);
  return (
    <div>
      <div className="max-w-[1140px] mx-auto">
        <p>Produce - {items.length}</p>
        <div className=" grid grid-cols-4 gap-3"></div>
      </div>
    </div>
  );
};

export default Home;
