import React from "react";
import assets from "../../assets/asset";
const FullScreenNav = () => {
  return (
    <div id="fullScreenNav" className="text-white h-screen py-40 w-full absolute bg-black">
      <div className="" >
        <div className="link border-y">
            <h1 className=" font-semibold text-white text-8xl pb-3.5 text-center  uppercase">PROJECTS</h1>
        <div className="absolute overflow-auto  flex"> 
            <div className="flex items-center">
                <h2 className=" whitespace-nowrap font-semibold text-white text-8xl pb-3.5 text-center  uppercase">TO SEE EVERYTHING</h2>
                <img className="h-20 shrink-0 w-100  object-cover rounded-full" src={assets.NavImg2} alt="" />
                <h2 className=" whitespace-nowrap font-semibold text-white text-8xl pb-3.5 text-center  uppercase">TO SEE EVERYTHING</h2>
                <img className="h-20 shrink-0 w-100 object-cover rounded-full" src={assets.NavImg3} alt="" />
            </div>
            
        </div>

        </div>

        {/* <div className="link border-y">
            <h1 className=" font-semibold text-white text-8xl pb-3.5 text-center  uppercase">Agence</h1>
        </div> */}
      </div>
    </div>
  );
};

export default FullScreenNav;
