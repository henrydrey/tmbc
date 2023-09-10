import React from 'react'
import Footer from '../../bits/footer/Footer'
// import "./Ministries.css"

const Services = () => {
  return (
    <div className=' bg-slate-200 bg-opacity-10 h-screen m-auto pt-32 pb-4 px-0 w-full bg-blend-darken bg-no-repeat bg-cover flex-1 background'>
        <div className='py-20 mt-20 mb-10 h-2/4'>
            <h1 className=' text-center text-7xl uppercase font-sans font-thin tracking-widest text-blue-500'>
                Services
            </h1>
        </div>
        
        <div className='bg-neutral-600 text-slate-300 pb-6 h-auto'>
            <div className=' w-full m-auto container'>
            {/* grid grid-cols-2 */}
                <div className='flex flex-col justify-center items-center p-12 col-2'>
                    <h2 className=' text-5xl mx-96'>
                        Find out our meeting days and time, every week, so you can join us in worship. We can't wait to welcome you!
                    </h2>

                    <div className='grid grid-cols-1'>
                        <div className='flex flex-col justify-center items-center p-5 col-2'>
                            <h1 className=' py-3 uppercase pt-20 text-3xl tracking-widest'>
                                Meeting days:
                            </h1>
                            <p className=' tracking-wider text-xl pt-5'>Sunday Morning Service</p>
                            <p className=' tracking-wide text-lg pb-3'>Saturday, at 10:30AM - 12:30PM</p>

                            <p className=' tracking-wider text-xl pt-5'>Sunday Evening Service</p>
                            <p className=' tracking-wide text-lg pb-3'>Saturday, at 6:00PM - 7:30PM</p>

                            <p className=' tracking-wider text-xl pt-5'>Wednesday Prayer Meeting</p>
                            <p className=' tracking-wide text-lg pb-3'>Saturday, at 7:00PM - 8:30PM</p>

                            <p className=' tracking-wider text-xl pt-5'>Thursday Bible Study</p>
                            <p className=' tracking-wide text-lg pb-3'>Saturday, at 7:00PM - 8:30PM</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Services