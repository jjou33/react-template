import { AxiosCanceler } from '@/api/helper/axiosCancel'
import { Button, Checkbox, Form, Input } from 'antd'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const LoginForm = (props: any) => {
  const navigate = useNavigate
  const [userInfo, setUserInfo] = useState([])
  const [loading, setLoading] = useState(false)
  const cancel = new AxiosCanceler()
  const onFinish = (values: any) => {
    console.log(cancel.testFunction())
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed: ', errorInfo)
  }

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: false, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: false, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default LoginForm
