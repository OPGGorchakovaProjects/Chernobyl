import React, { useRef } from 'react';
import { ReactComponent as ArrowIcon } from './arrow-icon.svg';

export const VillageItem = ({ faqItem, onClick, isOpen }) => {
  const itemRef = useRef(null);

  return (
    <li className="accordion-item">
      <button className="accordion-header" onClick={() => onClick()}>
        {faqItem.q}
        <ArrowIcon className={`accordion-arrow ${isOpen ? 'active' : ''}`} />
      </button>
      <div
        className="accordion-collapse"
        style={
          isOpen ? { height: itemRef.current.scrollHeight } : { height: '0px' }
        }
      >
        <div className="accordion-body" ref={itemRef}>
          {faqItem.i}
          {faqItem.a}
        </div>
      </div>
    </li>
  );
};
