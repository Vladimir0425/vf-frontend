import React, { ChangeEvent, useState } from 'react';

import { Card, Input } from '@/components';
import { SupportCenter } from '@/components/super-admin';

import { formatNumber } from '@/utils';

import styles from './CustomerEdit.module.scss';
import { useNavigate } from '@tanstack/react-location';

export interface ICustomer {
  name: string;
  email: string;
  phone: string;
  address: string;
}

const initialCustomer = {
  name: '',
  email: '',
  phone: '',
  address: '',
};

export interface ICustomerStatis {
  spending: number;
  lifetime: number;
}

const initialStatis = {
  spending: 102033,
  lifetime: 1340566,
};

const backToHomePath = '/admin/customers/home';

export function CustomerEdit() {
  const navigate = useNavigate();
  const [customer, setCustomer] = useState<ICustomer>(initialCustomer);
  const [statisData, setStatisData] = useState<ICustomerStatis>(initialStatis);

  const updateCustomer =
    (field: string) => (e: ChangeEvent<HTMLInputElement>) => {
      setCustomer({
        ...customer,
        [field]: e.target.value,
      });
    };

  return (
    <div className={styles.root}>
      <button
        className={styles.backButton}
        onClick={() => navigate({ to: backToHomePath })}
      >
        Back
      </button>
      <Card title="Customer Management" className={styles.manageSection}>
        <div className={styles.container}>
          <div className={styles.control}>
            <p>Customer Name</p>
            <Input
              value={customer.name}
              updateValue={updateCustomer('name')}
              placeholder="Customer Name"
            />
          </div>
          <div className={styles.control}>
            <p>Customer Email</p>
            <Input
              value={customer.email}
              updateValue={updateCustomer('email')}
              placeholder="Customer Email"
            />
          </div>
          <div className={styles.control}>
            <p>Customer Phone Number</p>
            <Input
              value={customer.phone}
              updateValue={updateCustomer('phone')}
              placeholder="Customer Phone Number"
            />
          </div>
          <div className={styles.control}>
            <p>Customer Address</p>
            <Input
              value={customer.address}
              updateValue={updateCustomer('address')}
              placeholder="Customer Address"
            />
          </div>
        </div>
      </Card>
      <div className={styles.statisSection}>
        <Card>
          <div className={styles.statis}>
            <p>Spend this year</p>
            <p>{formatNumber(statisData.spending)}</p>
          </div>
        </Card>
        <Card>
          <div className={styles.statis}>
            <p>Lifetime Value</p>
            <p>{formatNumber(statisData.lifetime)}</p>
          </div>
        </Card>
      </div>
      <SupportCenter />
    </div>
  );
}
