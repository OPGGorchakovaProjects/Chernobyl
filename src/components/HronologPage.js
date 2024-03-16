import React from 'react';
import { lazy } from 'react';
const PowerButton = lazy(() => import('../subComponents/PowerButton'));

function HronologPage() {
  return (
    <>
      <PowerButton />
      <iframe
        src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1NtPtywRbwwgjpXkpPfEX8y8dcmsG3DA5RgTc4Nc7_q8&font=Amatic-Andika&lang=ru&initial_zoom=2&height=850"
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
