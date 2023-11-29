import { Container } from '@/components/layout/customer';
import { Input } from '@/components/forms';
import { MagnifierIcon } from '@/components/icons';

import DashImage from '@/assets/customer/backs/dashboard.png';
import styles from './DashPage.module.scss';

export function DashPage() {
  return (
    <div className={styles.root}>
      <img src={DashImage} className={styles.dashImage} />
      <div className={styles.grayLayer} />
      <Container className={styles.searchBar}>
        <h1>Shop directly from our growing community of vendors</h1>
        <p>
          Groups of small and local vendors growing together on a single
          marketplace.
        </p>
        <Input
          size="large"
          border="none"
          rounded="full"
          placeholder="Search for anything"
          className={styles.searchInput}
          adornment={{
            position: 'right',
            content: <MagnifierIcon />,
          }}
        />
      </Container>
    </div>
  );
}
