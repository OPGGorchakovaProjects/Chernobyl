import React, { useRef } from 'react';
import { ReactComponent as ArrowIcon } from './arrow-icon.svg';
import styles from './Village.module.css';

export const VillageItem = ({ faqItem, onClick, isOpen }) => {
  const itemRef = useRef(null);

  return (
    <li className={styles.accordionItem}>
      <button className={styles.accordionHeader} onClick={() => onClick()}>
        {faqItem.q}
        <ArrowIcon className={`${styles.accordionArrow} ${isOpen ? styles.active : ''}`} />
      </button>
      <div className={styles.accordionCollapse} style={isOpen ? { height: itemRef.current.scrollHeight } : { height: '0px' }}>
        <div className={styles.accordionBody} ref={itemRef}>
          {faqItem.i}
          {faqItem.a}
        </div>
      </div>
    </li>
  );
};
