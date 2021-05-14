import { useState } from 'react';
import { Menu, Layout } from 'antd';
import {
  HomeOutlined,
  InfoCircleOutlined,
  GithubOutlined,
} from '@ant-design/icons';
import styles from './HeaderItem.module.css';
import { Link } from 'react-router-dom';

const { Header } = Layout;

/**
 * @author
 * @function HeaderItem
 **/

const HeaderItem = () => {
  const [state, setState] = useState('mail');

  const handleClick = (e) => {
    console.log('click ', e);
    setState(e.key);
  };

  return (
    <Header style={{ backgroundColor: '#fff', justifyContent: 'right' }}>
      <div className={styles.logo}>Invictus Word Counter</div>
      <Menu onClick={handleClick} selectedKeys={state} mode='horizontal'>
        <Menu.Item key='home' icon={<HomeOutlined />}>
          <Link to='/'>Home</Link>
        </Menu.Item>
        <Menu.Item key='about' icon={<InfoCircleOutlined />}>
          <Link to='/about'>About</Link>
        </Menu.Item>
        <Menu.Item key='github' icon={<GithubOutlined />}>
          <a
            href='https://github.com/BadalSherpa/Word-Counter'
            target='_blank'
            rel='noopener noreferrer'
          >
            Github
          </a>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default HeaderItem;
