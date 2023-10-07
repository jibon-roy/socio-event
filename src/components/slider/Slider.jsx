import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Anniversaries, Baby, Birthday, Engagement, Retirement, Weddings } from './SliderImage';

const Slider = () => {




    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper h-[90vh]"
            >
                <SwiperSlide>
                    {Weddings}
                </SwiperSlide>
                <SwiperSlide>
                    {Birthday}
                </SwiperSlide>
                <SwiperSlide>
                    {Anniversaries}
                </SwiperSlide>
                <SwiperSlide>
                    {Engagement}
                </SwiperSlide>
                <SwiperSlide>
                    {Retirement}
                </SwiperSlide>
                <SwiperSlide>
                    {Baby}
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;