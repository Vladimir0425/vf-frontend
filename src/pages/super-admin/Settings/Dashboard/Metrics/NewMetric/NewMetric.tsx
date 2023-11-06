import React, { ChangeEvent, useState } from 'react';

import { Card, Input, Select } from '@/components';
import { IMetric } from '../Metrics';

import styles from './NewMetric.module.scss';

const initialMetric: IMetric = {
  name: '',
  status: '',
};

export function NewMetric() {
  const [metric, setMetric] = useState<IMetric>(initialMetric);

  const updateMetricName = (e: ChangeEvent<HTMLInputElement>) => {
    setMetric({ ...metric, name: e.target.value });
  };

  const updateMetricStatus = (status: string) => {
    setMetric({ ...metric, status });
  };

  return (
    <Card title="New Metric" className={styles.root}>
      <div className={styles.form}>
        <div className={styles.control}>
          <p>Metric Name</p>
          <Input
            value={metric.name}
            updateValue={updateMetricName}
            placeholder="Metric Name"
          />
        </div>
        <div className={styles.control}>
          <p>Status</p>
          <Select
            value={metric.status}
            updateValue={updateMetricStatus}
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
