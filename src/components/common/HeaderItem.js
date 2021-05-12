import { useState } from 'react';
import { Menu, Layout } from 'antd';
import {
  HomeOutlined,
  InfoCircleOutlined,
  GithubOutlined,
} from '@ant-design/icons';
import styles from './HeaderItem.module.css';

const { Header } = Layout;

/**
 * @author
 * @function HeaderItem
 **/

const { SubMenu } = Menu;

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
        <Menu.Item key='mail' icon={<HomeOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key='app' icon={<InfoCircleOutlined />}>
          About
        </Menu.Item>
        <Menu.Item key='alipay' icon={<GithubOutlined />}>
          <a href='' target='_blank' rel='noopener noreferrer'>
            Github
          </a>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default HeaderItem;
