import React from "react";

const RightImageSection1 = () => {
  return (
    <div className="ptpx60 pbpx60 md-ptpx20 md-pbpx20 bg-fa sm-ptpx20 sm-pbpx20">
      <div className="container mx-auto">
        <div className="flex sm-flex-column-reverse w-full items-center">
          <div className="w-50 sm-w-full sm-mtpx10 prpx20 md-prpx9 sm-prpx1">
            <h4 className="fsize35 md-fsize23 sm-fsize21 mtpx1 mbpx1 textprimary">
              About us
            </h4>
            <p className="mtpx17 sm-mtpx10 fsize16 sm-fsize14 md-fsize14 textgray">
              We spot, invest, and nurture passionate founders obsessed with
              solving the challenges of Indian consumers and businesses.
              <br></br> We are an energetic team of serial entrepreneurs,
              super-angels & venture capital professionals with an established
              knack of choosing winners at their early stages.<br></br> With our
              founders, we design & support robust models to create category
              leaders that deliver massive value for every stakeholder.
            </p>
            <button className="border-0 cursor-pointer font-500 textwhite rounded-5 ptpx9 pbpx9 sm-ptpx6 sm-pbpx6 sm-plpx20 sm-prpx20 plpx35 prpx35 mtpx20 sm-mtpx14 fsize16 sm-fsize13 bgprimary">
              Know More
            </button>
          </div>
          <div className="w-50 sm-w-full plpx20 md-plpx1 sm-plpx1">
            <img
              src="https://html.themexriver.com/it-firm/images/resource/about-3.png"
              className="w-full rightabout1-img object-cover md-object-contain"
              alt="rightabout1-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightImageSection1;
