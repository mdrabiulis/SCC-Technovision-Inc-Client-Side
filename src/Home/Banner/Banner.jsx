import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import img from "../../assets/img/1.jpg";
import img1 from "../../assets/img/2.jpg";

const Banner = () => {
  return (
    <div>
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
          <img className="w-screen h-[60vh] lg:h-[80vh]" src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-screen h-[60vh] lg:h-[80vh]" src={img} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
