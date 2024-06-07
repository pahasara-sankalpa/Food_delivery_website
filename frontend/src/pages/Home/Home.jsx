import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import Navbar from '../../components/Navbar/Navbar'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import Footer from '../../components/Footer/Footer'

const Home = () => {
   const[category,setCategory] = useState("All");
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <ExploreMenu category={category} setCategory={setCategory}/> 
      <FoodDisplay category={category} />
      <Footer />
    </div>
  )
}

export default Home
