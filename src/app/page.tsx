import Image from 'next/image';
import styles from '../styles/page.module.scss';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <Link href="/drops">
        <Image
          alt="sample"
          src="/images/main-page/masking.jpeg"
          loading="eager"
          width={600}
          height={600}
          layout="responsive"
          className={styles.mainImage}
        />
      </Link>
    </main>
  );
}
