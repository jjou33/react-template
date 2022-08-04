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
  flex-direction: column;
  margin-top: 5rem;
  margin-bottom: -5rem;
`
const LogoImg = styled.img`
  width: 100px;
  heigth: 100px;
  margin: 0 auto 30px;
`
const LogoText = styled.span`
  text-align: center;
  font-size: 40px;
  padding-top: 24px;
  letter-spacing: 0.5px;
  color: #475768;
  font-weight: bold;
  white-space: nowrap;
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
