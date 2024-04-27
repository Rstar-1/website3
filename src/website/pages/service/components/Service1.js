import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper.min.css";

const Service1 = () => {
  const servicecard = [
    {
      title: "Nature of Business",
      description:
        "Artha embodies the spirit of meaning which we bring to your start-up.",
      img: "https://html.themeholy.com/webteck/demo/assets/img/icon/service_card_1.svg",
    },
    {
      title: "Total Number of Employees",
      description:
        "Artha embodies the spirit of meaning which we bring to your start-up.",
      img: "https://html.themeholy.com/webteck/demo/assets/img/icon/service_card_2.svg",
    },
    {
      title: "Year of Establishment",
      description:
        "Artha embodies the spirit of meaning which we bring to your start-up.",
      img: "https://html.themeholy.com/webteck/demo/assets/img/icon/service_card_3.svg",
    },
    {
      title: "Legal Status of Firm",
      description:
        "Artha embodies the spirit of meaning which we bring to your start-up.",
      img: "https://html.themeholy.com/webteck/demo/assets/img/icon/service_card_4.svg",
    },
    {
      title: "Annual Turnover",
      description:
        "Artha embodies the spirit of meaning which we bring to your start-up.",
      img: "https://html.themeholy.com/webteck/demo/assets/img/icon/service_card_5.svg",
    },
    {
      title: "Import Export Code (IEC)",
      description:
        "Artha embodies the spirit of meaning which we bring to your start-up.",
      img: "https://html.themeholy.com/webteck/demo/assets/img/icon/service_card_6.svg",
    },
    {
      title: "GST Number",
      description:
        "Artha embodies the spirit of meaning which we bring to your start-up.",
      img: "https://html.themeholy.com/webteck/demo/assets/img/icon/service_card_7.svg",
    },
  ];
  return (
    <div className="ptpx60 pbpx60 md-ptpx30 md-pbpx30 sm-ptpx20 bg-fa sm-pbpx20">
      <div className="container mx-auto">
        <div className="w-70 sm-w-80 mx-auto">
          <h4 className="fsize36 md-fsize30 sm-fsize20 mtpx1 mbpx1 text-center textprimary font-900">
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
            {servicecard.map((e) => (
              <SwiperSlide>
                <div className="d-shadow text-center service-h flex items-center rounded-10">
                  <div className="plpx10 prpx10 w-full">
                    <img
                      src={e.img}
                      alt="service-img"
                      className="service-img object-contain"
                    />{" "}
                    <h4 className="fsize21 md-fsize20 sm-fsize18 mtpx10 mbpx1 text-center textprimary">
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

export default Service1;
