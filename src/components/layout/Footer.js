import { Col, Tooltip } from 'antd';
import styles from './Footer.module.css';

/**
 * @author   BadalSherpa
 * @function Footer
 **/

const Footer = (props) => {
  var year = new Date().getFullYear();
  return (
    <Col className={styles.footer}>
      <p className={styles.copyright}>
        Created by{' '}
        <Tooltip
          title='Click to visit the developer`s linkedin profile'
          color='green'
        >
          <a href='https://www.linkedin.com/in/badal-sherpa/'>Badal Sherpa</a>{' '}
        </Tooltip>
        {year}
      </p>
    </Col>
  );
};

export default Footer;
