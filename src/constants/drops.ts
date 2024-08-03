import { DropsDetail } from '@/types/drops';
import { NAVER_STORE_LINK } from './smartStore';

export const DROPS_LIST: DropsDetail[] = [
  {
    title: '1st Drop - Champion back',
    imageSrc: [
      '/images/drops/1st/champion-back.jpeg',
      '/images/sample.png',
      '/images/drops/1st/champ-back.png',
      '/images/drops/1st/basic-back.png',
      '/images/drops/1st/champ-front.png',
    ],
    descriptions: `Draw someone's back. 
                  \nWho is your champion? 
                  \nIt could be not only an athlete but also someone you love. 
                  \nTry to find your own champion's back.`,
    storeLink: 'https://smartstore.naver.com/btbfthefolks/products/10689611356',
  },
  {
    title: '2nd Drop - Comming Soon',
    imageSrc: ['/images/comming-soon.png'],
    descriptions: ``,
  },
  {
    title: '3rd Drop - Comming Soon',
    imageSrc: ['/images/comming-soon.png'],
    descriptions: ``,
  },
];
