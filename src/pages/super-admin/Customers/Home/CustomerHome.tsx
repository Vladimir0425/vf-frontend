import React, { ChangeEvent, useState } from 'react';
import { Navigate, useNavigate } from '@tanstack/react-location';
import clsx from 'clsx';

import { Card, TableBody, TableToolbar } from '@/components';
import { Select } from '@/components/forms';
import { TrashIcon } from '@/components/icons';

import { IRange, ITableColumn } from '@/interfaces';

import styles from './CustomerHome.module.scss';

const sortOpts = ['Alphabetical Order', 'Most Recent', 'Oldest'];

const statusOpts = ['Active', 'Passive'];

const initialRange = {
  from: new Date(),
  to: new Date(),
};

const initialTableData = [
  {
    name: 'John Pollock',
    email: 'Brandon@fresherchoice.com',
    status: 'Active',
    phone: '203-228-8814',
    address: '313 Capitol Avenue Waterbury, Ct 06705',
  },
  {
    name: 'John Pollock',
    email: 'Brandon@fresherchoice.com',
    status: 'Active',
    phone: '203-228-8814',
    address: '313 Capitol Avenue Waterbury, Ct 06705',
  },
];

const customerEditPath = '/admin/customers/home/edit';

export function CustomerHome() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('');
  const [category, setCategory] = useState('');
  const [range, setRange] = useState<IRange>(initialRange);
  const [tableData, setTableData] = useState(initialTableData);

  const columns: ITableColumn[] = [
    {
      title: 'Customer Name',
      name: 'name',
      width: 200,
      cell: (row: any) => <span className={styles.cell}>{row.name}</span>,
    },
    {
      title: 'Email',
      name: 'email',
      width: 200,
      cell: (row: any) => <span className={styles.cell}>{row.email}</span>,
    },
    {
      title: 'Status',
      name: 'status',
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
      title: 'Phone Number',
      name: 'phone',
      width: 200,
      cell: (row: any) => <span className={styles.cell}>{row.phone}</span>,
    },
    {
      title: 'Address',
      name: 'address',
      width: 200,
      cell: (row: any) => <span className={styles.cell}>{row.address}</span>,
    },
    {
      title: 'Action',
      name: 'action',
      width: 250,
      cell: (row: any) => (
        <div className={styles.actionCell}>
          <button
            className={styles.actionButton}
            onClick={() => navigate({ to: customerEditPath })}
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

  const onFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  const onRangeChange =
    (which: string) => (e: ChangeEvent<HTMLInputElement>) => {
      setRange({ ...range, [which]: new Date(e.target.value) });
    };

  return (
    <Card title="Customer Management" className={styles.root}>
      <TableToolbar
        searchTitle="Search Customer Name"
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
        className={styles.taboeBody}
      />
    </Card>
  );
}
