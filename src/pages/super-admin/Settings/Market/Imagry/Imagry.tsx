import React from 'react';

import { Card } from '@/components/common';
import { ImageUpload } from '@/components/forms';

import styles from './Imagry.module.scss';

export function Imagry() {
  return (
    <Card title="Imagry" className={styles.root}>
      <h1>Product Discovery Page hero image</h1>
      <ImageUpload exWidth={1920} exHeight={220} />
    </Card>
  );
}
