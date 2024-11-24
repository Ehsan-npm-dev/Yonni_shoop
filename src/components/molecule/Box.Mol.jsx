import React from "react";
import ice from "../../assets/img/final-01-mobile.png";
import "./box.css";
import LiveItemAtom from "../atom/liveItem.Atom";
import { sells } from "../template/reference";

function BoxMol() {
  return (
    <div className=" lg:w-[65rem] bg-red-500 rounded-2xl py-10  items-center  justify-center">
      <div className=" p-2 md:flex justify-evenly items-center   ">
        <div className="items-center justify-center flex p-2 mb-2 rounded-md">
          <img src={ice} alt="" className="" />
        </div>

        <div className=" flex gap-4 justify-center">
          {sells.map((i) => (
            <LiveItemAtom {...i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BoxMol;
