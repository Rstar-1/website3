import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import "swiper/swiper.min.css";

const Blog9 = () => {
  SwiperCore.use([Autoplay]);
  return (
    <div className="ptpx60 pbpx60 md-ptpx30 md-pbpx30 sm-ptpx20 sm-pbpx20">
      <div className="container mx-auto">
        <div className="w-80 mx-auto">
          <h4 className="fsize40 md-fsize30 sm-fsize20 mtpx1 mbpx1 uppercase text-center textdark font-900">
            Our Blogs
          </h4>
          <p className="text-center mtpx14 fsize17 md-fsize16 sm-fsize14 textgray">
            Dive into our thought-provoking blogs, where industry insights,
            tips, and trends await to inspire and inform
          </p>
        </div>
        <div className="mtpx22">
          <Swiper
            grabCursor={true}
            className="mySwiper p10"
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
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
                slidesPerView: 3,
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
            <SwiperSlide>
              <div className="d-shadow rounded-10">
                <div className="p10">
                  <img
                    src="https://nexuscluster.blob.core.windows.net/server01/artha-venture-fund/undefined/0.1281124981277748.jpg-od0D5WyBpnQHbKTvVJ8uc-1710156675"
                    alt="blogever-img"
                    className="blogever-img object-cover"
                  />
                  <div className="flex items-center mtpx10 justify-between">
                    <div className="bg-light-primary plpx20 prpx20 rounded-20">
                      <p className="fsize13 textprimary font-600">Category</p>
                    </div>
                    <p className="fsize13 text-dark">12/12/2024</p>
                  </div>
                  <div className="pbpx20 ptpx9 plpx8 prpx8">
                    <h4 className="fsize20 md-fsize23 sm-fsize18 mtpx1 mbpx1 textsecondary">
                      About us
                    </h4>
                    <p className="mtpx2 fsize15 sm-fsize14 md-fsize14 textgray">
                      “Artha embodies the spirit of meaning which we bring to
                      your start-up.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="d-shadow rounded-10">
                <div className="p10">
                  <img
                    src="https://nexuscluster.blob.core.windows.net/server01/artha-venture-fund/undefined/0.1281124981277748.jpg-od0D5WyBpnQHbKTvVJ8uc-1710156675"
                    alt="blogever-img"
                    className="blogever-img object-cover"
                  />
                  <div className="flex items-center mtpx10 justify-between">
                    <div className="bg-light-primary plpx20 prpx20 rounded-20">
                      <p className="fsize13 textprimary font-600">Category</p>
                    </div>
                    <p className="fsize13 text-dark">12/12/2024</p>
                  </div>
                  <div className="pbpx20 ptpx9 plpx8 prpx8">
                    <h4 className="fsize20 md-fsize23 sm-fsize18 mtpx1 mbpx1 textsecondary">
                      About us
                    </h4>
                    <p className="mtpx2 fsize15 sm-fsize14 md-fsize14 textgray">
                      “Artha embodies the spirit of meaning which we bring to
                      your start-up.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="d-shadow rounded-10">
                <div className="p10">
                  <img
                    src="https://nexuscluster.blob.core.windows.net/server01/artha-venture-fund/undefined/0.1281124981277748.jpg-od0D5WyBpnQHbKTvVJ8uc-1710156675"
                    alt="blogever-img"
                    className="blogever-img object-cover"
                  />
                  <div className="flex items-center mtpx10 justify-between">
                    <div className="bg-light-primary plpx20 prpx20 rounded-20">
                      <p className="fsize13 textprimary font-600">Category</p>
                    </div>
                    <p className="fsize13 text-dark">12/12/2024</p>
                  </div>
                  <div className="pbpx20 ptpx9 plpx8 prpx8">
                    <h4 className="fsize20 md-fsize23 sm-fsize18 mtpx1 mbpx1 textsecondary">
                      About us
                    </h4>
                    <p className="mtpx2 fsize15 sm-fsize14 md-fsize14 textgray">
                      “Artha embodies the spirit of meaning which we bring to
                      your start-up.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="d-shadow rounded-10">
                <div className="p10">
                  <img
                    src="https://nexuscluster.blob.core.windows.net/server01/artha-venture-fund/undefined/0.1281124981277748.jpg-od0D5WyBpnQHbKTvVJ8uc-1710156675"
                    alt="blogever-img"
                    className="blogever-img object-cover"
                  />
                  <div className="flex items-center mtpx10 justify-between">
                    <div className="bg-light-primary plpx20 prpx20 rounded-20">
                      <p className="fsize13 textprimary font-600">Category</p>
                    </div>
                    <p className="fsize13 text-dark">12/12/2024</p>
                  </div>
                  <div className="pbpx20 ptpx9 plpx8 prpx8">
                    <h4 className="fsize20 md-fsize23 sm-fsize18 mtpx1 mbpx1 textsecondary">
                      About us
                    </h4>
                    <p className="mtpx2 fsize15 sm-fsize14 md-fsize14 textgray">
                      “Artha embodies the spirit of meaning which we bring to
                      your start-up.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Blog9;
