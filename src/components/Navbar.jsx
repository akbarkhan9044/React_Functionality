import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '20px', padding: '10px 20px' }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/pagination">Pagination</Link></li>
        <li><Link to="/otp">OTP</Link></li>
        <li><Link to="/new-otp">New OTP</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/apple">Apple</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
