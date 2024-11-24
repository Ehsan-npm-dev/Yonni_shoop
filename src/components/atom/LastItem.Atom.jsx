import React from "react";
import { useNavigate } from "react-router-dom";
import "./lastitem.css";

function LastItemAtom({ img, title, price, url }) {
  const navigate = useNavigate();
  const handleClick5 = () => {
    navigate(url);
  };

  return (
    <div
      onClick={handleClick5}
      className=" justify-center items-center flex-col md:w-[18rem] md:h-[12rem] md:flex gap-3 bg-white mt-3 p-2 rounded-md  "
    >
      <h3>{img}</h3>
      <div className="flex-col justify-center">
        <h4 className="text-[15px] font-bold ">{title}</h4>
        <h3 className="text-[16px] font-mono hover:text-gray-500">{price}</h3>
      </div>
    </div>
  );
}

export default LastItemAtom;
