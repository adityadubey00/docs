import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './allpages/Footer'
import Home from './allpages/Home'
import ProductCard from './components/card/Card'


const App = () => {
  return (
<>

<div style={{overflow:'hidden'}}>
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/product/:id" element={<ProductCard />} />

</Routes>

</div>



</>  )
}

export default App