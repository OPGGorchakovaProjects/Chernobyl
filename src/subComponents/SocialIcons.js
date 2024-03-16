import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import { Vk, Instagram, Site, Telegram } from '../components/AllSvgs';
import { DarkTheme } from '../components/Themes';

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 2rem;

  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
`;

const SocialIcons = (props) => {
  return (
    <Icons>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: 'spring', duration: 1, delay: 1.2 }}
      >
        <a
          style={{ color: 'inherit' }}
          target="_blank"
          href={'https://www.instagram.com/ggaek_gomel/'}
        >
          <Instagram
            width={30}
            height={30}
            fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: 'spring', duration: 1, delay: 1.4 }}
      >
        <a
          style={{ color: 'inherit' }}
          target="_blank"
          href={'https://t.me/ggaekinf'}
        >
          <Telegram
            width={30}
            height={30}
            fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: 'spring', duration: 1, delay: 1.6 }}
      >
        <a
          style={{ color: 'inherit' }}
          target="_blank"
          href={'https://vk.com/ggaek'}
        >
          <Vk
            width={30}
            height={30}
            fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: 'spring', duration: 1, delay: 1.6 }}
      >
        <a
          style={{ color: 'inherit' }}
          target="_blank"
          href={'https://ggaek.by'}
        >
          <Site
            width={30}
            height={30}
            fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </motion.div>

      <Line
        color={props.theme}
        initial={{
          height: 0,
        }}
        animate={{
          height: '5rem',
        }}
        transition={{
          type: 'spring',
          duration: 1,
          delay: 0.8,
        }}
      />
    </Icons>
  );
};

export default SocialIcons;
