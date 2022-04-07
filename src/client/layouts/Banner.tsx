import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

type Props = {}

const Banner = (props: Props) => {
    return (
        <div>
            <div className="max-w-[1440px] mx-auto">
                <div className="w-[1440px] h-auto">
                    <div className="container">
                        <>
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={30}
                                loop={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={true}
                                modules={[Autoplay, Pagination, Navigation]}
                                className="mySwiper"
                            >
                                <SwiperSlide><img src="../../../src/public/image/banner-black-shark-4s-mc.jpg" className="image1" /></SwiperSlide>
                                <SwiperSlide><img src="https://res.cloudinary.com/dvj4wwihv/image/upload/v1649224342/gt2t24jljgm7tybnlv8i.jpg" className="image1" /></SwiperSlide>
                                <SwiperSlide><img src="https://res.cloudinary.com/dvj4wwihv/image/upload/v1649224129/jchpydu865lskj8zn7ww.jpg" className="image1" /></SwiperSlide>
                                <SwiperSlide><img src="https://res.cloudinary.com/dvj4wwihv/image/upload/v1649004481/yumf3gzktke6axr3lejd.jpg" className="image1" /></SwiperSlide>
                            </Swiper>
                        </>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner