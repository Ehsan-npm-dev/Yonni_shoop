import React from "react";
import "./more.css";
import { products } from "../template/reference";
import MoltiObjectAtom from "../atom/MoltiObject.Atom";
function MoreMol() {
  return (
    <div className=" mt-3 ">
      <div className="flex justify-between px-4 mb-3">

        <h3 className=" font-bold text-blue-600">کلاه رزمی</h3>
        <hr className="mt-1" />
        <button className="  bg-slate-500 text-white px-6 py-1 rounded-md  ">بیشتر</button>
      </div>

      <div className=" flex justify-center gap-2 mb-3 items-center ">
        {products.map((i) => (
          <MoltiObjectAtom {...i} />
        ))}
      </div>
    </div>
  );
}

export default MoreMol;
