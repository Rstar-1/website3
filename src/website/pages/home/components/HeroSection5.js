import React from "react";
import bottom from "../../../../assets/bottom.png"
import dotted from "../../../../assets/doted.png"
import trees from "../../../../assets/trees.png"
import hero from "../../../../assets/hero.png"
import circles from "../../../../assets/circles.png"

const HeroSection5 = () => {
  return (
    <div className="relative bgprimary w-full">
      <div className="container mx-auto">
        <div className="flex sm-block w-full items-center ptpx50 pbpx90 md-ptpx30 md-pbpx50 sm-ptpx25 sm-pbpx40">
          <div className="w-60 md-w-50 sm-w-full prpx20 md-prpx9 sm-prpx1">
            <h3 className="fsize35 md-fsize23 sm-fsize21 mtpx1 mbpx1 textwhite">
              Award winning digital marketing agency
            </h3>
            <p className="mtpx10 sm-mtpx10 fsize16 sm-fsize14 md-fsize14 textwhite">
              Dissuade ecstatic and properly saw entirely sir why laughter
              endeavor. In on my jointure horrible margaret suitable he followed
              speedily. Indeed vanity excuse or mr lovers of on. By offer scale
              an stuff. Blush be sorry no sight sang lose.
            </p>
            <div className="flex items-center mtpx20">
              <button className="cursor-pointer font-500 textprimary border-white rounded-5 ptpx12 pbpx12 md-ptpx8 md-pbpx8 sm-ptpx6 sm-pbpx6 md-plpx20 md-prpx20 sm-plpx16 sm-prpx16 plpx35 prpx35 fsize16 md-fsize14 sm-fsize13 bgwhite">
                About Us
              </button>
              <button className="cursor-pointer font-500 whitebtn rounded-5 ptpx12 pbpx12 md-ptpx8 md-pbpx8 sm-ptpx6 sm-pbpx6 md-plpx20 md-prpx20 sm-plpx16 sm-prpx16 plpx35 prpx35 fsize16 md-fsize14 sm-fsize13 mlpx13">
                Know More
              </button>
            </div>
          </div>
          <div className="w-40 md-w-50 sm-w-full plpx20 md-plpx1 sm-plpx1 sm-mtpx10">
            <img
              src={hero}
              className="w-full herosection5-img object-contain"
              alt="herosection5-img"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <img
          src={bottom}
          alt="herosecondsection5-img"
          className="w-full herosecondsection5-img flex"
        />
      </div>
      <div className="absolute top-0 left-0">
        <img
          src={dotted}
          alt="herothirdsection5-img"
          className="herothirdsection5-img flex"
        />
      </div>
      <div className="absolute top-0 right-0 sm-hidden">
        <img
          src={dotted}
          alt="heroforthsection5-img"
          className="heroforthsection5-img flex"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-full flex justify-center sm-hidden">
        <img
          src={trees}
          alt="herofifthsection5-img"
          className="herofifthsection5-img flex"
        />
      </div>
      <div className="absolute top-0 left-0 w-full flex justify-center sm-hidden">
        <img
          src={circles}
          alt="herosixthsection5-img"
          className="herosixthsection5-img flex"
        />
      </div>
    </div>
  );
};

export default HeroSection5;
