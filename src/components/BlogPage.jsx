import React, { useEffect, useState } from 'react';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import PowerButton from '../subComponents/PowerButton';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../subComponents/Likvidators/style.css';
import images from '../subComponents/Likvidators/images';


function BlogPage() {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    setSlides(images);
  }, []);

  return (
    <div className='main-people'>
      <PowerButton />
      <Swiper
        navigation={true}
        pagination={{ type: 'fraction', }}
        keyboard={true}
        modules={[Navigation, Pagination, Keyboard]}
        className="swiper"
      >
        {images.map(({ url, title, text, error_con }, index) => (
          <SwiperSlide key={index}>
            <img src={url} alt={error_con} />
            <div className="text-container-people">
              <h1>{title}</h1>
              <p>{text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default BlogPage;