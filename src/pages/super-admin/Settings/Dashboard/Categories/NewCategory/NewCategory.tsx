import React, { ChangeEvent, useState } from 'react';

import { Card, Input, Select } from '@/components';
import { ICategory } from '../Categories';

import styles from './NewCategory.module.scss';

const initialCategory: ICategory = {
  name: '',
  status: '',
};

export function NewCategory() {
  const [category, setCategory] = useState<ICategory>(initialCategory);

  const updateCatName = (e: ChangeEvent<HTMLInputElement>) => {
    setCategory({ ...category, name: e.target.value });
  };

  const updateCatStatus = (status: string) => {
    setCategory({ ...category, status });
  };

  return (
    <Card title="New Category" className={styles.root}>
      <div className={styles.form}>
        <div className={styles.control}>
          <p>Category Name</p>
          <Input
            value={category.name}
            updateValue={updateCatName}
            placeholder="Category Name"
          />
        </div>
        <div className={styles.control}>
          <p>Status</p>
          <Select
            value={category.status}
            updateValue={updateCatStatus}
            placeholder="Status"
          />
        </div>
      </div>
      <div className={styles.buttonBar}>
        <button className={styles.cancelButton}>Cancel</button>
        <button className={styles.addButton}>Add</button>
      </div>
    </Card>
  );
}
