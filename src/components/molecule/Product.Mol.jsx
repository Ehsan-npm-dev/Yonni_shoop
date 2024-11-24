import React from "react";
import { routes } from "../template/reference";
import CardItemAtom from "../atom/CardItem.Atom";
import "./product.css";
function ProductMol() {
  return (
    <div className="mt-4">
      <div className="flex justify-between px-4">
        <h3 className=" text-blue-600 font-bold">جدیدترین محصولات</h3>

        <button className=" bg-slate-500 px-6 text-white py-1 rounded-md ">
          بیشتر
        </button>
      </div>

      <div className=" p-2 mt-2 flex justify-center items-center gap-1 ">
        {routes.map((i) => (
          <CardItemAtom {...i} />
        ))}
      </div>
    </div>
  );
}

export default ProductMol;
