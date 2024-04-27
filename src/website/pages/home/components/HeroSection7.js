import React from "react";
import { NavLink } from "react-router-dom";

const HeroSection7 = () => {
  return (
    <div className="relative hersection-img">
      <img
        src="https://nexuscluster.blob.core.windows.net/server01/artha-venture-fund/undefined/0.8940111406662126.png-9Yvw6z3vyV3f8MxqBgWVa-1709983963"
        alt="hersection"
        className="w-full filter-b6 hersection-img object-cover"
      />
      <div className="absolute top-0 text-left left-0 flex items-center justify-start hersection-img">
        <div className="w-full container mx-auto">
          <div className="w-50 md-w-90 sm-w-full">
            <p className="textwhite font-400 sm-text-justify mbpx1 fsize16 sm-fsize15">
              Quality with Integnity
            </p>
            <h3 className="textwhite font-600 sm-font-400 mtpx9 sm-mtpx6 leading mbpx1 fsize40 sm-fsize20">
              Krishi Engineering Works
            </h3>
            <p className="textwhite font-400 mbpx1 fsize18 sm-fsize14">
              We spot, invest, and nurture passionate founders obsessed with
              solving the challenges of Indian consumers and businesses. We are
              an energetic team of serial entrepreneurs knack of choosing
              winners at their early stages.
            </p>
            <div className="flex items-center justify-start gap-10">
              <NavLink to="/connect">
                <button className="border-0 cursor-pointer font-500 textprimary rounded-5 ptpx12 pbpx12 sm-ptpx6 sm-pbpx6 sm-plpx20 sm-prpx20 plpx35 prpx35 mtpx20 fsize16 sm-fsize13 bgwhite">
                  Connect
                </button>
              </NavLink>
              <NavLink to="/about">
                <button className="cursor-pointer font-500 rounded-5 ptpx12 pbpx12 sm-ptpx6 sm-pbpx6 sm-plpx20 sm-prpx20 plpx35 prpx35 mtpx20 fsize16 sm-fsize13 whitebtn">
                  About Us
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection7;
