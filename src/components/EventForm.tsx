import { Button, DatePicker, Form, Input, Row, Select } from 'antd';
import React, { FC } from 'react';
import { rules } from '../utils/rules';

const EventForm: FC = () => {
  return (
    <Form>
      <Form.Item
        label="Event desciprion"
        name="description"
        rules={[() => rules.required('Please input your description!')]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Event date"
        name="date"
        rules={[() => rules.required('Please select date!')]}
      >
        <DatePicker />
      </Form.Item>

      <Form.Item
        label="Event guest"
        name="guest"
        rules={[() => rules.required('Please select guest!')]}
      >
        <Select></Select>
      </Form.Item>

      <Row justify="end">
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Add
          </Button>
        </Form.Item>
      </Row>
    </Form>
  );
};

export default EventForm;
