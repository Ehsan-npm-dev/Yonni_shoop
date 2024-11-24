import React from "react";
import { details } from "../template/reference";
import "./big.css";
import TitleItemAtom from "../atom/TitleItem.Atom";
function BigMol() {
  return (
    <div className="flex justify-center items-center">
      <div className="fl">
        <h3 className="text-xl font-semibold">نظرات مشتریان و بزرگان رزمی ایران</h3>

        {details.map((i) => (
          <TitleItemAtom {...i} />
        ))}
      </div>
    </div>
  );
}

export default BigMol;
