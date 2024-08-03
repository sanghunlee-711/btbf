import React from 'react';
import Pagestyles from '../../styles/page.module.scss';
import styles from '../../styles/drops.module.scss';
import DropDescription from '@/components/DropDescription';
import { DROPS_LIST } from '@/constants/drops';

const Drops = () => {
  return (
    <main className={Pagestyles.main}>
      <ul className={styles.drops}>
        {DROPS_LIST.map((props, idx) => (
          <DropDescription {...props} key={props.title + idx} />
        ))}
      </ul>
    </main>
  );
};

export default Drops;
