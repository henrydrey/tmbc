import React from 'react'
import "./History.css"
import Footer from '../../bits/footer/Footer'

const History = () => {
  return (
    <div className=' bg-slate-200 bg-opacity-100 h-screen m-auto pt-32 pb-4 px-0m-auto px-0 w-full bg-blend-darken bg-no-repeat bg-cover history'>
        <div className='py-20 mt-20 mb-10 h-2/4'>
            <h1 className=' text-center text-7xl uppercase font-sans font-thin tracking-widest text-blue-500'>Our History</h1>
        </div>
        <div className='bg-neutral-600 text-slate-300 py-16'>
            <div className=' w-full m-auto grid grid-cols-2 container'>
                <div className='  flex flex-col justify-center items-center p-12 col-2'>
                    {/* <h2 className=' text-5xl'>Our History</h2> */}
                    <span className='line'></span>
                    <p className=' m-8 text-xl'>
                        Truth Missionary Baptist Church (TMBC) was started by the late Rev. Johnnie Floyd Todd, an American missionary serving with the Baptist International Missions, Inc., in 1983. Since then, we have moved and grown into our beautiful auditorium in Plot no 8, 2nd Exhibition Street, Dansoman Estates - Accra, Ghana. It is here that we feed the flock, win the lost, and delight in worship and fellowship.
                    </p>
                    {/* <button className=' mt-4'>Read More</button> */}
                </div>
                <img src='#' alt='history' />
            </div>
            <div className=' content-center text-center w-full'>
            <h1 className=' mx-52 text-xl'>
                Looking back over the years here at Truth-Missionary Baptist Church, we can see God's hand leading and protecting us.  We rejoice in the great things God has done and are looking forward to many more years of TRUTH.
            </h1>
        </div>
        </div>
        <Footer />
    </div>
  )
}

export default History