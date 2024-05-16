import React, { useEffect, useState } from 'react';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import styles from './style.module.css';
import './swiperStyles.css';
import images from './images';


function BlogPage() {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    setSlides(images);
  }, []);

  return (
    <div className={styles.main}>
      <Swiper
        navigation={true}
        pagination={{ type: 'fraction', }}
        keyboard={true}
        modules={[Navigation, Pagination, Keyboard]}
        className='swiper'
      >
        {images.map(({ url, title, text, error_con }, index) => (
          <SwiperSlide key={index}>
            <img src={url} alt={error_con} />
            <div className={styles.textContainer}>
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