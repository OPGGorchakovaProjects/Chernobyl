import React, { useEffect, useState } from 'react';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import styles from './style.module.css';
import './swiperStyles.css';
import images from './images';

import {GET} from "../API/api";

function BlogPage() {
  const [slides, setSlides] = useState([]);

  const getPersons = async () => {
    
    let data = await GET("/get-all-persons");
    if (data == null) {
      setSlides([...images.map(({ url, title, text, error_con }, index) => (
          <SwiperSlide key={index}>
            <img src={url} alt={error_con} />
            <div className={styles.textContainer}>
              <h1>{title}</h1>
              <p>{text}</p>
            </div>
          </SwiperSlide>
        ))]) 
    
    
    }else { 
      console.log(data);
      
      setSlides([...data.map(({photo_publick_url, name, story}, index) => (

        <SwiperSlide key={index}>
            <img src={photo_publick_url} />
            <div className={styles.textContainer}>
              <h1>{name}</h1>
              <p>{story}</p>
              <p style={{fontSize:"0.8rem"}}>
                * Если вы распологаете информацией о человеке, имеющем отношение к ЧАЭС, вы можете  сообщить нам с помощью <a style={{color:"#00B2FF"}} href="/addLikvidator">специальной формы</a>
              </p>
           
            </div>
          </SwiperSlide>

      ))]);
    }
  }

  useEffect(() => {
    getPersons();
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
        {slides}
      </Swiper>
    </div>
  );
}

export default BlogPage;