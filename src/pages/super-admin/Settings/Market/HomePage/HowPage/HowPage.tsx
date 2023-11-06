import React, { useState, ChangeEvent } from 'react';

import { Card } from '@/components/common';
import { ImageUpload, Input } from '@/components/forms';

import { ImageType } from '@/interfaces';

import styles from './HowPage.module.scss';

export interface IHowData {
  title: string;
  image: ImageType;
}

export const initialHowData = {
  title: 'Gluten Free, Heavy Weight',
  image: null,
};

export function HowPage() {
  const [howData, setHowData] = useState<IHowData>(initialHowData);

  const updateData = (data: ImageType | string, field: string) => {
    setHowData({
      ...howData,
      [field]: data,
    });
  };

  return (
    <Card title="How It Works" className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.titleSection}>
          <p>How it works title text</p>
          <Input
            placeholder="Gluten Free, Heavy Weight"
            className={styles.input}
            updateValue={(e: ChangeEvent<HTMLInputElement>) =>
              updateData(e.target.value, 'title')
            }
          />
        </div>
        <div className={styles.imageSection}>
          <h2>How it works image</h2>
          <ImageUpload
            exWidth={1920}
            exHeight={333}
            updateBaseImage={(image: File) => updateData(image, 'image')}
          />
        </div>
      </div>
    </Card>
  );
}
