import '../App.css';
import React, { useState } from 'react';
import {
  Form,
  Button,
  Select,
  DatePicker,
  Card
} from 'antd';
import {
    Upload
  } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Option } = Select;

  

  const normFile = (e) => {
    console.log('Upload event:', e);
  
    if (Array.isArray(e)) {
      return e;
    }
  
    return e && e.fileList;
  };

  const config = {
    rules: [
      {
        type: 'object',
        required: true,
        message: 'Please select Date!',
      },
    ],
  };
  

export const Details = () => {


const [componentSize, setComponentSize] = useState('default');

const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
    return (
        
      <Card style={{ width: "100%" }}>
           <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
      <Form.Item
        name="store"
        label="Store"
        rules={[{ required: true, message: 'Please select the store!' }]}
        >
        <Select placeholder="Dummy1">
          <Option value="Dummy1">Dummy 1</Option>
          <Option value="Dummy2">Dummy 2</Option>
          <Option value="Dummy3">Dummy 3</Option>
          <Option value="Dummy4">Dummy 4</Option>
          <Option value="Dummy5">Dummy 5</Option>
        </Select>
      </Form.Item>

        
      <Form.Item
        name="job"
        label="Job"
        rules={[{ required: true, message: 'Please select Job!' }]}
      >
        <Select placeholder="Dummy1">
          <Option value="Dummy1">Dummy 1</Option>
          <Option value="Dummy2">Dummy 2</Option>
          <Option value="Dummy3">Dummy 3</Option>
          <Option value="Dummy4">Dummy 4</Option>
          <Option value="Dummy5">Dummy 5</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="employee"
        label="Employee"
        rules={[{ required: true, message: 'Select Employee details!' }]}
      >
        <Select placeholder="Dummy1">
          <Option value="dummy1">Dummy 1</Option>
          <Option value="dummy2">Dummy</Option>
          <Option value="dummy3">Dummy 3</Option>
          <Option value="dummy4">Dummy 4</Option>
          <Option value="dummy5">Dummy 5</Option>
        </Select>
      </Form.Item>
       
      <Form.Item
        name="eventType"
        label="Event Type"
        rules={[{ required: true, message: 'Select Event type!' }]}
      >
        <Select placeholder="Dummy1">
          <Option value="Dummy1">Dummy 1</Option>
          <Option value="Dummy2">Dummy 2</Option>
          <Option value="Dummy3">Dummy 3</Option>
          <Option value="Dummy4">Dummy 4</Option>
          <Option value="Dummy5">Dummy 5</Option>
        </Select>
      </Form.Item>

      <Form.Item name="sdate-picker" label="Start Date" {...config}>
        <DatePicker />
      </Form.Item>

        <Form.Item name="edate-picker" label="End Date" {...config}>
        <DatePicker />
      </Form.Item>

        <div className="uploadBtn">
        <Form.Item label="File (optional)"><b>Event Note</b> </Form.Item>
        <Form.Item
        name="upload"
        valuePropName="fileList"
        getValueFromEvent={normFile}>
        <Upload name="logo" action="/upload.do" listType="picture">
          <Button className="upload" icon={<UploadOutlined />}>Upload Event Note</Button>
        </Upload>
      </Form.Item>
      </div>   

        <div className="buttons">
        <Form.Item>
          <Button htmlType="submit" shape="round">
          Save
        </Button>  <Button type="primary" shape="round">
          Back
        </Button>
        </Form.Item>
        </div>
      </Form>
      
      </Card>
    )
}
