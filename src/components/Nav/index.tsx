import Image from 'next/image';
import BurgerButton from '../BurgerButton';
import styles from './Nav.module.scss';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Image
        src="/images/logo.png"
        width={60}
        height={60}
        alt="shop"
        quality={100}
        priority
      />
      <div>
        <a href="">
          <Image
            src="/images/shop.png"
            width={40}
            height={40}
            alt="shop"
            quality={100}
            priority
          />
        </a>
        <BurgerButton />
      </div>
    </nav>
  );
};

export default Nav;
