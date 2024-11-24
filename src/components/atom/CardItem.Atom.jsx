import React from "react";
import { useNavigate } from "react-router-dom";
import "./card.css";

function CardItemAtom({
  img,
  inventory,
  name,
  url,
}) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(url);
  };
  return (
    <div  onClick={handleClick} className=" p-2 rounded-lg justify-center items-center flex-col bg-white   ">
    
        <h4 className=" flex justify-center items-center rounded-md"> {img}</h4>
        <h3 className="text-[13px] mt-3 flex justify-center items-center font-semibold">{name}</h3>
        <h3 className="font-mono flex justify-center items-center text-[0.6rem] hover:text-blue-600">{inventory}</h3>
        </div>
  
  );
}

export default CardItemAtom;
