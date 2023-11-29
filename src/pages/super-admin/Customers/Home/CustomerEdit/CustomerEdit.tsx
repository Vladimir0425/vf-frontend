import { ChangeEvent, useState, useEffect } from 'react';
import { useMatch, useNavigate } from '@tanstack/react-location';

import { Card, Input } from '@/components';
import { SupportCenter } from '@/components/super-admin';

import { CustomerService } from '@/services';

import { ICustomer } from '@/interfaces';

import { formatNumber } from '@/utils';

import styles from './CustomerEdit.module.scss';

const initialCustomer: ICustomer = {
  name: '',
  email: '',
  number: '',
  address: '',
  status: '',
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
  const {
    params: { id: customerId },
  } = useMatch();
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

  const onEditClick = () => {
    CustomerService.updateOne(customerId, customer).then(() => {
      navigate({ to: backToHomePath });
    });
  };

  useEffect(() => {
    if (customerId) {
      CustomerService.findOne(customerId).then(customer => {
        setCustomer(customer);
      });
    }
  }, [customerId]);

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
              value={customer.number}
              updateValue={updateCustomer('number')}
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
        <div className={styles.buttonBar}>
          <button className={styles.button} onClick={onEditClick}>
            Edit
          </button>
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
