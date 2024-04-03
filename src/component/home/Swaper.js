import { Navigation, Pagination, Scrollbar, A11y, Autoplay, } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const ImageDiv = (e) => {
    return (
        <img style={{borderRadius:"7px",boxShadow:"0 0 2px grey"}} src={e.link} height={100} width={150} alt="" />
    );
}
export default () => {

    return (
        <Swiper
            modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={5}
            // centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            // navigation

            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            className='mt-3 mb-0'
        >
            <SwiperSlide><ImageDiv link={"img/gallery-img-1.jpeg"} /></SwiperSlide>
            <SwiperSlide><ImageDiv link={"img/gallery-img-2.jpeg"} /></SwiperSlide>
            <SwiperSlide><ImageDiv link={"img/gallery-img-3.jpeg"} /></SwiperSlide>
            <SwiperSlide><ImageDiv link={"img/gallery-img-4.jpeg"} /></SwiperSlide>
            <SwiperSlide><ImageDiv link={"img/gallery-img-5.jpg"} /></SwiperSlide>
            <SwiperSlide><ImageDiv link={"img/gallery-img-6.jpg"} /></SwiperSlide>
            <SwiperSlide><ImageDiv link={"img/gallery-img-7.jpg"} /></SwiperSlide>
          
        </Swiper>
    );
};

