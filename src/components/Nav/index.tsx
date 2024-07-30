'use client';

import Image from 'next/image';
import BurgerButton from '../BurgerButton';
import styles from './Nav.module.scss';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { NAVER_STORE_LINK } from '@/constants/smartStore';

const Nav = () => {
  const route = useRouter();
  const [isClickedBurger, setIsClickedBurger] = useState<boolean>(false);
  const handleClickBurger = (value: boolean) => {
    setIsClickedBurger(value);
  };

  const goPageWithCloseMenu = (path: string) => {
    route.push(path);
    setIsClickedBurger(false);
  };

  return (
    <>
      <nav className={styles.nav}>
        <Link href="/">
          <Image
            onClick={() => goPageWithCloseMenu('/')}
            src="/images/logo.png"
            width={60}
            height={60}
            alt="shop"
            quality={100}
            priority
          />
        </Link>
        <div>
          <Link href={NAVER_STORE_LINK}>
            <Image
              src="/images/shop.png"
              width={40}
              height={40}
              alt="shop"
              quality={100}
              priority
            />
          </Link>
          <BurgerButton
            isClickedBurger={isClickedBurger}
            handleClickBurger={handleClickBurger}
          />
        </div>
      </nav>
      <menu className={`${styles.menu} ${isClickedBurger ? styles.open : ''}`}>
        <ul>
          <li onClick={() => goPageWithCloseMenu(NAVER_STORE_LINK)}>Store</li>
          <li onClick={() => goPageWithCloseMenu('/support')}>Support</li>
          <li onClick={() => goPageWithCloseMenu('/drops')}>Drops</li>
        </ul>
      </menu>
    </>
  );
};

export default Nav;
