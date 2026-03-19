import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Pagination from './components/Pagination'
import Otp from './components/Otp'
import NewOtp from './components/NewOtp'
import Dashboard from './components/Dashboard'
import Blog from "./pages/Blog";
import Film from "./pages/Film";
import Story from "./pages/Story";
import Apple from './components/Apple';
import Simple from './components/Simple';
import Tab from './components/Tab';
import CheckboxExample from './components/CheckboxExample';
import Transactions from './components/Transactions';
import Macbook from "./products/Macbook";
import Ipad from "./products/IPAD";
import Mobile from "./products/Mobile";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pagination" element={<Pagination />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/new-otp" element={<NewOtp />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="film" element={<Film />} />
          <Route path="blog" element={<Blog />} />
          <Route path="story" element={<Story />} />
        </Route>
        <Route path="/simple" element={<Simple />} />
        <Route path="/tab" element={<Tab />} />
        <Route path="/checkbox" element={<CheckboxExample />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/apple" element={<Apple/>}>
        <Route path="macbook" element={<Macbook/>}/>
        <Route path="ipad" element={<Ipad/>} />
        <Route
        path="mobile" element={<Mobile/>}
        />
        <Route/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
