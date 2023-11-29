import { Button, Input, Radio } from '@/components/forms';

import styles from './Signup.module.scss';
import { Container } from '@/components/layout/customer';

export function Signup() {
  return (
    <div className={styles.root}>
      <Container className={styles.container}>
        <h1>Sign Up!</h1>
        <p className={styles.subtitle}>Let's get to know</p>
        <div className={styles.form}>
          <Input
            size="large"
            border="solid"
            placeholder="First Name"
            borderColor="primary"
            className={styles.input}
          />
          <Input
            size="large"
            border="solid"
            placeholder="Last Name"
            borderColor="primary"
            className={styles.input}
          />
          <Input
            size="large"
            border="solid"
            placeholder="Phone Number"
            borderColor="primary"
            className={styles.input}
          />
          <Input
            size="large"
            border="solid"
            placeholder="Email"
            borderColor="primary"
            className={styles.input}
          />
          <Input
            size="large"
            border="solid"
            placeholder="Zip Code"
            borderColor="primary"
            className={styles.input}
          />
          <Input
            type="password"
            size="large"
            border="solid"
            placeholder="Create Password"
            borderColor="primary"
            className={styles.input}
          />
          <Input
            type="password"
            size="large"
            border="solid"
            placeholder="Confirm Password"
            borderColor="primary"
            className={styles.input}
          />
          <div className={styles.terms}>
            <h2>Terms And Conditions</h2>
          </div>
          <Radio
            label="I accept the terms and conditions"
            value="false"
            className={styles.agreeRadio}
          />
          <Button className={styles.signupBtn}>Register</Button>
        </div>
      </Container>
    </div>
  );
}
