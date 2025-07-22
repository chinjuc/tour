import React from 'react'
import Home from '../src/Components/Home.jsx'
// import Login from '../src/Components/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Register from '../src/Components/Register'
import Package from '../src/Components/Package'
import PackageList from '../src/Components/PackageList'
import Cheking from '../src/Components/Cheking'
import OtherList from '../src/Components/OtherList.jsx'
import Other from '../src/Components/Other.jsx'
import About from '../src/Components/About.jsx'
import Contact from '../src/Components/Contact.jsx'
import List from '../src/Components/List.jsx'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Login />} /> */}
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/register" element={<Register />} /> */}
          <Route path="/" element={<Home />} />

          <Route path="/package" element={<Package />} />
          <Route path="/:placelist" element={<PackageList />} />

          <Route path="/specialpackages" element={<Other />} />
          <Route path="/offer/:name" element={<OtherList />} />

          <Route path="/checking" element={<Cheking />} />
          <Route path="/checking/:id" element={<Cheking />} />
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/list' element={<List />}></Route>
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </div>
  )
}

export default App
