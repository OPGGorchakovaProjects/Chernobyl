import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Slider from './beforeAfter/slider';
import images from './images.js';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from './style.module.css';
import './swiperStyle.css'

import { Pagination, Navigation } from 'swiper/modules';

export default function AlbumPage() {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    setSlides(images);
  }, []);

  return (
    <div className={styles.main}>
      <div className='swiper'>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{ clickable: true, }}
          navigation={true}
          allowTouchMove={false}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {slides.map((image) => (
            <SwiperSlide key={image.id}>
              <Slider topImage={image.topImage} bottomImage={image.bottomImage} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
