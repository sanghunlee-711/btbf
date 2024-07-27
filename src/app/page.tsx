import Image from 'next/image';
import styles from '../styles/page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        alt="sample"
        src="/images/sample.png"
        loading="eager"
        width={500}
        height={500}
        layout="responsive"
        className={styles.mainImage}
      />
    </main>
  );
}
