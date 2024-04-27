import React, { useState } from "react";
import HeroSection1 from "../home/components/HeroSection1";
import HeroSection2 from "../home/components/HeroSection2";
import LeftImageSection1 from "../about/components/LeftImageSection1";
import RightImageSection1 from "../about/components/RightImageSection1";
import LeftImageSection4 from "../about/components/LeftImageSection4";
import RightImageSection4 from "../about/components/RightImageSection4";
import Service1 from "../service/components/Service2";
import Blog1 from "../blog/components/Blog1";
import Portfolio1 from "../gallery/components/Portfolio1";
import Testimonial1 from "../team/components/Testimonial1";
import Gallery1 from "../gallery/components/Gallery1";
import ConnectForm1 from "../connect/components/ContactForm1";
import ConnectForm2 from "../connect/components/ContactForm2";
import ConnectForm3 from "../connect/components/ContactForm3";
import FeatherIcon from "feather-icons-react";
// https://html.themeholy.com/webteck/demo/assets/img/shape/tech_shape_1.png

const Demo = () => {
  const [data, setData] = useState([
    { id: 1, content: <HeroSection1 />, status: true },
    { id: 2, content: <HeroSection2 />, status: true },
    { id: 3, content: <LeftImageSection1 />, status: true },
    { id: 4, content: <RightImageSection1 />, status: true },
    { id: 5, content: <LeftImageSection4 />, status: true },
    { id: 6, content: <RightImageSection4 />, status: true },
    { id: 7, content: <Service1 />, status: true },
    { id: 8, content: <Blog1 />, status: true },
    { id: 9, content: <Portfolio1 />, status: true },
    { id: 10, content: <Testimonial1 />, status: true },
    { id: 11, content: <Gallery1 />, status: true },
    { id: 12, content: <ConnectForm1 />, status: true },
    { id: 13, content: <ConnectForm2 />, status: true },
    { id: 14, content: <ConnectForm3 />, status: true },
  ]);
  const moveUp = (index) => {
    if (index === 0) return; // Already at the top
    const newData = [...data];
    // Swap positions
    [newData[index], newData[index - 1]] = [newData[index - 1], newData[index]];
    setData(newData);
  };
  const handleClick = (id) => {
    setData(
      data.map((item) => {
        if (item.id === id) {
          return { ...item, status: false };
        }
        return item;
      })
    );
  };
  const moveDown = (index) => {
    if (index === data.length - 1) return; // Already at the bottom
    const newData = [...data];
    // Swap positions
    [newData[index], newData[index + 1]] = [newData[index + 1], newData[index]];
    setData(newData);
  };

  return (
    <div>
      {data.map((item, index) => (
        <>
          <div className="relative">
            {item.status === true ? (
              <>
                <div key={item.id}>{item.content}</div>
              </>
            ) : null}
            <div className="absolute top-0 right-0 flex items-center">
              <div
                className="bgprimary textwhite plpx10 prpx10 ptpx9 pbpx9 rounded-5 cursor-pointer m5"
                onClick={() => handleClick(item.id)}
              >
                <FeatherIcon icon="trash" className="flex" size="16" />
              </div>
              <div
                className="bgprimary textwhite plpx10 prpx10 ptpx9 pbpx9 rounded-5 cursor-pointer m5"
                onClick={() => moveUp(index)}
                disabled={index === 0}
              >
                <FeatherIcon icon="arrow-up" className="flex" size="16" />
              </div>
              <div
                className="bgprimary textwhite plpx10 prpx10 ptpx9 pbpx9 rounded-5 cursor-pointer m5"
                onClick={() => moveDown(index)}
                disabled={index === data.length - 1}
              >
                <FeatherIcon icon="arrow-down" className="flex" size="16" />
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
    // <div>
    //   {check1 === true ? (
    //     <>
    //       <div className="relative">
    //         <HeroSection1 />
    //         <div
    //           className="absolute top-0 right-0 flex items-center"
    //           onClick={() => setcheck1(false)}
    //         >
    //           <div className="bgprimary textwhite plpx10 prpx10 ptpx9 pbpx9 rounded-5 cursor-pointer m5">
    //             <FeatherIcon icon="trash" className="flex" size="16" />
    //           </div>
    //           <div className="bgprimary textwhite plpx10 prpx10 ptpx9 pbpx9 rounded-5 cursor-pointer m5">
    //             <FeatherIcon icon="arrow-up" className="flex" size="16" />
    //           </div>
    //           <div className="bgprimary textwhite plpx10 prpx10 ptpx9 pbpx9 rounded-5 cursor-pointer m5">
    //             <FeatherIcon icon="arrow-down" className="flex" size="16" />
    //           </div>
    //         </div>
    //       </div>
    //     </>
    //   ) : null}
    //   {check2 === true ? (
    //     <>
    //       <div className="relative">
    //         <HeroSection2 />
    //         <div
    //           className="absolute top-0 right-0 flex items-center"
    //           onClick={() => setcheck2(false)}
    //         >
    //           <div className="bgprimary textwhite plpx10 prpx10 ptpx9 pbpx9 rounded-5 cursor-pointer m5">
    //             <FeatherIcon icon="trash" className="flex" size="16" />
    //           </div>
    //           <div className="bgprimary textwhite plpx10 prpx10 ptpx9 pbpx9 rounded-5 cursor-pointer m5">
    //             <FeatherIcon icon="arrow-up" className="flex" size="16" />
    //           </div>
    //           <div className="bgprimary textwhite plpx10 prpx10 ptpx9 pbpx9 rounded-5 cursor-pointer m5">
    //             <FeatherIcon icon="arrow-down" className="flex" size="16" />
    //           </div>
    //         </div>
    //       </div>
    //     </>
    //   ) : null}
    //   {check3 === true ? (
    //     <>
    //       <div className="relative">
    //         <LeftImageSection1 />
    //         <div
    //           className="absolute top-0 right-0 flex items-center"
    //           onClick={() => setcheck3(false)}
    //         >
    //           <div className="bgprimary textwhite plpx10 prpx10 ptpx9 pbpx9 rounded-5 cursor-pointer m5">
    //             <FeatherIcon icon="trash" className="flex" size="16" />
    //           </div>
    //           <div className="bgprimary textwhite plpx10 prpx10 ptpx9 pbpx9 rounded-5 cursor-pointer m5">
    //             <FeatherIcon icon="arrow-up" className="flex" size="16" />
    //           </div>
    //           <div className="bgprimary textwhite plpx10 prpx10 ptpx9 pbpx9 rounded-5 cursor-pointer m5">
    //             <FeatherIcon icon="arrow-down" className="flex" size="16" />
    //           </div>
    //         </div>
    //       </div>
    //     </>
    //   ) : null}
    //   {check4 === true ? (
    //     <>
    //       <div className="relative">
    //         <RightImageSection1 />
    //         <div
    //           className="absolute top-0 right-0 flex items-center"
    //           onClick={() => setcheck4(false)}
    //         >
    //           <div className="bgprimary textwhite plpx10 prpx10 ptpx9 pbpx9 rounded-5 cursor-pointer m5">
    //             <FeatherIcon icon="trash" className="flex" size="16" />
    //           </div>
    //           <div className="bgprimary textwhite plpx10 prpx10 ptpx9 pbpx9 rounded-5 cursor-pointer m5">
    //             <FeatherIcon icon="arrow-up" className="flex" size="16" />
    //           </div>
    //           <div className="bgprimary textwhite plpx10 prpx10 ptpx9 pbpx9 rounded-5 cursor-pointer m5">
    //             <FeatherIcon icon="arrow-down" className="flex" size="16" />
    //           </div>
    //         </div>
    //       </div>
    //     </>
    //   ) : null}
    //   {check5 === true ? (
    //     <>
    //       <div className="relative">
    //         <LeftImageSection4 />
    //         <div
    //           className="absolute top-0 right-0 flex items-center"
    //           onClick={() => setcheck5(false)}
    //         >
    //           <div className="bgprimary textwhite plpx10 prpx10 ptpx9 pbpx9 rounded-5 cursor-pointer m5">
    //             <FeatherIcon icon="trash" className="flex" size="16" />
    //           </div>
    //           <div className="bgprimary textwhite plpx10 prpx10 ptpx9 pbpx9 rounded-5 cursor-pointer m5">
    //             <FeatherIcon icon="arrow-up" className="flex" size="16" />
    //           </div>
    //           <div className="bgprimary textwhite plpx10 prpx10 ptpx9 pbpx9 rounded-5 cursor-pointer m5">
    //             <FeatherIcon icon="arrow-down" className="flex" size="16" />
    //           </div>
    //         </div>
    //       </div>
    //     </>
    //   ) : null}
    //   {check6 === true ? (
    //     <>
    //       <div className="relative">
    //         <RightImageSection4 />
    //         <div
    //           className="absolute top-0 right-0 flex items-center"
    //           onClick={() => setcheck6(false)}
    //         >
    //           <div className="bgprimary textwhite plpx10 prpx10 ptpx9 pbpx9 rounded-5 cursor-pointer m5">
    //             <FeatherIcon icon="trash" className="flex" size="16" />
    //           </div>
    //           <div className="bgprimary textwhite plpx10 prpx10 ptpx9 pbpx9 rounded-5 cursor-pointer m5">
    //             <FeatherIcon icon="arrow-up" className="flex" size="16" />
    //           </div>
    //           <div className="bgprimary textwhite plpx10 prpx10 ptpx9 pbpx9 rounded-5 cursor-pointer m5">
    //             <FeatherIcon icon="arrow-down" className="flex" size="16" />
    //           </div>
    //         </div>
    //       </div>
    //     </>
    //   ) : null}
    //   {check7 === true ? (
    //     <>
    //       <div className="relative">
    //         <Service1 />
    //         <div
    //           className="absolute top-0 right-0 flex items-center"
    //           onClick={() => setcheck7(false)}
    //         >
    //           <div className="bgprimary textwhite plpx10 prpx10 ptpx9 pbpx9 rounded-5 cursor-pointer m5">
    //             <FeatherIcon icon="trash" className="flex" size="16" />
    //           </div>
    //           <div className="bgprimary textwhite plpx10 prpx10 ptpx9 pbpx9 rounded-5 cursor-pointer m5">
    //             <FeatherIcon icon="arrow-up" className="flex" size="16" />
    //           </div>
    //           <div className="bgprimary textwhite plpx10 prpx10 ptpx9 pbpx9 rounded-5 cursor-pointer m5">
    //             <FeatherIcon icon="arrow-down" className="flex" size="16" />
    //           </div>
    //         </div>
    //       </div>
    //     </>
    //   ) : null}
    //   {check8 === true ? (
    //     <>
    //       <div className="relative">
    //         <Blog1 />
    //         <div
    //           className="absolute top-0 right-0 flex items-center"
    //           onClick={() => setcheck8(false)}
    //         >
    //           <div className="bgprimary textwhite plpx10 prpx10 ptpx9 pbpx9 rounded-5 cursor-pointer m5">
    //             <FeatherIcon icon="trash" className="flex" size="16" />
    //           </div>
    //           <div className="bgprimary textwhite plpx10 prpx10 ptpx9 pbpx9 rounded-5 cursor-pointer m5">
    //             <FeatherIcon icon="arrow-up" className="flex" size="16" />
    //           </div>
    //           <div className="bgprimary textwhite plpx10 prpx10 ptpx9 pbpx9 rounded-5 cursor-pointer m5">
    //             <FeatherIcon icon="arrow-down" className="flex" size="16" />
    //           </div>
    //         </div>
    //       </div>
    //     </>
    //   ) : null}
    //   {check9 === true ? (
    //     <>
    //       <div className="relative">
    //         <Portfolio1 />
    //         <div
    //           className="absolute top-0 right-0 flex items-center"
    //           onClick={() => setcheck9(false)}
    //         >
    //           <div className="bgprimary textwhite plpx10 prpx10 ptpx9 pbpx9 rounded-5 cursor-pointer m5">
    //             <FeatherIcon icon="trash" className="flex" size="16" />
    //           </div>
    //           <div className="bgprimary textwhite plpx10 prpx10 ptpx9 pbpx9 rounded-5 cursor-pointer m5">
    //             <FeatherIcon icon="arrow-up" className="flex" size="16" />
    //           </div>
    //           <div className="bgprimary textwhite plpx10 prpx10 ptpx9 pbpx9 rounded-5 cursor-pointer m5">
    //             <FeatherIcon icon="arrow-down" className="flex" size="16" />
    //           </div>
    //         </div>
    //       </div>
    //     </>
    //   ) : null}
    //   {check10 === true ? (
    //     <>
    //       <div className="relative">
    //         <Testimonial1 />
    //         <div
    //           className="absolute top-0 right-0 flex items-center"
    //           onClick={() => setcheck10(false)}
    //         >
    //           <div className="bgprimary textwhite plpx10 prpx10 ptpx9 pbpx9 rounded-5 cursor-pointer m5">
    //             <FeatherIcon icon="trash" className="flex" size="16" />
    //           </div>
    //           <div className="bgprimary textwhite plpx10 prpx10 ptpx9 pbpx9 rounded-5 cursor-pointer m5">
    //             <FeatherIcon icon="arrow-up" className="flex" size="16" />
    //           </div>
    //           <div className="bgprimary textwhite plpx10 prpx10 ptpx9 pbpx9 rounded-5 cursor-pointer m5">
    //             <FeatherIcon icon="arrow-down" className="flex" size="16" />
    //           </div>
    //         </div>
    //       </div>
    //     </>
    //   ) : null}
    //   {check11 === true ? (
    //     <>
    //       <div className="relative">
    //         <ConnectForm1 />
    //         <div
    //           className="absolute top-0 right-0 flex items-center"
    //           onClick={() => setcheck11(false)}
    //         >
    //           <div className="bgprimary textwhite plpx10 prpx10 ptpx9 pbpx9 rounded-5 cursor-pointer m5">
    //             <FeatherIcon icon="trash" className="flex" size="16" />
    //           </div>
    //           <div className="bgprimary textwhite plpx10 prpx10 ptpx9 pbpx9 rounded-5 cursor-pointer m5">
    //             <FeatherIcon icon="arrow-up" className="flex" size="16" />
    //           </div>
    //           <div className="bgprimary textwhite plpx10 prpx10 ptpx9 pbpx9 rounded-5 cursor-pointer m5">
    //             <FeatherIcon icon="arrow-down" className="flex" size="16" />
    //           </div>
    //         </div>
    //       </div>
    //     </>
    //   ) : null}
    //   {check12 === true ? (
    //     <>
    //       <div className="relative">
    //         <ConnectForm2 />
    //         <div
    //           className="absolute top-0 right-0 flex items-center"
    //           onClick={() => setcheck12(false)}
    //         >
    //           <div className="bgprimary textwhite plpx10 prpx10 ptpx9 pbpx9 rounded-5 cursor-pointer m5">
    //             <FeatherIcon icon="trash" className="flex" size="16" />
    //           </div>
    //           <div className="bgprimary textwhite plpx10 prpx10 ptpx9 pbpx9 rounded-5 cursor-pointer m5">
    //             <FeatherIcon icon="arrow-up" className="flex" size="16" />
    //           </div>
    //           <div className="bgprimary textwhite plpx10 prpx10 ptpx9 pbpx9 rounded-5 cursor-pointer m5">
    //             <FeatherIcon icon="arrow-down" className="flex" size="16" />
    //           </div>
    //         </div>
    //       </div>
    //     </>
    //   ) : null}
    //   {check13 === true ? (
    //     <>
    //       <div className="relative">
    //         <ConnectForm3 />
    //         <div
    //           className="absolute top-0 right-0 flex items-center"
    //           onClick={() => setcheck13(false)}
    //         >
    //           <div className="bgprimary textwhite plpx10 prpx10 ptpx9 pbpx9 rounded-5 cursor-pointer m5">
    //             <FeatherIcon icon="trash" className="flex" size="16" />
    //           </div>
    //           <div className="bgprimary textwhite plpx10 prpx10 ptpx9 pbpx9 rounded-5 cursor-pointer m5">
    //             <FeatherIcon icon="arrow-up" className="flex" size="16" />
    //           </div>
    //           <div className="bgprimary textwhite plpx10 prpx10 ptpx9 pbpx9 rounded-5 cursor-pointer m5">
    //             <FeatherIcon icon="arrow-down" className="flex" size="16" />
    //           </div>
    //         </div>
    //       </div>
    //     </>
    //   ) : null}
    // </div>
  );
};

export default Demo;
