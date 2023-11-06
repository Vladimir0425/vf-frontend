import React, { ChangeEvent, useState } from 'react';

import { Card, Input, Select } from '@/components';
import { IProductTag } from '../ProductTags';

import styles from './NewProductTag.module.scss';

const initialProductTag: IProductTag = {
  name: '',
  status: '',
};

export function NewProductTag() {
  const [product, setProduct] = useState<IProductTag>(initialProductTag);

  const updateTagName = (e: ChangeEvent<HTMLInputElement>) => {
    setProduct({ ...product, name: e.target.value });
  };

  const updateTagStatus = (status: string) => {
    setProduct({ ...product, status });
  };

  return (
    <Card title="New Product Tags" className={styles.root}>
      <div className={styles.form}>
        <div className={styles.control}>
          <p>Tag Name</p>
          <Input
            value={product.name}
            updateValue={updateTagName}
            placeholder="Tag Name"
          />
        </div>
        <div className={styles.control}>
          <p>Status</p>
          <Select
            value={product.status}
            updateValue={updateTagStatus}
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
