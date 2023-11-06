import React, { ChangeEvent, useState } from 'react';
import { Navigate, useNavigate } from '@tanstack/react-location';
import clsx from 'clsx';

import { Card, TableBody, TableToolbar } from '@/components';
import { Input, Select } from '@/components/forms';

import { IRange, ITableColumn } from '@/interfaces';

import { formatDate, formatNumber } from '@/utils';

import styles from './Village.module.scss';

const sortOpts = [
  'Alphabetical Order',
  'Recently Added',
  'Highest Revenue',
  'Lowest Revenue',
];

const statusOpts = ['Active', 'Blocked', 'Paused', 'Inactive'];

const initialRange = {
  from: new Date(),
  to: new Date(),
};

type StatusType = 'Active' | 'Blocked' | 'Paused' | 'Inactive';

export interface ICommunity {
  name: string;
  organizer: string;
  fulfillment: string;
  date: Date;
  total: number;
  status: StatusType;
}

const initialTableData: ICommunity[] = [
  {
    name: 'Bill Billerson',
    organizer: 'Bowls of Puter',
    fulfillment: 'Safe Pickup',
    date: new Date('04/07/2023'),
    total: 45,
    status: 'Active',
  },
  {
    name: 'Bowls of Puter',
    organizer: 'Jacobs Well Best Stuff',
    fulfillment: 'Safe Pickup',
    date: new Date('04/07/2023'),
    total: 234,
    status: 'Active',
  },
  {
    name: 'Nathan Bargatzbe',
    organizer: 'John & Sams Cool Things',
    fulfillment: 'Home Delivery',
    date: new Date('04/07/2023'),
    total: 1234,
    status: 'Active',
  },
];

const communityViewPath = '/admin/community/village/edit';

export function VillageCommunity() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('');
  const [category, setCategory] = useState('');
  const [range, setRange] = useState<IRange>(initialRange);
  const [tableData, setTableData] = useState(initialTableData);

  const columns: ITableColumn[] = [
    {
      title: 'Village Name',
      name: 'name',
      width: 150,
    },
    {
      title: 'Village Organizer',
      name: 'organizer',
      width: 150,
    },
    {
      title: 'Fulfillment Type',
      name: 'fulfillment',
      width: 200,
      cell: (row: any) => (
        <span className={styles.cell}>{row.fulfillment}</span>
      ),
    },
    {
      title: 'Signup Date',
      name: 'date',
      width: 150,
      cell: (row: any) => <Input rounded="full" value={formatDate(row.date)} />,
    },
    {
      title: 'Total Vendors',
      name: 'total',
      width: 150,
      cell: (row: any) => <span>${formatNumber(row.total)}</span>,
    },
    {
      title: 'Status',
      name: 'status',
      width: 200,
      cell: (row: any) => (
        <Select
          rounded="full"
          value={row.status}
          options={statusOpts}
          className={styles.statusSelector}
        />
      ),
    },
    {
      title: 'Action',
      name: 'action',
      width: 250,
      cell: (row: any) => (
        <div className={styles.actionCell}>
          <button
            className={styles.actionButton}
            onClick={() => navigate({ to: communityViewPath })}
          >
            View
          </button>
        </div>
      ),
    },
  ];

  const onFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  const onRangeChange =
    (which: string) => (e: ChangeEvent<HTMLInputElement>) => {
      setRange({ ...range, [which]: new Date(e.target.value) });
    };

  return (
    <Card title="All Orders" className={styles.root}>
      <TableToolbar
        searchTitle="Search Shop Owner or Vendor Name"
        search={filter}
        updateSearch={onFilterChange}
        rangable={true}
        range={range}
        updateRange={onRangeChange}
        downloadable={true}
        sortable={true}
        sortOpts={sortOpts}
        sort={sort}
        updateSort={(_sort: string) => setSort(_sort)}
        selectTitle="Status"
        selectOpts={statusOpts}
        category={category}
        updateCategory={(_cat: string) => setCategory(_cat)}
        className={styles.tableToolbar}
        actions={
          <div className={styles.actions}>
            <div>
              <p>Submit</p>
              <button className={clsx(styles.button, styles.submit)}>
                Submit
              </button>
            </div>
            <div>
              <p>Reset</p>
              <button className={clsx(styles.button, styles.reset)}>
                Reset
              </button>
            </div>
          </div>
        }
      />
      <TableBody
        columns={columns}
        rows={tableData}
        className={styles.tableBody}
      />
    </Card>
  );
}
