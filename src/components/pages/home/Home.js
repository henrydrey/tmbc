import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"
import Footer from '../../bits/footer/Footer'
import RecentNews from './RecentNews'
import Featured from './Featured'
import EventSermons from './EventSermon'

const Home = () => {
  return (
    <div className='bg-blend-darken bg-no-repeat bg-cover flex-1 h-screen w-3/4 home'>
        <div className=' pt-16 text-center content-center mx-24'>
            <h1 className='pt-20 pb-7 text-white mt-32 uppercase font-medium tracking-widest text-5xl items-stretch'>
                Welcome
            </h1>
            <h1 className='pt-2 pb-10 px-3 text-white text-7xl font-semibold tracking-widest w-full'>
                Truth Missionary Baptist Church
            </h1>
            <h2 className='uppercase py-3 px-20 mx-52 text-white tracking-wider text-xl'>Welcome home to Truth Missionary Bible Church! We hope you have a great time while we learn the word of the Lord and attain salvation together</h2>
            <h2 className='p-3 tracking-widest text-white pb-3 pointer-events-none space-x-4 font-medium text-2xl'>
                ... But Truth And Grace. (John 1: 17b)
            </h2>
            <Link to="/">
                <button className='uppercase my-5 py-3 text-white tracking-widest px-16 border-2 border-slate-400 bg-blue-700 rounded-tr-lg rounded-bl-lg hover:bg-blue-900 hover:border-white'>
                    Thinking About Visiting?
                </button>
            </Link>
            
        </div>
        <div className=' mt-20'>
            <RecentNews />
        </div>
        <Featured />
        <EventSermons />
        <Footer />
    </div>
  )
}

export default Home