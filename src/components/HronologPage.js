import React from 'react';
import { lazy } from 'react';

const PowerButton = lazy(() => import('../subComponents/PowerButton'));

const path = 'https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1X60MDUXbTPawTmmEeQXiS4JSlzg1ni6f7gsxmF4iY0A&font=Default&lang=ru&initial_zoom=2&height=650https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=16ijWTyS0qBrfBNrZ5PEbLfMMTN19JvZxT6I7fAO2jxg&font=Default&lang=ru&initial_zoom=2&height=650'

function HronologPage() {
  return (
    <>
      <PowerButton />
      <iframe
        src={path}
        width="100%"
        height="850"
        webkitallowfullscreen
        mozallowfullscreen
        allowfullscreen
        frameborder="0"
      ></iframe>
    </>
  );
}

export default HronologPage;
