import React from 'react'
import NavBar from './shared/Navbar'
import HeroSection from './HeroSection'
import CategoryCarousel from './CategoryCarousel'
import LatestJobs from './latestJobs'
import Footer from './Footer'
import useGetAllJobs from '@/hooks/useGetAllJobs'

const Home = () => {
  useGetAllJobs()
  return (
    <div>
        <NavBar/>
        <HeroSection/>
        <CategoryCarousel/>
        <Footer/>
    </div>
  )
}

export default Home