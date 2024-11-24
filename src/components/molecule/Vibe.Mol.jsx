import React from "react";

import ImageItemAtom from "../atom/ImageItem.Atom";
import { images } from "../template/reference";
function VibeMol() {
  return (
    <div className="  mt-2  mb-2 flex gap-4 items-center p-2 w-[30rem] justify-evenly md:w-[55rem] md:justify-between ">
      {images.map((i) => (
        <ImageItemAtom {...i} />
      ))}
    </div>
  );
}

export default VibeMol;
