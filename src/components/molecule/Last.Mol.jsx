import React from "react";
import "./last.css";
import LastItemAtom from "../atom/LastItem.Atom";
import { lasts } from "../template/reference";
function LastMol() {
  return (
    <div className="  md:w-[60rem] pt-6 p-2 ">

      <div className="flex justify-between">
      <h3 className="text-xl font-semibold"> دستکش بوکس</h3>

        <button className="bg-slate-500 border p-1 justify-center w-[5rem] font-bold rounded-md">بیشتر</button>
      </div>
     
      <div className=" flex justify-center items-center   gap-4">
        {lasts.map((i) => (
          <LastItemAtom {...i} />
        ))}
      </div>
      </div>
    
  );
}

export default LastMol;
