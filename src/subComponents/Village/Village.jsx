import React, { useState } from 'react';
import { VillageItem } from './VillageItem';
import './Village.css';

export const Village = ({ faqList }) => {
  const [openId, setId] = useState(null);

  return (
    <ul className="accordion">
      {faqList.map((faqItem, id) => {
        return (
          <VillageItem
            onClick={() => (id === openId ? setId(null) : setId(id))}
            faqItem={faqItem}
            isOpen={id === openId}
            key={id}
          />
        );
      })}
    </ul>
  );
};
