import React, { FC } from 'react';
import { Layout, Menu, Row } from 'antd';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

const Navbar: FC = () => {
  const { isAuth, user } = useTypedSelector((state) => state.auth);
  const { logout } = useActions();

  const privateItems = [
    { label: 'Log Out', key: '1', onClick: () => logout() },
  ];

  const publicItems = [{ label: 'Log In', key: '2' }];

  return (
    <Layout.Header>
      <Row justify="end">
        <div style={{ color: '#fff', marginRight: 15 }}>{user.username}</div>
        <Menu
          theme="dark"
          mode="horizontal"
          selectable={false}
          items={isAuth ? privateItems : publicItems}
        ></Menu>
      </Row>
    </Layout.Header>
  );
};

export default Navbar;
