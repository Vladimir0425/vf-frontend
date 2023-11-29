import {
  AboutCommunity,
  DashPage,
  FeaturedItems,
  HowItWorks,
  ShopIntention,
} from '@/components/customer';

import styles from './Dashboard.module.scss';

export function Dashboard() {
  return (
    <div className={styles.root}>
      <DashPage />
      <FeaturedItems />
      <HowItWorks />
      <ShopIntention />
      <AboutCommunity />
    </div>
  );
}
