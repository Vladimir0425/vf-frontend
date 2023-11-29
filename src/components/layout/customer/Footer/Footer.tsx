import clsx from 'clsx';
import { useLocation } from '@tanstack/react-location';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa6';
import { Container } from '@/components/layout/customer';

import { useWindowWidth } from '@/utils';

import styles from './Footer.module.scss';

export function Footer() {
  const location = useLocation();
  const pathname = location.current.pathname;
  const [_, breakpoint] = useWindowWidth();

  const screenBlackLists = ['/login/customer', '/login/vendor'];
  const minBreakLists = ['sm', 'md', 'lg', 'xl', '2xl', '3xl'];

  return (
    <div
      className={clsx(
        styles.root,
        screenBlackLists.includes(pathname) &&
          minBreakLists.includes(breakpoint as string)
          ? 'hidden'
          : '',
      )}
    >
      <Container className={styles.container}>
        <div className={styles.section}>
          <h4>Shop</h4>
          <p>Vendor Communities</p>
          <p>Makers & More</p>
          <p>Local Vendors</p>
          <p>Subscriptions</p>
        </div>
        <div className={styles.section}>
          <h4>For Vendors</h4>
          <p>Sell</p>
          <p>Vendor Sign up</p>
          <p>Vendor Sign in</p>
        </div>
        <div className={clsx(styles.section, styles.about)}>
          <h4>About</h4>
          <p>Our Story</p>
        </div>
        <div className={styles.section}>
          <h4>Contact</h4>
          <p>(401) 594-9428</p>
          <p>brandon@fresherchoice.com</p>
          <div className={styles.socials}>
            <span>
              <FaFacebookF fill="#84A98C" />
            </span>
            <span>
              <FaInstagram fill="#84A98C" />
            </span>
            <span>
              <FaYoutube fill="#84A98C" />
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
}
