import Link from 'next/link';
import React from 'react';
import styles from '../styles/page.module.scss';

const Custom404 = () => {
  return (
    <main className={styles.main}>
      <h1>Not Found Path</h1>
      <Link href="/">Go main page</Link>
    </main>
  );
};

export default Custom404;
