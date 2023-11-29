import { Container } from '@/components/layout/customer';
import {
  ArrowIcon,
  CartIcon,
  MagnifierIcon,
  ZipCodeIcon,
} from '@/components/icons';

import HowImage from '@/assets/customer/backs/howto.png';
import styles from './HowItWorks.module.scss';

export function HowItWorks() {
  return (
    <div className={styles.root}>
      <div className={styles.image}>
        <img src={HowImage} className={styles.topicImage} />
        <h1>How It Works</h1>
      </div>
      <Container className={styles.container}>
        <div className={styles.step}>
          <ZipCodeIcon className={styles.icon} />
          <p>Enter Zipcode</p>
        </div>
        <span>
          <ArrowIcon className={styles.icon} />
        </span>
        <div className={styles.step}>
          <MagnifierIcon className={styles.icon} />
          <p>Find Vendors</p>
        </div>
        <span>
          <ArrowIcon className={styles.icon} />
        </span>
        <div className={styles.step}>
          <CartIcon color="pink" className={styles.icon} />
          <p>Shop Products</p>
        </div>
      </Container>
    </div>
  );
}
