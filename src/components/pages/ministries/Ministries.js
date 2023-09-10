import React from 'react'
import { Link } from 'react-router-dom'
import "./Ministries.css"
import Footer from '../../bits/footer/Footer'

const Ministries = () => {
  return (
    <div className=' bg-slate-200 bg-opacity-10 h-screen m-auto pt-32 pb-4 px-0 w-full bg-blend-darken bg-no-repeat bg-cover flex-1 background'>
        <div className='py-20 mt-20 mb-10 h-2/4'>
            <h1 className=' text-center text-7xl uppercase font-sans font-thin tracking-widest text-blue-500'>Ministries</h1>
        </div>
        
        <div className='bg-neutral-600 text-slate-300 pb-6 h-auto'>
            <div className=' w-full m-auto container'>
            {/* grid grid-cols-2 */}
                <div className='flex flex-col justify-center items-center p-12 col-2'>
                    <h2 className=' text-5xl mx-96'>
                        Find which of our programs works best for you and your loved ones!
                    </h2>

                    <div className='grid grid-cols-2'>
                        <div className='flex flex-col justify-center items-center p-12 col-2'>
                            <Link to='/AWANA' className=' px-10 py-3 bg-white my-5 w-full border-2 border-blue-700 text-blue-700 tracking-wider hover:bg-blue-700 hover:text-white hover:border-black rounded-tr-lg rounded-bl-lg'>
                                <button>
                                    AWANA
                                </button>
                            </Link>
                            <Link to='/sunday-school' className=' px-10 py-3 bg-white my-5 min-w-full border-2 border-blue-700 text-blue-700 tracking-wider hover:bg-blue-700 hover:text-white hover:border-black rounded-tr-lg rounded-bl-lg'>
                                <button>
                                    Sunday School
                                </button>
                            </Link>
                            <Link to='/ladies-fellowship' className=' px-10 py-3 bg-white my-5 w-full border-2 border-blue-700 text-blue-700 tracking-wider hover:bg-blue-700 hover:text-white hover:border-black rounded-tr-lg rounded-bl-lg'>
                                <button>
                                    Ladies Fellowship
                                </button>
                            </Link>
                            
                        </div>
                        <div className='flex flex-col justify-center items-center p-12 col-2'>
                            <Link to='/youth-fellowship' className=' px-10 py-3 bg-white my-5 w-full border-2 border-blue-700 text-blue-700 tracking-wider hover:bg-blue-700 hover:text-white hover:border-black rounded-tr-lg rounded-bl-lg'>
                                <button>
                                    Youth Fellowship
                                </button>
                            </Link>
                            <Link to='/choir' className=' px-10 py-3 bg-white my-5 w-full border-2 border-blue-700 text-blue-700 tracking-wider hover:bg-blue-700 hover:text-white hover:border-black rounded-tr-lg rounded-bl-lg'>
                                <button>
                                    Choir
                                </button>
                            </Link>
                            
                        </div>
                    </div>
                    {/* <span className='line'></span>
                    <p className=' m-8'>
                        Truth-Missionary Baptist Church is an independent, fundamental Baptist Church, who uphold the Bible as the sole authority for Faith and Practice. Pastor Ferguson Kcofie and the Truth-Missionary Baptist Church family want to welcome you and express Christ's love to you with genuine, heartfelt warmth. We are eager for you to join us and experience the marvellous ways God is working in this church family.
                    </p>
                    <button className=' mt-4'>Read More</button> */}
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Ministries