import React from "react";
import FeatherIcon from "feather-icons-react";

const ConnectForm2 = () => {
  return (
    <div className="bgwhite ptpx60 pbpx60 md-ptpx1 md-pbpx1 sm-ptpx1 sm-pbpx1">
      <div className="container mx-auto">
        <div className="flex sm-block ptpx30 pbpx30 sm-ptpx20 sm-pbpx20 sm-mtpx20 mtpx40 bg-fa sm-bgnone rounded-20 sm-rounded-none w-full">
          <div className="w-50 md-w-50 sm-w-full mrpx65 md-mrpx15 sm-mrpx1 sm-mlpx1 md-mlpx15 mlpx30">
            <h4 className="textprimary font-600 mtpx10 mbpx1 fsize30 md-fsize24 sm-fsize20">
              Connect With Us
            </h4>
            <p className="textdark font-500 mtpx10 sm-fsize13 text-left mbpx1 fsize15 sm-fsize13">
              65/73, C.P. Tank Road, Habib Building, Mumbai-400004, Maharashtra,
              India
            </p>
            <div className="">
              <h6 className="fsize20 mtpx19 sm-fsize17 mbpx1 textdark font-600">
                Social Media
              </h6>

              <div className="flex items-center gap-9 mtpx16">
                <div className="social-connect sm-mlpx6 flex items-center justify-center bgprimary">
                  <FeatherIcon
                    icon="instagram"
                    size="16"
                    className="textwhite"
                  />
                </div>
                <div className="social-connect sm-mlpx6 flex items-center justify-center bgprimary">
                  <FeatherIcon
                    icon="linkedin"
                    size="16"
                    className="textwhite"
                  />
                </div>
                <div className="social-connect sm-mlpx6 flex items-center justify-center bgprimary">
                  <FeatherIcon icon="mail" size="16" className="textwhite" />
                </div>
                <div className="social-connect sm-mlpx6 flex items-center justify-center bgprimary">
                  <FeatherIcon
                    icon="facebook"
                    size="16"
                    className="textwhite"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-50 md-w-50 sm-w-full sm-mtpx30 sm-mlpx1 sm-mrpx1 md-mlpx10 md-mrpx15 mlpx65 mrpx30">
            <div className="bgwhite ptpx30 pbpx30 plpx40 prpx40 md-plpx15 md-prpx20 md-ptpx16 md-pbpx16 sm-ptpx20 sm-pbpx20 sm-plpx15 sm-prpx15 rounded-10">
              <h4 className="textprimary font-600 mtpx1 mbpx1 sm-fsize18 md-fsize20 fsize29">
                Enquiry Form
              </h4>
              <div className="mtpx10">
                <label className="fsize15 sm-fsize13 textdark">Name</label>
                <div>
                  <input
                    placeholder="Enter Name"
                    className="h-input rounded-5 mtpx5 w-input"
                  />
                </div>
              </div>
              <div className="mtpx10">
                <label className="fsize15 sm-fsize13 textdark">Phone</label>
                <div>
                  <input
                    placeholder="Enter Phone"
                    className="h-input rounded-5 mtpx5 w-input"
                  />
                </div>
              </div>
              <div className="mtpx10">
                <label className="fsize15 sm-fsize13 textdark">Email</label>
                <div>
                  <input
                    placeholder="Enter Email"
                    className="h-input rounded-5 mtpx5 w-input"
                  />
                </div>
              </div>
              <div className="mtpx10">
                <label className="fsize15 sm-fsize13 textdark">Message</label>
                <div>
                  <textarea
                    placeholder="Enter Name"
                    className="rounded-5 mtpx5 text-input"
                    rows={6}
                  ></textarea>
                </div>
              </div>
              <button className="border-0 cursor-pointer font-500 textwhite rounded-5 fsize16 sm-fsize13 sm-ptpx10 sm-pbpx10 sm-plpx20 sm-prpx20  ptpx8 pbpx8 plpx35 prpx35 sm-mtpx10 mtpx20 bgprimary">
                Connect
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectForm2;
