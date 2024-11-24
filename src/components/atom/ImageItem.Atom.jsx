import React from "react";
import { useNavigate } from "react-router-dom";


function ImageItemAtom({ img, url }) {
  const navigate = useNavigate();
  const handleClick7 = () => {
    navigate(url);
  };

  return (
    <div onClick={handleClick7}className=" flex justify-around">
      
        <h3>{img}</h3>
    
    </div>
  );
}

export default ImageItemAtom;
