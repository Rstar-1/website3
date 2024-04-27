import React from "react";

const Gallery1 = () => {
  return (
    <div className="ptpx60 pbpx60 md-ptpx30 md-pbpx30 sm-ptpx20 bg-fa sm-pbpx20">
      <div className="container mx-auto">
        <div className="w-60 mx-auto">
          <h4 className="fsize40 md-fsize30 sm-fsize20 mtpx1 mbpx1 uppercase text-center textdark font-900">
            Gallery
          </h4>
        </div>
        <div className="grid-cols-3 md-grid-cols-2 sm-grid-cols-1 gap-12 mtpx26">
          <div className="m6">
            <img
              src="https://eduor.vercel.app/images/event_img_1.png"
              alt="gallery"
              className="w-full gallery-img flex object-cover"
            />
          </div>
          <div className="m6">
            <img
              src="https://eduor.vercel.app/images/event_img_2.png"
              alt="gallery"
              className="w-full gallery-img flex object-cover"
            />
          </div>
          <div className="m6">
            <img
              src="https://eduor.vercel.app/images/event_img_3.png"
              alt="gallery"
              className="w-full gallery-img flex object-cover"
            />
          </div>
          <div className="m6">
            <img
              src="https://eduor.vercel.app/images/event_img_5.png"
              alt="gallery"
              className="w-full gallery-img flex object-cover"
            />
          </div>
          <div className="m6">
            <img
              src="https://eduor.vercel.app/images/event_img_4.png"
              alt="gallery"
              className="w-full gallery-img flex object-cover"
            />
          </div>
          <div className="m6">
            <img
              src="https://eduor.vercel.app/images/event_img_6.png"
              alt="gallery"
              className="w-full gallery-img flex object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery1;
