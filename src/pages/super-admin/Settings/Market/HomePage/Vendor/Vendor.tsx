import React, { useState } from 'react';

import { Card } from '@/components/common';
import { ImageUpload } from '@/components/forms';

import { ImageType } from '@/interfaces';

import styles from './Vendor.module.scss';

export interface IVendorData {
  images: ImageType[];
}

export const initialVendorData = {
  images: [null, null, null],
};

export function Vendor() {
  const [vendorData, setVendorData] = useState<IVendorData>(initialVendorData);

  const updateImage = (image: File, index: number) => {
    setVendorData({
      ...vendorData,
      images: vendorData.images.map((_image: ImageType, _index: number) =>
        _index === index ? image : _image,
      ),
    });
  };

  return (
    <Card title="Vendor Community Images" className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.sliderSection}>
          <h2>Slider Images</h2>
          <ImageUpload
            exWidth={375}
            exHeight={210}
            updateBaseImage={(image: File) => updateImage(image, 0)}
          />
          <ImageUpload
            exWidth={375}
            exHeight={210}
            updateBaseImage={(image: File) => updateImage(image, 1)}
          />
          <ImageUpload
            exWidth={375}
            exHeight={210}
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
