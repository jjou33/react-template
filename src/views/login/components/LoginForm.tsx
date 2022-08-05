import { Button, Checkbox, Form, Input } from 'antd'
import axios from 'axios'
import styled from 'styled-components'
const FormWrapper = styled(Form)`
  padding: 2rem 3rem 0 0;
`

const LoginForm = (props: any) => {
  const onFinish = async (values: any) => {
    try {
      const { data } = await axios.get('/todos')
      console.log(data)
    } catch (error: any) {
      throw new Error(error)
    }
  }

  const onFinishFailed = (errorInfo: any) => {}

  return (
    <FormWrapper
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
    </FormWrapper>
  )
}

export default LoginForm
