import React, { useState } from 'react';

import { Card } from '@/components/common';
import { ImageUpload, Input, TextField } from '@/components/forms';

import { ImageType } from '@/interfaces';

import styles from './Slider.module.scss';

export interface IHomeData {
  title: string;
  subtitle: string;
  images: ImageType[];
}

export const initialHomeData = {
  title: '',
  subtitle: '',
  images: [null, null, null],
};

export function Slider() {
  const [homeData, setHomeData] = useState<IHomeData>(initialHomeData);

  const updateImage = (image: File, index: number) => {
    setHomeData({
      ...homeData,
      images: homeData.images.map((_image: ImageType, _index: number) =>
        _index === index ? image : _image,
      ),
    });
  };

  return (
    <Card title="Home Page" className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.textSection}>
          <div>
            <p>Title Text</p>
            <Input placeholder="Section Title" className={styles.input} />
          </div>
          <div>
            <p>Title Subtext</p>
            <TextField placeholder="Title Subtext" className={styles.input} />
          </div>
        </div>
        <div className={styles.sliderSection}>
          <h2>Slider Images</h2>
          <ImageUpload
            exWidth={1920}
            exHeight={487}
            updateBaseImage={(image: File) => updateImage(image, 0)}
          />
          <ImageUpload
            exWidth={1920}
            exHeight={487}
            updateBaseImage={(image: File) => updateImage(image, 1)}
          />
          <ImageUpload
            exWidth={1920}
            exHeight={487}
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
