import '@/App.css'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
function Signin() {
  return (
    <div className="Signin">
      <p>회원가입.</p>
      <Link to="/home">
        <Button>클릭 home 으로 이동</Button>
      </Link>
      <Link to="/404">
        <Button>클릭 404 페이지로 이동</Button>
      </Link>
    </div>
  )
}

export default Signin
