import React from "react";

const HeroSection1 = () => {
  return (
    <div className="relative hersection1-img">
      <img
        src="https://nexuscluster.blob.core.windows.net/server01/artha-venture-fund/undefined/0.8940111406662126.png-9Yvw6z3vyV3f8MxqBgWVa-1709983963"
        alt="hersection1-img"
        className="w-full filter-b6 hersection1-img object-cover"
      />
      <div className="absolute top-0 text-left left-0 flex items-center justify-start hersection1-img">
        <div className="w-full container mx-auto">
          <div className="w-60 md-w-80 sm-w-full">
            <p className="textwhite font-400 sm-text-justify mbpx1 fsize16 md-fsize14 sm-fsize13">
              Quality with Integnity
            </p>
            <h3 className="textwhite font-600 sm-font-400 mtpx9 sm-mtpx4 leading mbpx3 fsize40 md-fsize25 sm-fsize20">
              Krishi Engineering Works
            </h3>
            <p className="textwhite font-400 mbpx1 mtpx1 sm-mtpx4 fsize18 md-fsize16 sm-fsize14 sm-line-clamp4">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before the final copy is available.
            </p>
            <div className="flex items-center justify-start mtpx20 md-mtpx17 sm-mtpx14">
              <button className="border-white cursor-pointer font-500 textprimary rounded-5 sm-rounded-none ptpx12 pbpx12 md-ptpx8 md-pbpx8 sm-ptpx6 sm-pbpx6 md-plpx20 md-prpx20 sm-plpx16 sm-prpx16 plpx35 prpx35 fsize16 md-fsize14 sm-fsize13 bgwhite">
                Connect
              </button>
              <button className="cursor-pointer font-500 rounded-5 sm-rounded-none ptpx12 pbpx12 md-ptpx8 md-pbpx8 sm-ptpx6 sm-pbpx6 md-plpx20 md-prpx20 sm-plpx16 sm-prpx16 plpx35 prpx35 fsize16 md-fsize14 sm-fsize13 whitebtn mlpx20 md-mlpx16 sm-mlpx15">
                About Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection1;
