import { Form, Input, Button } from 'antd';
import React, { FC, useState } from 'react';
import { rules } from '../utils/rules';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const LoginForm: FC = () => {
  const { login } = useActions();
  const { isLoading, error } = useTypedSelector((state) => state.auth);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submit = () => {
    login(username, password);
  };

  return (
    <Form onFinish={submit}>
      {error && <div style={{ color: 'red' }}>{error}</div>}

      <Form.Item
        label="Username"
        name="username"
        rules={[() => rules.required('Please input your username!')]}
      >
        <Input value={username} onChange={(e) => setUsername(e.target.value)} />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[() => rules.required('Please input your password!')]}
      >
        <Input.Password
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Log In
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
