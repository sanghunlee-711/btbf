import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import '../styles/globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Better than before, folks',
  description: 'BTBF',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="naver-site-verification" content="cf9e4aab328ec55afaba5f131b47c59bf522c72a" />        
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <meta http-equiv="X-UA-Compatible" content="ie=edge" /> */}
        <meta property="og:title" content="BTBF 티셔츠 - 캐주얼 의류 | Better Than Before Folks"/>
        <meta property="og:description" content="BTBF 티셔츠와 함께 스타일을 업그레이드하세요. 트렌디한 캐주얼 의류 브랜드, BTBF." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.betterthanbeforefolks.com" />
        <meta property="og:image" content="https://www.betterthanbeforefolks.com/images/main-page/masking.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BTBF 티셔츠 - 캐주얼 의류 | Better Than Before Folks" />
        <meta name="twitter:description" content="BTBF 티셔츠로 트렌디한 캐주얼 스타일을 연출해보세요." />
        <meta name="twitter:image" content="https://www.betterthanbeforefolks.com/images/main-page/masking.jpeg" />
        <link rel="canonical" href="https://www.betterthanbeforefolks.com" />
      </head>
      <body className={inter.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
