import React from 'react'
import "./Bio.css"
import Footer from '../../bits/footer/Footer'

const Bio = () => {
  return (
    <div className=' bg-slate-200 bg-opacity-30 h-screen m-auto pt-32 pb-4 pl-0 px-0 w-screen bg-blend-darken bg-no-repeat bg-cover bio'>
        <div className='py-20 mt-20 mb-10 h-2/4'>
            <h1 className=' text-center text-7xl uppercase font-sans font-thin tracking-widest text-blue-500'>About Us</h1>
        </div>
        <div className='bg-neutral-600 text-slate-300 py-16 w-full'>
            <div className=' w-full m-auto grid grid-cols-2 container'>
                <img src='#' alt='bio' />

            <div className='flex flex-col justify-center items-center p-12 col-2 w-full'>
                {/* <h2 className=' text-5xl'>Bio</h2> */}
                <span className='line'></span>
                <p className=' m-8 text-xl'>
                Truth-Missionary Baptist Church is an independent, fundamental Baptist Church, who uphold the Bible as the sole authority for Faith and Practice. Pastor Ferguson Kcofie and the Truth-Missionary Baptist Church family want to welcome you and express Christ's love to you with genuine, heartfelt warmth. We are eager for you to join us and experience the marvellous ways God is working in this church family.
                </p>
                {/* <button className=' mt-4'>Read More</button> */}
            </div>
        </div>
        <div className=' content-center text-center w-full'>
            <h1 className=' text-xl'>
                If you've been thinking, praying, searching and hoping for a place to belong, we say to you,
            </h1>
            
            <h1 className='text-xl'>
                WELCOME HOME.
            </h1>
        </div>
    </div>
        <Footer />
    </div>
  )
}

export default Bio