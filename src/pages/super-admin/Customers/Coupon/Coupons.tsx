import React, { ChangeEvent, useState } from 'react';
import { Link, useNavigate } from '@tanstack/react-location';

import { Card, TableToolbar, TableBody } from '@/components/common';
import { Select } from '@/components/forms';

import { TrashIcon } from '@/components/icons';

import { ITableColumn } from '@/interfaces';

import styles from './Coupons.module.scss';

export interface ICoupon {
  name: string;
  type: string;
  status: string;
  discount?: number;
}

const initialCoupons: ICoupon[] = [
  {
    name: '10of10',
    type: 'Percentage',
    status: 'Active',
    discount: 10,
  },
  {
    name: 'SAVEMORE',
    type: 'Percentage',
    status: 'Active',
    discount: 22,
  },
  {
    name: 'SaveWhenSpend',
    type: 'Tiered Coupon',
    status: 'Active',
  },
  {
    name: '14ISCOOL',
    type: 'Percentage',
    status: 'Active',
    discount: 14,
  },
  {
    name: 'freeshipping',
    type: 'Free Shipping',
    status: 'Active',
  },
  {
    name: 'freedom',
    type: 'Free Shipping',
    status: 'Active',
  },
];

const couponEditPath = '/admin/customers/coupon/edit';

export function Coupons() {
  const [filter, setFilter] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [couponsData, setCouponsData] = useState<ICoupon[]>(initialCoupons);
  const navigate = useNavigate();

  const statuses: string[] = ['Active', 'Passive'];
  const columns: ITableColumn[] = [
    {
      title: 'Coupon Name',
      name: 'name',
      width: 250,
    },
    {
      title: 'Type',
      name: 'type',
      width: 250,
    },
    {
      title: 'Status',
      name: 'status',
      width: 250,
      cell: (row: any) => (
        <Select
          rounded="full"
          value={row.status}
          options={statuses}
          className={styles.statusSelector}
        />
      ),
    },
    {
      title: 'Discount',
      name: 'discount',
      width: 250,
      cell: (row: any) => <span>{row.discount ? `${row.discount}%` : ''}</span>,
    },
    {
      title: 'Action',
      name: 'action',
      width: 250,
      cell: (row: any) => (
        <div className={styles.actionCell}>
          <button
            className={styles.actionButton}
            onClick={() => navigate({ to: couponEditPath })}
          >
            Edit
          </button>
          <span>
            <TrashIcon />
          </span>
        </div>
      ),
    },
  ];

  const updateFilter = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  const updateStatus = (_category: string) => {
    setCategory(_category);
  };

  return (
    <Card title="Coupon Center" className={styles.root}>
      <TableToolbar
        search={filter}
        updateSearch={updateFilter}
        searchTitle="Coupon Name"
        category={category}
        updateCategory={updateStatus}
        selectTitle="Status"
        selectOpts={statuses}
        className={styles.tableToolbar}
        actions={
          <div>
            <p className={styles.buttonLabel}>New</p>
            <button className={styles.actionButton}>
              <Link to={''}>New</Link>
            </button>
          </div>
        }
      />
      <TableBody
        columns={columns}
        rows={couponsData}
        className={styles.tableBody}
      />
    </Card>
  );
}
