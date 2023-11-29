import { ChangeEvent, useState, useEffect } from 'react';
import { useMatch, useNavigate } from '@tanstack/react-location';

import { Card, Input, Select } from '@/components';

import { CategoryService } from '@/services';

import { useCategoryStore } from '@/stores';

import { ICategory } from '@/interfaces';

import styles from './NewCategory.module.scss';

const initialCategory: ICategory = {
  name: '',
  status: '',
};
const initialStatus = ['Active', 'Inactive'];

const backToPath = '/admin/settings/dashboard/category';

export function NewCategory() {
  const navigate = useNavigate();
  const {
    params: { id: categoryId },
  } = useMatch();
  const { updateCategory: updateStoreCategory } = useCategoryStore();
  const [category, setCategory] = useState<ICategory>(initialCategory);

  const updateCatName = (e: ChangeEvent<HTMLInputElement>) => {
    setCategory({ ...category, name: e.target.value });
  };

  const updateCatStatus = (status: string) => {
    setCategory({ ...category, status });
  };

  const onCreateClick = () => {
    if (categoryId === 'create') {
      CategoryService.createOne(category).then(() => {
        navigate({ to: backToPath });
      });
    } else {
      CategoryService.updateOne(categoryId, category).then(() => {
        updateStoreCategory(categoryId, category);
        navigate({ to: backToPath });
      });
    }
  };

  useEffect(() => {
    if (!categoryId || categoryId === 'create') {
      setCategory(initialCategory);
    } else {
      CategoryService.findOne(categoryId).then(category => {
        setCategory(category);
      });
    }
  }, [categoryId]);

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
          {categoryId === 'create' ? 'Add' : 'Edit'}
        </button>
      </div>
    </Card>
  );
}
