import React, { ChangeEvent, useState } from 'react';
import { Link } from '@tanstack/react-location';

import { Card, TableToolbar, TableBody } from '@/components/common';
import { Select } from '@/components/forms';

import { TrashIcon } from '@/components/icons';

import { ITableColumn } from '@/interfaces';

import styles from './Metrics.module.scss';

export interface IMetric {
  name: string;
  status: string;
}

const initialMetricsData: IMetric[] = [
  {
    name: 'Black Polish Radish',
    status: 'Active',
  },
  {
    name: 'Bowls of Puter',
    status: 'Active',
  },
  {
    name: 'Black Polish Radish',
    status: 'Active',
  },
  {
    name: 'Bowls of Puter',
    status: 'Active',
  },
  {
    name: 'Black Polish Radish',
    status: 'Active',
  },
  {
    name: 'Bowls of Puter',
    status: 'Active',
  },
];

const newMetricPath = '/admin/settings/dashboard/metrics/create';

export function Metrics() {
  const [filter, setFilter] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [tagsData, setTagsData] = useState<IMetric[]>(initialMetricsData);

  const statuses: string[] = ['Active', 'Passive'];
  const columns: ITableColumn[] = [
    {
      title: 'Metric Name',
      name: 'name',
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
      title: 'Action',
      name: 'action',
      width: 250,
      cell: (row: any) => (
        <div className={styles.actionCell}>
          <button className={styles.actionButton}>Edit</button>
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
    <Card title="Metrics" className={styles.root}>
      <TableToolbar
        search={filter}
        updateSearch={updateFilter}
        searchTitle="Metric Name"
        category={category}
        updateCategory={updateStatus}
        selectTitle="Status"
        selectOpts={statuses}
        className={styles.tableToolbar}
        actions={
          <div>
            <p className={styles.buttonLabel}>New</p>
            <button className={styles.actionButton}>
              <Link to={newMetricPath}>New</Link>
            </button>
          </div>
        }
      />
      <TableBody
        columns={columns}
        rows={tagsData}
        className={styles.tableBody}
      />
    </Card>
  );
}
