import LoginForm from './components/LoginForm'
import styled from 'styled-components'
import logo from '@/assets/react.svg'

const LoginContainer = styled.div`
  width: 430px;
  height: 700px;
  padding: 60px 35px 35px 35px;
  border-radius: 40px;
  background-color: #ecf0f3;
  box-shadow: 13px 13px 20px #cbced1, -13px -13px 20px #fff;
`

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  top: 100px;
`
const LogoImg = styled.img`
  width: 100px;
  heigth: 100px;
  margin: 0 auto;
  box-shadow: 0px 0px 2px #5f5f5f;
  background-color: white;
`
const LogoText = styled.span`
  text-align: center;
  font-size: 28px;
  padding-top: 24px;
  letter-spacing: 0.5px;
`
const Login = () => {
  return (
    <LoginContainer>
      <LogoContainer>
        <LogoImg src={logo} />
        <LogoText>REACT-ADMIN</LogoText>
      </LogoContainer>
      <LoginForm></LoginForm>
    </LoginContainer>
  )
}

export default Login
