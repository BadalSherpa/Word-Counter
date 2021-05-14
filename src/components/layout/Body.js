import React from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import styles from './Body.module.css';
import { useEffect, useState } from 'react';
import TableComponent from '../common/TableComponent';
import axios from 'axios';

/**
 * @author
 * @function Body
 **/

const Body = (props) => {
  const [showTable, setShowTable] = useState(false);
  const [number, setNumber] = useState();
  const [data, setData] = useState('');

  //getting the input number from the form
  const handleSubmit = (values) => {
    console.log(values.num);
    setNumber(values.num);
    setShowTable(true);
  };

  //fetching the string data using axios
  const url =
    'https://raw.githubusercontent.com/invictustech/test/main/README.md';

  const handleClick = () => {
    setShowTable(false);
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.log(`Error:${error}`));
  };

  //calling handleClick function inside useEffectt
  useEffect(() => {
    handleClick();
  }, []);

  return (
    <Col className={styles.form}>
      <p
        style={{
          fontWeight: 'bolder',
          textAlign: 'center',
          margin: '10px 0 10px 0',
          fontSize: '1.2rem',
        }}
      >
        The Top N frequently occurring words
      </p>
      <Form onFinish={handleSubmit} layout='vertical'>
        <FormItem
          name='num'
          rules={[
            {
              pattern: '^[0-9]*$',
              required: true,
              type: 'string',
              message:
                'Please enter the number to see top words with frequency!',
            },
          ]}
          hasFeedback
        >
          <Input
            size='large'
            placeholder='Enter the number of words that you want to see'
          />
        </FormItem>

        <Row>
          <Button
            style={{ backgroundColor: 'blue', color: '#fff' }}
            htmlType='submit'
            onClick={handleClick}
            size='large'
            block
          >
            Submit
          </Button>
        </Row>
      </Form>
      {showTable && (
        <Col style={{ marginTop: '50px' }}>
          <TableComponent num={number} data={data} />
        </Col>
      )}
    </Col>
  );
};

export default Body;
