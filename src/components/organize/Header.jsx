import React from "react";
import logo from "../../assets/logo/logo-tr.png"
import { MdCall } from "react-icons/md";
import { MdPersonalInjury } from "react-icons/md";
import { SlBasket } from "react-icons/sl";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";



function Header() {
  return (
    <div className=" w-full justify-center items-center flex-col ">
      <div className="  md:flex md:justify-around  md:items-center lg:justify-evenly mb-3 mt-2">

      <div className="flex  justify-around items-center p-1 gap-32 ">
       
       
        <img src={logo} alt="logo" className=" w-[6rem] bg-slate-100 mr-6  rounded-lg shadow-2xl " />
  
    


      <div className="flex justify-center items-center gap-2">
          {" "}
          <Link className="  border rounded-full flex justify-center items-center w-[2.2rem] h-[2.2rem] bg-slate-300 text-gray-800 hover:bg-white">
            {<MdCall />}
          </Link>
          <Link
            className=" border rounded-full w-[2.2rem] h-[2.2rem] flex items-center justify-center bg-slate-300 text-gray-700 hover:bg-white"
            to="/login">
            {<MdPersonalInjury />}
          </Link>
          <Link className="border text-white w-[2.2rem] h-[2.2rem]  rounded-full bg-slate-500  items-center text-base flex justify-center">
            {<SlBasket />}
          </Link>
        </div>
       
      </div>

      <div className="flex justify-around items-center">
        <button className="border rounded-md p-2 md:hidden lg:hidden">hamb</button>
      <form
          action="#"
          className="flex  justify-center w-[10rem] md:-[20rem] lg:w-[30rem]  rounded-lg items-center   ">
          <input
            type="search"
            placeholder="جستجو در محصولات"
            className="p-1 lg:w-[35rem]"
          />

       

          <button className="btn rounded-r-none rounded-l-lg bg-slate-400 p-2">
            <IoSearch />
          </button>
        </form>
      </div>
      </div>

    </div>
  );
}

export default Header;

//      <div className="section-2 ">
//        <h3 className="yoni">یونی شاپ</h3>

//        <h6 className="yoni-2">
//         سوالی دارید؟تماس بگیرید < className="span">09102684557<///span>{" "}
//       </h6>
//     </div>

//<div className="personal">
//<Link className="flex justify-center p-2 items-center">
//  {<MdPersonalInjury />}
//</Link>
//</div>

//<div className="top-nav2">
//<Link className="hover:text-blue-700"> حساب کاربری</Link>
//<p className="text-[10px]">لطفا وارد حساب خود شوید </p>
//</div>
