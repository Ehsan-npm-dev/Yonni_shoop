import React from "react";
import "./titr.css";
import { Link } from "react-router-dom";
function TitrMol() {
  return (
    <div className="hidden justify-center p-2 md:hidden lg:flex  items-center rounded-md ">
      <ul className=" w-[28rem] bg-blue-300 lg:w-[63rem] rounded-md shadow-lg flex justify-center lg:gap-6">
        <li className="dropdown ">
          {" "}
          <Link className="dropbtn">دستکش</Link>
          <div className="dropdown-content">
            <a href="#">link-2</a>
            <a href="#">link-1</a>
      
          </div>
        </li>

        
          <li className=" dropdown">
            {" "}
            <Link className="dropbtn">ساق بند </Link>
            <div className="dropdown-content">
              <a href="#">link-1</a>
              <a href="#">Link-2</a>
            </div>
          </li>
        
        
          <li className="dropdown"><Link className="dropbtn"> کلاه رزمی</Link>
          
          <div className="dropdown-content">
            <a href="#">link-1</a>
            <a href="#">Link-2</a>

          </div>
          
          </li>
    
       
          <li className="dropdown"><Link className="dropntn"> پوشاک  رزمی </Link>
          
          <div className="dropdown-content">
            <a href="#">link-1</a>
            <a href="#">Link-2</a>
          </div>
          
           </li>
       
      </ul>
    </div>
  );
}

export default TitrMol;
