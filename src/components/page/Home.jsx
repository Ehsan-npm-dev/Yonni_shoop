import React from "react";
import "./home.css";
import KiseMol from "../molecule/Kise.Mol";
import ProductMol from "../molecule/Product.Mol";
import PicAtom from "../atom/Pic.Atom";
import BoxMol from "../molecule/Box.Mol";
import MoreMol from "../molecule/More.Mol";
import BigMol from "../molecule/Big.Mol";
import LastMol from "../molecule/Last.Mol";
import Imageslider from "../../Imageslider";
import VibeMol from "../../components/molecule/Vibe.Mol";
import OrderMol from "../molecule/Order.Mol";
import TitrMol from "../molecule/Titr.Mol";

function Home() {
  return (
    <div className="p-2 ">
      <div>
        <TitrMol />
        <div className=" flex justify-center items-center">
          <Imageslider></Imageslider>
        </div>

        <div className="flex justify-center items-center sm:flex-wrap md:flex  mt-2">
          <VibeMol />
        </div>
        <div className=" lg:items-center lg:flex lg:justify-center">
          <BoxMol />
        </div>
        <div className=" lg:items-center lg:flex lg:justify-center sm:flex sm:justify-center sm:items-center">
          {" "}
          <ProductMol />
        </div>
        <div className=" lg:items-center lg:flex lg:justify-center sm:flex sm:justify-center sm:items-center">
          <MoreMol />
        </div>
        <div className=" lg:items-center lg:flex lg:justify-center sm:flex sm:justify-center sm:items-center">
          <PicAtom />
        </div>

        <div className=" lg:items-center lg:flex-col   mt-2 p-2 lg:justify-center sm:flex sm:justify-center sm:items-center">
          <LastMol />
        </div>
        <OrderMol />
        <div className=" lg:items-center lg:flex    mt-2 p-2 lg:justify-center sm:flex sm:justify-center sm:items-center">
          <KiseMol />
        </div>

      <div className=" sm:flex sm:justify-center sm:items-center">
      <BigMol />
      </div>
          
        
      </div>
    </div>
  );
}

export default Home;
