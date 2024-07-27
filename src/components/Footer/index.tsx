'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleClickDetail = (value: boolean) => {
    setIsClicked(value);
  };

  return (
    <footer className={styles['footer-container']}>
      <button onClick={() => handleClickDetail(!isClicked)}>
        <span>© 2024 Better Than Before (The Folks)</span>
        {
          <span
            className={`${styles.arrow} ${isClicked ? styles.openarrow : ''}`}
          >
            &uarr;
          </span>
        }
      </button>

      <section className={isClicked ? styles.open : ''}>
        <p>
          베럴댄비포더폭스 | 대표자 이상훈 | 사업자 등록번호 831-01-03617 |
          금호동 3가 1389-1 3층 | bttfthefolks@gmail.com
        </p>
      </section>
      <div className={styles['link-container']}>
        <Link href="https://www.instagram.com/betterthanbeforefolks/">
          <img src="/images/IG.png" alt="Instagram" width={36} height={36} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
