import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"
const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the Dashboard</p>
      <Link to="/dashboard/film">Film</Link>
      <Link to="/dashboard/blog">Blog</Link>
      <Link to="/dashboard/story">Story</Link>
    <div>
      <Outlet/>
    </div>
    </div>
  )
}

export default Dashboard
