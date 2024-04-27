import React from "react";
import FeatherIcon from "feather-icons-react";

const ConnectForm3 = () => {
  return (
    <div className="bgwhite ptpx60 pbpx60 sm-ptpx30 sm-pbpx30">
      <div className="container mx-auto">
        <div className="flex sm-block w-full">
          <div className="w-60 md-w-50 sm-w-full prpx50 md-prpx10 sm-prpx1">
            <p className="font-600 textsecondary fsize18 md-fsize15 sm-fsize12">
              Connect
            </p>
            <h4 className="fsize30 md-fsize24 sm-fsize20 font-600 mtpx1 mbpx1 textprimary">
              Connect with homeCliq
            </h4>
            <p className="mtpx10 font-500 textgray fsize17 md-fsize15 sm-fsize14">
              Connect with us and explore brilliant solutions for property
              management, easy home loans, interior designing, and much more!
              Explore a world of effortless profitable investments with
              HomeCliq. 8318096514
            </p>
            <div className="grid-cols-2 md-grid-cols-1 sm-grid-cols-1 mtpx20 mrpx70 md-mrpx10 sm-mrpx1">
              <div className="flex items-center bgprimary mrpx20 ptpx6 pbpx6 plpx6 prpx15 rounded-30">
                <div className="bgwhite social3-connect flex items-center justify-center">
                  <FeatherIcon
                    icon="mail"
                    size="20"
                    className="flex textprimary"
                  />
                </div>
                <a href="mailto:abcd@gmail.com">
                  <p className="font-500 fsize14 sm-fsize13 textwhite mlpx10">
                    abcd@gmail.com
                  </p>
                </a>
              </div>
              <div className="flex items-center bgprimary mrpx20 md-mtpx10 sm-mtpx10 ptpx6 pbpx6 plpx6 prpx15 rounded-30">
                <div className="bgwhite social3-connect flex items-center justify-center">
                  <FeatherIcon
                    icon="phone"
                    size="20"
                    className="flex textprimary"
                  />
                </div>
                <a href="mailto:abcd@gmail.com">
                  <p className="font-500 fsize14 sm-fsize13 textwhite mlpx10">
                    +91 99305 12803
                  </p>
                </a>
              </div>
            </div>
            <div className="mtpx40 md-mtpx25 sm-mtpx25 mrpx70 md-mrpx10 sm-mrpx1">
              <iframe
                className="border-0 w-full"
                title="map"
                height={300}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng"
              />
            </div>
          </div>
          <div className="w-40 md-w-50 sm-w-full sm-mtpx30 sm-mlpx1 md-mlpx10 mlpx25">
            <div className="bgwhite b-shadow ptpx30 pbpx30 plpx40 prpx40 md-plpx15 md-prpx20 md-ptpx16 md-pbpx16 sm-ptpx20 sm-pbpx20 sm-plpx15 sm-prpx15 rounded-5">
              <div className="">
                <label className="fsize15 sm-fsize13 textdark">Name</label>
                <div>
                  <input
                    placeholder="Enter Name"
                    className="h-input rounded-5 mtpx5 w-input"
                  />
                </div>
              </div>
              <div className="mtpx15">
                <label className="fsize15 sm-fsize13 textdark">Phone</label>
                <div>
                  <input
                    placeholder="Enter Phone"
                    className="h-input rounded-5 mtpx5 w-input"
                  />
                </div>
              </div>
              <div className="mtpx15">
                <label className="fsize15 sm-fsize13 textdark">Email</label>
                <div>
                  <input
                    placeholder="Enter Email"
                    className="h-input rounded-5 mtpx5 w-input"
                  />
                </div>
              </div>
              <div className="mtpx15">
                <label className="fsize15 sm-fsize13 textdark">Message</label>
                <div>
                  <textarea
                    placeholder="Enter Name"
                    className="rounded-5 mtpx5 text-input"
                    rows={6}
                  ></textarea>
                </div>
              </div>
              <button className="border-0 cursor-pointer font-500 textwhite rounded-5 fsize16 sm-fsize13 sm-ptpx10 sm-pbpx10 ptpx8 pbpx8 w-full sm-mtpx10 mtpx20 bgprimary">
                Connect
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectForm3;
