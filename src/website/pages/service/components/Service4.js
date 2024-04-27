import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import "swiper/swiper.min.css";

const Service4 = () => {
  SwiperCore.use([Autoplay]);
  const informcard = [
    {
      title: "Nature of Business",
      description:
        "Artha embodies the spirit of meaning which we bring to your start-up.",
      img: require("../../../../assets/coin.gif"),
    },
    {
      title: "Total Number of Employees",
      description:
        "Artha embodies the spirit of meaning which we bring to your start-up.",
      img: require("../../../../assets/users.gif"),
    },
    {
      title: "Year of Establishment",
      description:
        "Artha embodies the spirit of meaning which we bring to your start-up.",
      img: require("../../../../assets/build.gif"),
    },
    {
      title: "Legal Status of Firm",
      description:
        "Artha embodies the spirit of meaning which we bring to your start-up.",
      img: require("../../../../assets/weight.gif"),
    },
    {
      title: "Annual Turnover",
      description:
        "Artha embodies the spirit of meaning which we bring to your start-up.",
      img: require("../../../../assets/stock.gif"),
    },
    {
      title: "Import Export Code (IEC)",
      description:
        "Artha embodies the spirit of meaning which we bring to your start-up.",
      img: require("../../../../assets/web.gif"),
    },
    {
      title: "GST Number",
      description:
        "Artha embodies the spirit of meaning which we bring to your start-up.",
      img: require("../../../../assets/file.gif"),
    },
  ];
  return (
    <div className="ptpx60 pbpx60 md-ptpx30 md-pbpx30 sm-ptpx20 bg-fa sm-pbpx20">
      <div className="container mx-auto">
        <div className="w-60 mx-auto">
          <h4 className="fsize40 md-fsize30 sm-fsize20 mtpx1 mbpx1 uppercase text-center textdark font-900">
            Our Services
          </h4>
          <p className="text-center mtpx17 fsize17 md-fsize16 sm-fsize14 textgray">
            “Artha embodies the spirit of meaning which we bring to your
            start-up. We provide our founders with all the resources required to
            create companies, today, that will define how business is conducted
            – tomorrow”
          </p>
        </div>
        <div className="mtpx22">
          <Swiper
            grabCursor={true}
            className="mySwiper p10"
            // autoplay={{
            //   delay: 1000,
            //   disableOnInteraction: false,
            // }}
            breakpoints={{
              1536: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              991: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2.5,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 1,
              },
              425: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
            }}
          >
            {informcard.map((e) => (
              <SwiperSlide>
                <div className="d-shadow text-center ourservice-h flex items-center rounded-10">
                  <div className="plpx10 prpx10 w-full">
                    <img
                      src={e.img}
                      alt="ourservice-img"
                      className="ourservice-img object-contain"
                    />{" "}
                    <h4 className="fsize24 md-fsize23 sm-fsize18 mtpx5 mbpx1 text-center textprimary">
                      {e.title}
                    </h4>
                    <p className="mtpx10 fsize15 sm-fsize14 text-center md-fsize14 textgray">
                      {e.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Service4;
