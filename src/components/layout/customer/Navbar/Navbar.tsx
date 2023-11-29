import clsx from 'clsx';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6';
import { useLocation, useNavigate } from '@tanstack/react-location';

import { Container } from '@/components/layout/customer/Container';

import styles from './Navbar.module.scss';

interface INavItem {
  title: string;
  path: string;
}

export function Navbar() {
  const [catAnchor, setCatAnchor] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.current.pathname;

  const navItems: INavItem[] = [
    {
      title: 'Vendor Communities',
      path: '/vendor-community',
    },
    {
      title: 'Subscriptions',
      path: '/subscription',
    },
    {
      title: 'About',
      path: '/about',
    },
    {
      title: 'Sell',
      path: '/sell',
    },
  ];

  const onCatClick = () => {
    setCatAnchor(!catAnchor);
  };

  return (
    <div className={styles.root}>
      <Container className={styles.container}>
        <ul className={styles.navbar}>
          <li onClick={onCatClick}>
            Categories {catAnchor ? <FaChevronUp /> : <FaChevronDown />}
          </li>
          {navItems.map((navItem: INavItem) => (
            <li
              key={navItem.title}
              className={clsx(
                styles.navItem,
                pathname.startsWith(navItem.path),
              )}
              onClick={() => navigate({ to: navItem.path })}
            >
              {navItem.title}
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
