import React, { FC } from 'react';
import { Layout, Menu, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../routes';

const Navbar: FC = () => {
  const navigate = useNavigate();
  const auth = true;

  return (
    <Layout.Header>
      <Row justify="end">
        <Menu theme="dark" mode="horizontal" selectable={false}>
          <div style={{ color: 'white', marginRight: 10 }}>Nick Levshin</div>
          {auth ? (
            <Menu.Item onClick={() => navigate(RouteNames.EVENT)} key={1}>
              Log Out
            </Menu.Item>
          ) : (
            <Menu.Item onClick={() => navigate(RouteNames.LOGIN)} key={2}>
              Log In
            </Menu.Item>
          )}
        </Menu>
      </Row>
    </Layout.Header>
  );
};

export default Navbar;
