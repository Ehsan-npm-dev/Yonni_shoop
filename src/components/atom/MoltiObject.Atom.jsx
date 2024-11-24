import React from "react";
import { useNavigate } from "react-router-dom";
import "./molti.css";

function MoltiObjectAtom({
  img,

  name,
  price,
  url,
}) {
  const navigate = useNavigate();
  const handleClick3 = () => {
    navigate(url);
  };
  return (
 
      <div onClick={handleClick3} className="bg-white items-center justify-center flex-col md:w-[12rem] md:flex rounded-md p-2  md:h-[12rem]">
        <h3>{img}</h3>
      
          <p className="font-bold hover:text-red-800 ">{name}</p>
          <h4 className="text-blue-700 text-[13px] font-mono hover:text-blue-400">
            {price} 
          </h4>
        </div>
      
 
  );
}

export default MoltiObjectAtom;
