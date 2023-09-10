import React from 'react'
import random from "../../../assets/imgs/children.jpg"
import random1 from "../../../assets/imgs/children3.jpg"
import random2 from "../../../assets/imgs/children2.jpg"
import Footer from '../../bits/footer/Footer'

const SundaySchool = () => {
  return (
    <div className=' bg-neutral-600 h-screen m-auto pt-28 pb-4 px-0 sunday'>
        
        <div className='bg-neutral-600 text-slate-300 pb-6 h-auto'>
            <div className=' w-full m-auto container'>
            {/* grid grid-cols-2 */}
                <div className='flex flex-col p-12'>
                    <h2 className=' text-5xl mx-40 text-left pb-10'>
                        Sunday School
                    </h2>

                    <div className='grid grid-cols-2'>
                        <div className='flex flex-col text-left mx-40 p-5 text-xl'>
                            <p>
                                Sunday School is the jnfnfbfumdfvrdfvfdcvdf
                            </p>
                        </div>
                        <div className='flex flex-row justify-center items-center p-5 relative overflow-visible h-auto w-full'>
                            <div className='flex flex-row'>
                                <div className=' h-auto w-auto rounded'>
                                    <img src={random} alt='awana1' className='rounded' />
                                </div>
                                {/* <div className=' h-auto w-4/5 flex rounded'>
                                    <img src={random2} alt='awana2' className='rounded'/>
                                </div> */}
                                
                            </div>
                            <div className='flex flex-row mr-10'>
                                <div className=' h-auto w-4/5 rounded'>
                                    <img src={random1} alt='awana1' className='rounded' />
                                </div>
                                <div className=' h-auto w-4/5 flex rounded'>
                                    <img src={random2} alt='awana2' className='rounded'/>
                                </div>
                                
                            </div>
                        </div>
                        <div className='flex flex-row justify-center items-center p-5 relative left-3/4'>
                            <div className='flex flex-row'>
                                <div className=' h-auto w-4/5 rounded' >
                                    <img src={random} alt='awana1' className='rounded' />
                                </div>
                                <div className=' h-auto w-4/5 flex rounded'>
                                    <img src={random2} alt='awana2' className='rounded'/>
                                </div>
                                
                            </div>
                            <div className='flex flex-row'>
                                <div className=' h-auto w-4/5 rounded'>
                                    <img src={random1} alt='awana1' className='rounded' />
                                </div>
                                <div className=' h-auto w-3/4 flex rounded'>
                                    <img src={random2} alt='awana2' className='rounded'/>
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

export default SundaySchool