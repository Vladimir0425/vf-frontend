import React, { useMemo, useState } from 'react';
import { useLocation, Link, useNavigate } from '@tanstack/react-location';
import clsx from 'clsx';

import { Logo } from '@/components';
import styles from './Sidebar.module.scss';

import { superAdminRoutes } from '@/routes';

export interface IRouteItem {
  title: string;
  path: string;
  leaf?: boolean;
  children?: IRouteItem[];
}

export function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.current.pathname;
  const [active, setActive] = useState('');

  const initialPath = '/admin';

  const showSubNavs = (parentItem: IRouteItem) => {
    setActive(parentItem.path === active ? '' : parentItem.path);
    if (!parentItem.children) {
      navigate({ to: `${initialPath}${parentItem.path}` });
    }
  };

  const renderChildRoute = (children: IRouteItem[], currentPath: string) => {
    return children.map((route: IRouteItem) =>
      route.children && !route.leaf ? (
        <div key={route.path}>
          <p className={styles.subParentItem}>{route.title}</p>
          <div className={styles.childPanel}>
            {renderChildRoute(route.children, `${currentPath}${route.path}`)}
          </div>
        </div>
      ) : (
        <p
          onClick={() => navigate({ to: `${currentPath}${route.path}` })}
          className={
            pathname.startsWith(`${currentPath}${route.path}`)
              ? clsx(styles.leafItem, styles.activeLeafItem)
              : styles.leafItem
          }
        >
          {route.title}
        </p>
      ),
    );
  };

  return (
    <div className={styles.root}>
      <Logo size="small" />
      <div className={styles.brand}>
        <Logo size="medium" />
        <p>Sackett River Company</p>
      </div>
      <div className={styles.navbar}>
        {superAdminRoutes.map(route => (
          <div key={route.path} className={styles.navItem}>
            <div
              className={
                pathname.startsWith(`${initialPath}${route.path}`)
                  ? clsx(styles.parentItem, styles.activeParentItem)
                  : styles.parentItem
              }
              onClick={() => showSubNavs(route)}
            >
              {route.icon && <>{route.icon}</>}
              <p>{route.title}</p>
            </div>
            {active === route.path && route.children && (
              <div className={styles.childPanel}>
                {renderChildRoute(
                  route.children,
                  `${initialPath}${route.path}`,
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
