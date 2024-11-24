import React from 'react'
import { Link } from 'react-router-dom'
import gun from "../../assets/razmi/IMG_0738-300x300.png"
function Book() {
  return (
    <div>
     <div>
      <h3>خانه/سلاح های رزمی</h3>
      <h4>سلاح رزمی</h4>
     </div>

     <div>
        <ul className="flex flex-wrap gap-3 p-2 justify-center">
          <li className="rounded-md">
            <Link>
            <img src={gun} alt="image" className="size-40"/>
            <h2 className="bg-white">پوشاک بدنسازی بانوان</h2>
            </Link>
          </li>
          <li className="rounded-md">
            <Link>
            <img src={gun} alt="image" className="size-40 "/>
            <h2 className="bg-white w-[10rem] ">پوشاک بدنسازی بانوان</h2>
            </Link>
          </li>
          <li className="rounded-md">
            <Link>
            <img src={gun} alt="image" className="size-40"/>
            <h2 className="bg-white w-[10rem] ">پوشاک بدنسازی بانوان</h2>
            </Link>
          </li>

          <li className="rounded-md">
            <Link>
            <img src={gun} alt="image" className="size-40"/>
            <h2 className="bg-white w-[10rem] ">پوشاک بدنسازی بانوان</h2>
            </Link>
          </li>
          <li className="rounded-md">
            <Link>
            <img src={gun} alt="image" className="size-40"/>
            <h2 className="bg-white w-[10rem] ">پوشاک بدنسازی بانوان</h2>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Book
