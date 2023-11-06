import React, { useState, ChangeEvent } from 'react';

import { Card } from '@/components/common';
import { ImageUpload, Input, TextField } from '@/components/forms';

import { ImageType } from '@/interfaces';

import styles from './Shop.module.scss';

export interface IBodyText {
  header: string;
  content: string;
}

export interface IShopData {
  title: string;
  subtitle: string;
  images: ImageType[];
  bodyText: IBodyText[];
}

export const initialShopData = {
  title: '',
  subtitle: '',
  images: [null, null],
  bodyText: [
    {
      header: '1 . Only true makers & growers live here',
      content: `We believe that if a marketplace says it's for small batch makers and growers, it should honor that mission. At Fresher Choice we vet all of our vendors to make sure they are truly small businesses. Small business shouldn't have to compete with big business.`,
    },
    {
      header: '1 . Only true makers & growers live here',
      content: `We believe that if a marketplace says it's for small batch makers and growers, it should honor that mission. At Fresher Choice we vet all of our vendors to make sure they are truly small businesses. Small business shouldn't have to compete with big business.`,
    },
    {
      header: '1 . Only true makers & growers live here',
      content: `We believe that if a marketplace says it's for small batch makers and growers, it should honor that mission. At Fresher Choice we vet all of our vendors to make sure they are truly small businesses. Small business shouldn't have to compete with big business.`,
    },
    {
      header: '1 . Only true makers & growers live here',
      content: `We believe that if a marketplace says it's for small batch makers and growers, it should honor that mission. At Fresher Choice we vet all of our vendors to make sure they are truly small businesses. Small business shouldn't have to compete with big business.`,
    },
  ],
};

export function Shop() {
  const [shopData, setShopData] = useState<IShopData>(initialShopData);

  const updateImage = (image: File, index: number) => {
    setShopData({
      ...shopData,
      images: shopData.images.map((_image: ImageType, _index: number) =>
        _index === index ? image : _image,
      ),
    });
  };

  const updateTitle = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: string,
  ) => {
    setShopData({
      ...shopData,
      [field]: e.target.value,
    });
  };

  const updateBodyText = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number,
    field: string,
  ) => {
    setShopData({
      ...shopData,
      bodyText: shopData.bodyText.map((text: IBodyText, _index: number) =>
        index === _index ? { ...text, [field]: e.target.value } : text,
      ),
    });
  };

  return (
    <Card title="Shop Intentionally" className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.text}>
          <div>
            <p>Title</p>
            <Input
              placeholder="Title"
              className={styles.input}
              updateValue={(e: ChangeEvent<HTMLInputElement>) =>
                updateTitle(e, 'title')
              }
            />
          </div>
          <div>
            <p>Subtext</p>
            <TextField
              placeholder="Subtext"
              className={styles.input}
              updateValue={(e: ChangeEvent<HTMLTextAreaElement>) =>
                updateTitle(e, 'subtitle')
              }
            />
          </div>
        </div>
        <div className={styles.images}>
          <h2>How it works hero image</h2>
          <ImageUpload
            exWidth={1920}
            exHeight={333}
            updateBaseImage={(image: File) => updateImage(image, 0)}
          />
          <h2>How it works side image</h2>
          <ImageUpload
            exWidth={1920}
            exHeight={333}
            updateBaseImage={(image: File) => updateImage(image, 1)}
          />
        </div>
        <div className={styles.body}>
          <p>Body</p>
          <div>
            {shopData.bodyText.map((text: IBodyText, index: number) => (
              <div
                key={`body-text-item-${index}`}
                className={styles.bodyTextItem}
              >
                <Input
                  value={text.header}
                  className={styles.input}
                  updateValue={(e: ChangeEvent<HTMLInputElement>) =>
                    updateBodyText(e, index, 'header')
                  }
                />
                <TextField
                  rows={5}
                  value={text.content}
                  className={styles.input}
                  updateValue={(e: ChangeEvent<HTMLTextAreaElement>) =>
                    updateBodyText(e, index, 'content')
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.buttonBar}>
        <button className={styles.cancelButton}>Cancel</button>
        <button className={styles.addButton}>Add</button>
      </div>
    </Card>
  );
}
