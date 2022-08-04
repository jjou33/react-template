import '@/App.css'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div className="Home">
      <p>홈.</p>
      <Link to="/login">
        <Button>클릭 signin 으로 이동</Button>
      </Link>
      <Link to="/404">
        <Button>클릭 404 페이지로 이동</Button>
      </Link>
    </div>
  )
}

export default Home
