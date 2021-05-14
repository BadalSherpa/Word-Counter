import React, { useEffect, useState } from 'react';
import { Col, Table } from 'antd';

/**
 * @author   BadalSherpa
 * @function TableComponent
 **/

const columns = [
  {
    title: 'Word',
    dataIndex: 'word',
    key: 'word',
    render: (text) => text,
  },
  {
    title: 'Frequency Count',
    dataIndex: 'count',
    key: 'count',
    sorter: {
      compare: (a, b) => a.count - b.count,
      multiple: 2,
    },
  },
];

const TableComponent = ({ num, data }) => {
  const [arr, setArr] = useState([]);
  //counting Frequency
  var words = data.replaceAll(/[,.^-]/g, '').split(/\s/); //spliting unwanted characters
  var freqMap = {};
  const wordFreq = () => {
    words.forEach(function (w) {
      if (!freqMap[w]) {
        freqMap[w] = 0;
      }
      freqMap[w] += 1;
    });
    // console.log(freqMap);
    // return freqMap;
  };

  const sortObject = (obj) => {
    var arr1 = [];
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        if (prop - ' ' !== 0) {
          //ignoring empty string " "
          arr1.push({
            word: prop,
            count: obj[prop],
          });
        }
      }
    }
    arr1.sort((a, b) => {
      return b.count - a.count; //to sort in descending order
    });
    // console.log('SORTED ARRAY');
    // console.log(arr1);
    return arr1; // returns array
  };

  useEffect(() => {
    wordFreq();
    setArr(sortObject(freqMap));
    // eslint-disable-next-line
  }, []);

  const a = [];
  for (var i = 0; i < num && num <= arr.length; i++) {
    a.push(arr[i]);
  }

  // console.log('ALL SORTED ARR');
  // console.log(arr);
  // console.log('TO SHOW ARRAY');
  // console.log(a);

  return num > arr.length ? (
    <Col>
      <p
        style={{
          fontSize: '1rem',
          textAlign: 'center',
          fontWeight: 'bolder',
          color: 'red',
        }}
      >
        Please enter smaller number as the max number of words in this file is{' '}
        {arr.length}
      </p>
    </Col>
  ) : (
    <Col>
      <p
        style={{ fontWeight: 'bolder', textAlign: 'center', fontSize: '1rem' }}
      >
        The top {num} most frequently occurring words are as follows:
      </p>
      <Table columns={columns} dataSource={a} pagination={false} />
    </Col>
  );
};

export default TableComponent;
