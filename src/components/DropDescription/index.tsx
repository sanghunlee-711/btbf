'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/drops.module.scss';
import { DropsDetail } from '@/types/drops';

interface DropDescriptionProps extends DropsDetail {}

const DropDescription = ({
  title,
  imageSrc,
  descriptions,
}: DropDescriptionProps) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleClickDescription = (value: boolean) => {
    setIsClicked(value);
  };

  return (
    <li className={styles['drops-container']}>
      <h1>{title}</h1>
      <Image
        alt="first-drop"
        src={imageSrc}
        width={64}
        height={64}
        layout="responsive"
        className={styles.image}
      />
      {descriptions.length > 0 && (
        <div className={styles['description-wrapper']}>
          <div onClick={() => handleClickDescription(!isClicked)}>
            <h2>Description</h2>
            <span
              className={`${styles.arrow} ${isClicked ? styles.openarrow : ''}`}
            >
              &uarr;
            </span>
          </div>
          <section
            className={`${styles.description} ${isClicked ? styles.open : ''}`}
          >
            <p>{descriptions}</p>
          </section>
        </div>
      )}
    </li>
  );
};

export default DropDescription;
