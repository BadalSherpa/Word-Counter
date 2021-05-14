import { Col, Tooltip } from 'antd';
import Footer from '../layout/Footer';
import React from 'react';
import Header from '../layout/Header';

/**
 * @author
 * @function About
 **/

const About = (props) => {
  return (
    <React.Fragment>
      <Header />
      <Col style={{ margin: '50px', fontSize: '1rem' }}>
        <p style={{ fontWeight: 'bolder' }}>
          Hello, this online word counter web application which counts the
          freuency of occurrence of words in a particular sentence or
          paragraphs. This web application is build entirely using React Js and
          Ant design as the UI framework.
        </p>
        <p style={{ fontWeight: 'bolder' }}>
          Currently it is fetching the contents from{' '}
          <Tooltip title='Click to see the sentence source'>
            <a href='https://raw.githubusercontent.com/invictustech/test/main/README.md'>
              here
            </a>
          </Tooltip>{' '}
          and displaying the top N frequently occuring words in the fetched
          sentence or paragraphs.
        </p>
      </Col>
      <Footer />
    </React.Fragment>
  );
};

export default About;
