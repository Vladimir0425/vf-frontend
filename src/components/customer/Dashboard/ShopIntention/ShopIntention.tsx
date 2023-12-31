import { Container } from '@/components/layout/customer';

import ShopImage from '@/assets/customer/backs/shop.png';
import IntentImage from '@/assets/customer/backs/intention.png';
import styles from './ShopIntention.module.scss';

const initialTexts = [
  {
    title: '1 . Only true makers & growers live here',
    content:
      "We believe that if a marketplace says it's for small batch makers and growers, it should honor that mission. At Fresher Choice we vet all of our vendors to make sure they are truly small businesses. Small business shouldn't have to compete with big business.",
  },
  {
    title: '2 . Focused on community',
    content:
      'Fresher Choice is focused on small business development. To do this on a large scale and keep true to our mission, we created the Vendor Community. These communities are led by local people to ensure vendors have the support they need to thrive and to have a real person they can know and trust on their side.',
  },
  {
    title: '3 . Supporting woman founders',
    content:
      'It is one of our core purposes to support the many woman founders creating and growing high quality creative products.',
  },
  {
    title: '4 . Many ways to shop',
    content:
      "Whether you're shopping for artisan maker goods or finding local farmers in your area, Fresher Choice's unique marketplace helps you find that perfect item for your home, office or dinner table.",
  },
  {
    title: '5 . Impact local economies',
    content:
      'For every dollar spent on local and small businesses, .67 on average gets put back into the local economy. Your dollar goes so much farther with Fresher Choice.',
  },
];

export function ShopIntention() {
  return (
    <div className={styles.root}>
      <img src={ShopImage} className={styles.shopImage} />
      <Container className={styles.intention}>
        <h1>Shop Intentionally</h1>
        <p>Your reasons to shop with Fresher Choice</p>
        <div className={styles.reason}>
          <div className={styles.orders}>
            {initialTexts.map((item: any, index: number) => (
              <div key={`text-${index}`} className={styles.order}>
                <h5>{item.title}</h5>
                <p>{item.content}</p>
              </div>
            ))}
          </div>
          <img src={IntentImage} />
        </div>
      </Container>
    </div>
  );
}
