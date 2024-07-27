'use client';
import styles from './Burger.module.scss';
import React, { useState } from 'react';

interface BurgerButtonProps {
  isClickedBurger: boolean;
  handleClickBurger: (value: boolean) => void;
}

const BurgerButton = ({
  isClickedBurger,
  handleClickBurger,
}: BurgerButtonProps) => {
  return (
    <button
      className={styles['burger-wrapper']}
      onClick={() => handleClickBurger(!isClickedBurger)}
    >
      {isClickedBurger ? (
        <img src="/images/exit.png" alt="Exit-button" width={36} height={36} />
      ) : (
        <img
          src="/images/burger.png"
          alt="Hamburger-button"
          width={36}
          height={36}
        />
      )}
    </button>
  );
};

export default BurgerButton;
