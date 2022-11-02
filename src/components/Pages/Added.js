import React from "react";
import { useState } from "react";

const Added = () => {
  const [item, setItem] = useState({});

  //   items on blur handelar
  const itemsAddedBlur = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    item[name] = value;
  };

  // items added handelar
  const itemsAddedHandelar = (event) => {
    event.preventDefault();

    fetch("http://localhost:5000/items", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    console.log(item);
    event.target.reset();
  };
  return (
    <div className="h-screen w-full bg-gray-400">
      <div className="max-w-[1140px] mx-auto">
        <form onSubmit={itemsAddedHandelar}>
          <input
            onBlur={itemsAddedBlur}
            className="p-3 m-3 rounded-md"
            required
            type="text"
            name="name"
            placeholder="Item Name"
          />
          <input
            onBlur={itemsAddedBlur}
            className="p-3 m-3 rounded-md"
            type="text"
            name="photo"
            placeholder="Photo URL"
          />
          <input
            onBlur={itemsAddedBlur}
            className="p-3 m-3 rounded-md"
            required
            type="text"
            name="price"
            placeholder="Price"
          />
          <input
            onBlur={itemsAddedBlur}
            className="p-3 m-3 rounded-md"
            required
            type="text"
            name="quaintaty"
            placeholder="Quaintary"
          />
          <input
            className="bg-red-600  py-2 px-8 text-white text-xl cursor-pointer rounded-md"
            type="submit"
            value="Add"
          />
        </form>
      </div>
    </div>
  );
};

export default Added;
