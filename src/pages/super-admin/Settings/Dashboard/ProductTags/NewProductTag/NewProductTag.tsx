import React, { ChangeEvent, useState, useEffect, useMemo } from 'react';
import { useNavigate, useMatch, useMatchRoute } from '@tanstack/react-location';

import { Card, Input, Select } from '@/components';

import { TagService } from '@/services';

import { IProductTag } from '@/interfaces';

import styles from './NewProductTag.module.scss';

const initialProductTag: IProductTag = {
  name: '',
  status: '',
};
const initialStatus = ['Active', 'Inactive'];

const backToPath = '/admin/settings/dashboard/tags';

export function NewProductTag() {
  const navigate = useNavigate();
  const {
    params: { id: tagId },
  } = useMatch();
  const [product, setProduct] = useState<IProductTag>(initialProductTag);

  const updateTagName = (e: ChangeEvent<HTMLInputElement>) => {
    setProduct({ ...product, name: e.target.value });
  };

  const updateTagStatus = (status: string) => {
    setProduct({ ...product, status });
  };

  const onCreateClick = () => {
    if (tagId === 'create') {
      TagService.createOne(product).then(tag => {
        navigate({ to: backToPath });
      });
    } else {
      TagService.updateOne(tagId, product).then(tag => {
        navigate({ to: backToPath });
      });
    }
  };

  useEffect(() => {
    if (tagId && tagId !== 'create') {
      TagService.findOne(tagId).then(tag => {
        setProduct(tag);
      });
    }
  }, [tagId]);

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
            options={initialStatus}
          />
        </div>
      </div>
      <div className={styles.buttonBar}>
        <button
          className={styles.cancelButton}
          onClick={() => navigate({ to: backToPath })}
        >
          Cancel
        </button>
        <button className={styles.addButton} onClick={onCreateClick}>
          {tagId === 'create' ? 'Add' : 'Edit'}
        </button>
      </div>
    </Card>
  );
}
