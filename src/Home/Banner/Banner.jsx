import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import img from "../../assets/img/1.jpg";
import img1 from "../../assets/img/2.jpg";
import Button from "../../Button/Button";

const Banner = () => {
  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="relative w-screen h-[60vh] lg:h-[80vh]"
            src={img1}
            alt=""
          />
          <div className="absolute bottom-[30px] md:bottom-[80px] left-[0px] md:left-[0px] bg-black bg-opacity-60 p-10 lg:mr-[550px] ">
            <h2 className="text-white text-5xl font-bold">
              Manage projects in the most efficient way
            </h2>
            <div className="mt-5">
              <Button text={"Let’s Explore"}></Button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-screen h-[60vh] lg:h-[80vh]" src={img} alt="" />
          <div className="absolute bottom-[30px] md:bottom-[80px] right-[0px] md:right-[0px] bg-black bg-opacity-60 p-10 text-right lg:ml-[550px]">
            <h2 className="text-white text-5xl font-bold">
              Manage projects in the most efficient way
            </h2>
            <div className="mt-5">
              <Button text={"Let’s Explore"}></Button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
