import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      Better than before the folks
      <Image
        alt="sample"
        src="/images/sample.png"
        loading="eager"
        width={500}
        height={500}
        layout="responsive"
      />
      <Link href="https://www.instagram.com/betterthanbeforefolks/">
        Instagram
      </Link>
    </main>
  );
}
