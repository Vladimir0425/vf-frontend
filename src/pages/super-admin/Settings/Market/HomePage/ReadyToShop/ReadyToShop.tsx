import React, { useState } from 'react';

import { Card } from '@/components/common';
import { ImageUpload } from '@/components/forms';

import { ImageType } from '@/interfaces';

import styles from './ReadyToShop.module.scss';

export interface IReadyToShopData {
  images: ImageType[];
}

export const initialReadyToShopData = {
  images: [null, null, null],
};

export function ReadyToShop() {
  const [readyToShopData, setReadyToShopData] = useState<IReadyToShopData>(
    initialReadyToShopData,
  );

  const updateImage = (image: File, index: number) => {
    setReadyToShopData({
      ...readyToShopData,
      images: readyToShopData.images.map((_image: ImageType, _index: number) =>
        _index === index ? image : _image,
      ),
    });
  };

  return (
    <Card title="Ready To Shop Images" className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.sliderSection}>
          <ImageUpload
            exWidth={455}
            exHeight={455}
            updateBaseImage={(image: File) => updateImage(image, 0)}
          />
          <ImageUpload
            exWidth={455}
            exHeight={455}
            updateBaseImage={(image: File) => updateImage(image, 1)}
          />
          <ImageUpload
            exWidth={455}
            exHeight={455}
            updateBaseImage={(image: File) => updateImage(image, 2)}
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
