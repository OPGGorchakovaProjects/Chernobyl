import React from 'react';
import Slider from 'react-touch-drag-slider';
import '../subComponents/Likvidators/style.css';
import images from '../subComponents/Likvidators/images';
import styled from 'styled-components';
import { lazy } from 'react';
const PowerButton = lazy(() => import('../subComponents/PowerButton'));

function App() {
  return (
    <div className='main'>
      <PowerButton />
      <Slider>
        {images.map(({ url, title, text, error_con }, index) => (
          <>
            <img className='img' src={url} key={index} alt={error_con} />
            <div className="text-container">
              <h1 className='h1'>{title}</h1>
              <p className='p'>{text}</p>
            </div>
          </>
        ))}
      </Slider>
    </div>
  );
}

export default App;
