import React from 'react'
import pastor from "../../../assets/imgs/pastor1.jpg"
import "./Pastor.css"
import Footer from '../../bits/footer/Footer'

const Pastor = () => {
  return (
    <div className=' bg-slate-200 bg-opacity-100 h-screen m-auto pt-32 pb-4 pl-0 px-0 w-full bg-blend-darken bg-no-repeat bg-cover about'>
        <div className='py-20 mt-20 mb-10 h-2/4'>
            <h1 className=' text-center text-7xl uppercase font-sans font-thin tracking-widest text-blue-500'>Meet The Pastor</h1>
        </div>
        <div className='bg-neutral-600 text-slate-300 py-16'>
            <div className='m-auto grid grid-cols-2 content-center justify-center container'>
                <div className='flex flex-col p-6 pl-56'>
                    <img src={pastor} alt='pastor' className='rounded h-96 w-'/>
                </div>
                

            <div className='flex flex-col justify-center items-center p-12 col-2'>
                {/* <h2 className=' text-5xl'>Bio</h2> */}
                <span className='line'></span>
                <p className=' m-8 mr-40'>
                    <p className=' justify-start items-start content-start flex uppercase pb-5 text-left text-3xl'>
                        Ferguson S N Kcofie
                    </p>
                    <p className=' text-xl text-left'>
                        Pastor Ferguson S N Kcofie is the Head Pastor of TMB since April 1996.
                    </p>
                </p>
                {/* <button className=' mt-4'>Read More</button> */}
            </div>
        </div>
        <div className=' content-center text-center w-full'>
            <h1 className='text-xl'>
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

export default Pastor