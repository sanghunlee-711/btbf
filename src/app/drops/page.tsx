import React from 'react';
import Pagestyles from '../../styles/page.module.scss';
import styles from '../../styles/drops.module.scss';
import DropDescription from '@/components/DropDescription';
import { DROPS_LIST } from '@/constants/drops';

const Drops = () => {
  return (
    <main className={Pagestyles.main}>
      <ul className={styles.drops}>
        {DROPS_LIST.map(({ title, imageSrc, descriptions }) => (
          <DropDescription
            title={title}
            imageSrc={imageSrc}
            descriptions={descriptions}
          />
        ))}
      </ul>
    </main>
  );
};

export default Drops;
