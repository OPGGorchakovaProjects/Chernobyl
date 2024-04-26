import React from 'react';
import { lazy } from 'react';

const PowerButton = lazy(() => import('../subComponents/PowerButton'));

const path = 'https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1HN9658hBThuV8A1Bp65INx3X3C0QgZX-dot0hVhxIjI&font=Default&lang=ru&initial_zoom=2&height=650'

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
