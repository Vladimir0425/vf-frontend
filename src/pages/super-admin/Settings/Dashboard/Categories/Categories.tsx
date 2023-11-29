import { ChangeEvent, useState, useEffect } from 'react';
import { useNavigate } from '@tanstack/react-location';

import { Card, TableToolbar, TableBody } from '@/components/common';
import { Select } from '@/components/forms';

import { TrashIcon } from '@/components/icons';

import { useCategoryStore } from '@/stores';

import { ITableColumn } from '@/interfaces';

import styles from './Categories.module.scss';
import { CategoryService } from '@/services';

export interface ICategory {
  name: string;
  status: string;
}

const catPathPrefix = '/admin/settings/dashboard/category';

export function Categories() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const {
    categories: storeCategories,
    setCategories: setStoreCategories,
    deleteCategory: deleteStoreCategory,
  } = useCategoryStore();

  const statuses: string[] = ['Active', 'Inactive'];
  const columns: ITableColumn[] = [
    {
      title: 'Category Name',
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
          <button
            className={styles.actionButton}
            onClick={() => navigate({ to: `${catPathPrefix}/${row._id}` })}
          >
            Edit
          </button>
          <span onClick={onDeleteClick(row._id)}>
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

  const onDeleteClick = (id: string) => () => {
    CategoryService.deleteOne(id).then(() => {
      deleteStoreCategory(id);
    });
  };

  useEffect(() => {
    CategoryService.findAll(filter, category).then(categories => {
      setStoreCategories(categories);
    });
  }, [filter, category]);

  return (
    <Card title="Categories" className={styles.root}>
      <TableToolbar
        search={filter}
        updateSearch={updateFilter}
        searchTitle="Category Name"
        category={category}
        updateCategory={updateStatus}
        selectTitle="Status"
        selectOpts={statuses}
        className={styles.tableToolbar}
        actions={
          <div>
            <p className={styles.buttonLabel}>New</p>
            <button
              className={styles.actionButton}
              onClick={() => navigate({ to: `${catPathPrefix}/create` })}
            >
              New
            </button>
          </div>
        }
      />
      <TableBody
        columns={columns}
        rows={storeCategories}
        className={styles.tableBody}
      />
    </Card>
  );
}
