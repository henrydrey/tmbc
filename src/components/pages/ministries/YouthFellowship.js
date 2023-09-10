import React from 'react'
import random1 from "../../../assets/imgs/youth1.jpg"
import random2 from "../../../assets/imgs/youth2.jpg"
import random3 from "../../../assets/imgs/youth3.jpg"
import random4 from "../../../assets/imgs/youth4.jpg"
import Footer from '../../bits/footer/Footer'

const YouthFellowship = () => {
  return (
    <div className=' bg-neutral-600 h-screen m-auto pt-28 px-0 youth'>
        
        <div className='bg-neutral-600 text-slate-300 pb-6 h-auto'>
            <div className=' w-full m-auto container'>
            {/* grid grid-cols-2 */}
                <div className='flex flex-col p-12'>
                    <h2 className=' text-5xl mx-40 text-left pb-10'>
                        Youth Fellowship
                    </h2>

                    <div className='grid grid-cols-2'>
                        <div className='flex flex-col text-left mx-40 p-5 text-xl'>
                            <p>
                                Youth Fellowship is a teen's ministry for children aged 13 years - 19 years
                            </p>
                            <span className=' py-3 uppercase pt-20'>Meeting days:</span>
                            <span>Friday, at 7:00PM - 8:30PM</span>
                        </div>
                        <div className='flex flex-row justify-center items-center p-5 relative overflow-visible h-auto w-full'>
                            <div className='flex flex-row'>
                                <div className=' h-auto w-auto rounded'>
                                    <img src={random1} alt='awana1' className='rounded' />
                                </div>
                                {/* <div className=' h-auto w-2/5 rotate-6 flex rounded'>
                                    <img src={random2} alt='awana2' className='rounded'/>
                                </div> */}
                                
                            </div>
                            <div className='flex flex-row mr-10'>
                                <div className=' h-auto w-4/5 rounded'>
                                    <img src={random2} alt='awana1' className='rounded' />
                                </div>
                                <div className=' h-auto w-4/5 flex rounded'>
                                    <img src={random3} alt='awana2' className='rounded'/>
                                </div>
                                
                            </div>
                        </div>
                        <div className='flex flex-row justify-center items-center p-5 relative left-3/4'>
                            <div className='flex flex-row'>
                                <div className=' h-auto w-4/5 rounded' >
                                    <img src={random4} alt='awana1' className='rounded' />
                                </div>
                                <div className=' h-auto w-4/5 rotate-2 flex rounded'>
                                    <img src={random1} alt='awana2' className='rounded'/>
                                </div>
                                
                            </div>
                            <div className='flex flex-row'>
                                <div className=' h-auto w-4/5 rounded'>
                                    <img src={random2} alt='awana1' className='rounded' />
                                </div>
                                <div className=' h-auto w-3/4 flex rounded'>
                                    <img src={random3} alt='awana2' className='rounded'/>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default YouthFellowship