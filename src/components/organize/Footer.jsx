import React from "react";
import LinkMol from "../molecule/Link.Mol";
import { FaLocationDot } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { HiOutlineMailOpen } from "react-icons/hi";

function Footer() {
  return (
    <div className="flex-col  justify-center items-center mt-4  ">
      <div className="sm:flex-col gap-[2rem]  text-black text-xl  font-bold  justify-center items-center ">

        <div className=" md:flex md:bg-slate-100 md:justify-center md:items-center md:p-2  ">

        <div className=" flex justify-center items-center gap-3">
          <FaLocationDot />
          <p className="sm:text-md">آدرس: تهران — بالاتر از میدان منیریه – شماره 955</p>
        </div>
        <div  className=" flex  justify-center items-center gap-3">
          <IoCallOutline />
          <p className="">تماس: ۶۶۴۵۶۰۶۵ – ۰۲۱ (پاسخگویی 10 صبح الی 17)</p>
        </div>

        <div  className=" flex justify-center items-center gap-3">
          <HiOutlineMailOpen />
          <p className="">info@takrazm.com</p>
        </div>
        </div>
       
      </div>

      <div className="flex-wrap">
        <LinkMol />
      </div>
    </div>
  );
}

export default Footer;
