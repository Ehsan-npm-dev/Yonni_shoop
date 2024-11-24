import React from "react";
import { Link } from "react-router-dom";
import leg from "../../assets/Poshak/Untitled-2.jpg"
function List() {
  return (
    <div className="w-full">
      <div>
        {" "}
        <h3>خانه/پوشاک بدنسازی</h3>
        <h4>پوشاک بدنسازی</h4>
      </div>

      <div>
        <ul className="flex flex-wrap gap-3 p-2 justify-center">
          <li className="rounded-md">
            <Link>
            <img src={leg} alt="image" className="size-40"/>
            <h2 className="bg-white">پوشاک بدنسازی بانوان</h2>
            </Link>
          </li>
          <li className="rounded-md">
            <Link>
            <img src={leg} alt="image" className="size-40 "/>
            <h2 className="bg-white w-[10rem] ">پوشاک بدنسازی بانوان</h2>
            </Link>
          </li>
          <li className="rounded-md">
            <Link>
            <img src={leg} alt="image" className="size-40"/>
            <h2 className="bg-white w-[10rem] ">پوشاک بدنسازی بانوان</h2>
            </Link>
          </li>

          <li className="rounded-md">
            <Link>
            <img src={leg} alt="image" className="size-40"/>
            <h2 className="bg-white w-[10rem] ">پوشاک بدنسازی بانوان</h2>
            </Link>
          </li>
          <li className="rounded-md">
            <Link>
            <img src={leg} alt="image" className="size-40"/>
            <h2 className="bg-white w-[10rem] ">پوشاک بدنسازی بانوان</h2>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default List;
