import React from 'react';
import { Outlet } from '@tanstack/react-location';

import { Sidebar, Header } from '@/components';

import styles from './Layout.module.scss';

export function Layout() {
  return (
    <div className={styles.root}>
      <Sidebar />
      <div className={styles.container}>
        <Header />
        <Outlet />
      </div>
    </div>
  );
}
