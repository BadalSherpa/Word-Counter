import React from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import styles from './Body.module.css';

/**
 * @author
 * @function Body
 **/

const Body = (props) => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Col className={styles.form}>
      <Form name='basic' onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Form.Item
          label='Username'
          name='username'
          rules={[
            {
              required: true,
              message: 'Please input the the number to see the top frequency',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item style={{ textAlign: 'center' }}>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Col>
  );
};

export default Body;
