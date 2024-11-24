import React from "react";
import { Link } from "react-router-dom";
import yoga from "../../assets/img/Box/yaga1.jpg";
import dambel from "../../assets/img/Box/dambel.jpg";
function PicAtom() {
  return (
    <div className="sm:flex-col md:flex-wrap md:justify-center md:items-center md:flex  justify-center">
    
        <Link to="">
        <img src={yoga} alt="yoga" className="rounded-xl shadow-xl " />
        </Link>

        <Link link="">
        <img src={dambel} alt="gym" className=" rounded-xl shadow-2xl  " />
        </Link>
        
    
    </div>
  );
}

export default PicAtom;
