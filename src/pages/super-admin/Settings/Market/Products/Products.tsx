import React, { useState, ChangeEvent } from 'react';

import { Card } from '@/components/common';
import { ImageUpload, Input, TextField } from '@/components/forms';

import styles from './Products.module.scss';

export interface IProduct {
  title: string;
  name: string;
  price: number;
  tags: string[];
  image: File | null;
  description: string;
  link: string;
}

const initialProduct = {
  title: '',
  name: '',
  price: 0,
  tags: ['Gluten Free', 'Heavy Weight'],
  image: null,
  description: '',
  link: '',
};

export function Products() {
  const [product, setProduct] = useState<IProduct>(initialProduct);

  const updateProduct = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: string,
  ) => {
    const value = e.target.value;
    setProduct({
      ...product,
      [field]:
        field === 'price'
          ? Number(value.startsWith('$') ? value.slice(1) : '')
          : e.target.value,
    });
  };

  const onUpdateTags = (e: ChangeEvent<HTMLInputElement>) => {
    const tags = e.target.value.split(', ');
    if (tags.length !== product.tags.length) return;
    setProduct({
      ...product,
      tags: tags.filter((tag: string) => tag !== ''),
    });
  };

  const onUpdateImage = (image: File) => {
    setProduct({
      ...product,
      image,
    });
  };

  return (
    <Card title="Featured Prdoucts" className={styles.root}>
      <div className={styles.cardContent}>
        <div className={styles.section}>
          <p>Product Title</p>
          <Input
            value={product.title}
            placeholder="Product Title"
            updateValue={(e: ChangeEvent<HTMLInputElement>) =>
              updateProduct(e, 'title')
            }
            className={styles.input}
          />
        </div>
        <div className={styles.section}>
          <p>Product Name</p>
          <Input
            value={product.name}
            placeholder="Product Name"
            updateValue={(e: ChangeEvent<HTMLInputElement>) =>
              updateProduct(e, 'name')
            }
            className={styles.input}
          />
        </div>
        <div className={styles.section}>
          <p>Product Price</p>
          <Input
            value={`$${product.price.toFixed(2)}`}
            placeholder="Product Price"
            updateValue={(e: ChangeEvent<HTMLInputElement>) =>
              updateProduct(e, 'price')
            }
            className={styles.input}
          />
        </div>
        <div className={styles.section}>
          <p>Product Tags</p>
          <Input
            value={product.tags.join(', ')}
            placeholder="Product Tags"
            updateValue={onUpdateTags}
            className={styles.input}
          />
        </div>
        <div className={styles.section}>
          <p className={styles.emphasize}>Image</p>
          <ImageUpload
            exWidth={430}
            exHeight={345}
            updateBaseImage={onUpdateImage}
          />
        </div>
        <div className={styles.section}>
          <p>Description</p>
          <TextField
            value={product.description}
            placeholder="Description"
            updateValue={(e: ChangeEvent<HTMLTextAreaElement>) =>
              updateProduct(e, 'description')
            }
            className={styles.input}
          />
        </div>
        <div className={styles.section}>
          <p>Product Link</p>
          <Input
            value={product.link}
            placeholder="Product Link"
            updateValue={(e: ChangeEvent<HTMLInputElement>) =>
              updateProduct(e, 'link')
            }
            className={styles.input}
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
