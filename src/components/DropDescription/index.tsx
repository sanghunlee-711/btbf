'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/drops.module.scss';
import { DropsDetail } from '@/types/drops';
import Slider from '../Slider';
import Link from 'next/link';

interface DropDescriptionProps extends DropsDetail {}

const DropDescription = ({
  title,
  imageSrc,
  descriptions,
  storeLink,
}: DropDescriptionProps) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleClickDescription = (value: boolean) => {
    setIsClicked(value);
  };

  return (
    <li className={styles['drops-container']}>
      <h1>{title}</h1>
      {imageSrc.length > 0 ? (
        <Slider images={imageSrc} />
      ) : (
        <Image
          alt="first-drop"
          src={imageSrc[0]}
          width={64}
          height={64}
          layout="responsive"
        />
      )}
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
      {storeLink && (
        <Link className={styles['shop-link']} href={storeLink}>
          <span>Go to shop </span>
          <Image
            src="/images/shop.png"
            width={32}
            height={32}
            alt="shop"
            quality={100}
            priority
          />
        </Link>
      )}
    </li>
  );
};

export default DropDescription;
