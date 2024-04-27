import React, { useState } from "react";

const LeftImageSection6 = () => {
  const [check, setcheck] = useState(1);
  const abouttab = [
    {
      id: 1,
      name: "Our Vision",
    },
    {
      id: 2,
      name: "Our Mission",
    },
    {
      id: 3,
      name: "Our Value",
    },
  ];
  return (
    <div className="ptpx60 pbpx70 md-ptpx30 md-pbpx40 sm-ptpx20 sm-pbpx20">
      <div className="container mx-auto">
        <div className="flex sm-block w-full items-center">
          <div className="w-50 sm-w-full prpx20 md-prpx9 sm-prpx1">
            <div className="relative ">
              <img
                src="https://eduor.vercel.app/images/about_img.png"
                className="w-full leftabout6-img object-contain relative z-30"
                alt="leftabout6-img"
              />
              <div className="absolute bottom-0 right-0 z-40">
                <div className="rounded-5 about6-card p15">
                  <h5 className="fsize36 md-fsize24 sm-fsize18 textwhite mtpx1 mbpx1 font-600">
                    12
                  </h5>
                  <p className="fsize16 md-fsize14 sm-fsize13 textwhite">
                    years of experiences
                  </p>
                </div>
              </div>
              <div className="absolute top-0 left-0 z-50">
                <img
                  src="https://eduor.vercel.app/_next/static/media/about_shape_1.cc38180e.png"
                  alt="leftsecondabout6-img"
                  className="leftsecondabout6-img"
                />
              </div>
            </div>
          </div>
          <div className="w-50 sm-w-full plpx20 md-plpx9 sm-plpx1 sm-mtpx30">
            <p className="fsize13 textprimary font-600 fsize16">About Us</p>
            <h4 className="fsize33 md-fsize23 sm-fsize21 mtpx1 mbpx1 textdark">
              Choose The Best IT Service company
            </h4>
            <div className="mtpx29 md-mtpx15">
              <div className="flex items-center">
                {abouttab.map((e) => (
                  <p
                    className={
                      check === e.id
                        ? "fsize16 md-fsize14 sm-fsize13 font-400 tababoutbox plpx20 prpx20 md-plpx10 md-prpx10 sm-plpx8 sm-prpx8 pbpx8 ptpx8 cursor-pointer mrpx5"
                        : "fsize16 md-fsize14 sm-fsize13 font-400 tababoutborderbox plpx20 prpx20 md-plpx10 md-prpx10 sm-plpx8 sm-prpx8 pbpx8 ptpx8 cursor-pointer mrpx5"
                    }
                    onClick={() => setcheck(e.id)}
                  >
                    {e.name}
                  </p>
                ))}
              </div>
              {check === 1 ? (
                <>
                  <p className="mtpx12 fsize16 sm-fsize13 md-fsize14 textgray">
                    We spot, invest, and nurture passionate founders obsessed
                    with solving the challenges of Indian consumers and
                    businesses. We spot, invest, and nurture passionate founders
                    obsessed with solving the challenges of Indian consumers and
                    businesses.
                  </p>
                </>
              ) : null}
              {check === 2 ? (
                <>
                  <p className="mtpx12 fsize16 sm-fsize13 md-fsize14 textgray">
                    We spot, invest, and nurture passionate founders obsessed
                    with solving the challenges of Indian consumers and
                    businesses. We spot, invest, and nurture passionate founders
                    businesses.
                  </p>
                </>
              ) : null}
              {check === 3 ? (
                <>
                  <p className="mtpx12 fsize16 sm-fsize13 md-fsize14 textgray">
                    We spot, invest, and nurture passionate founders obsessed
                    with solving the challenges of Indian consumers and founders
                    obsessed with solving the challenges of Indian consumers and
                    businesses. We spot, invest, and nurture passionate founders
                    obsessed with solving the challenges of Indian consumers and
                    businesses.
                  </p>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftImageSection6;
