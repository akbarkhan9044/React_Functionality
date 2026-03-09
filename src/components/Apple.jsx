import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"
const Apple = () => {
  return (
    <div>
      <h1>Apple</h1>
      <p>Welcome to the Apple Page</p>
      <Link to="/apple/ipad">Ipad</Link>
      <Link to="/apple/macbook">Macbook</Link>
      <Link to="/apple/mobile">Mobile</Link>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default Apple
