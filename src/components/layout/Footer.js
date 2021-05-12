import { Col } from 'antd';
import styles from './Footer.module.css';

/**
 * @author   BadalSherpa
 * @function Footer
 **/

const Footer = (props) => {
  return (
    <Col className={styles.footer}>
      <p className={styles.copyright}>Created by Badal Sherpa</p>
    </Col>
  );
};

export default Footer;
