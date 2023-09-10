import React from 'react'
import thumbnail from "../../../assets/imgs/bannerImage.jpg"

const EventSermons = () => {
  return (
    <div className=' bg-slate-200 py-5'>
        <section className=' bg-sky-300 py-10 mx-5 my-16 rounded-2xl flex gap-y-8 gap-x-4 border-2 border-white'>
        <div className=' mx-40'>
          <div className='uppercase'>
            <h2 className=' uppercase font-semibold text-2xl text-slate-500 tracking-widest my-10'>
              Upcoming Events
            </h2>
          </div>

          <div>
            <div className=' inline-flex w-auto text-lg'>
              <div className=' px-5 border-t-2 border-b-2 border-white'>
                <p className=' my-2'>Africa Mission Trip</p>
              </div>
              <div className='px-5 border-t-2 border-b-2 border-white'>
                <p className=' my-2'>March 30, 2025</p>
              </div>
              <div className='px-5 border-t-2 border-b-2 border-white'>
                <p className=' my-2'>Location</p>
              </div>
            </div>
          </div>


          <div>
            <div className=' inline-flex w-auto text-lg'>
              <div className=' px-5 border-t-2 border-b-2 border-white'>
                <p className=' my-2'>Africa Mission Trip</p>
              </div>
              <div className='px-5 border-t-2 border-b-2 border-white'>
                <p className=' my-2'>March 30, 2025</p>
              </div>
              <div className='px-5 border-t-2 border-b-2 border-white'>
                <p className=' my-2'>Location</p>
              </div>
            </div>
          </div>


          <div>
            <div className=' inline-flex w-auto text-lg'>
              <div className=' px-5 border-t-2 border-b-2 border-white'>
                <p className=' my-2'>Africa Mission Trip</p>
              </div>
              <div className='px-5 border-t-2 border-b-2 border-white'>
                <p className=' my-2'>March 30, 2025</p>
              </div>
              <div className='px-5 border-t-2 border-b-2 border-white'>
                <p className=' my-2'>Location</p>
              </div>
            </div>
          </div>


          <div>
            <div className=' inline-flex w-auto text-lg'>
              <div className=' px-5 border-t-2 border-b-2 border-white'>
                <p className=' my-2'>Africa Mission Trip</p>
              </div>
              <div className='px-5 border-t-2 border-b-2 border-white'>
                <p className=' my-2'>March 30, 2025</p>
              </div>
              <div className='px-5 border-t-2 border-b-2 border-white'>
                <p className=' my-2'>Location</p>
              </div>
            </div>
          </div>


          <div>
            <div className=' inline-flex w-auto text-lg'>
              <div className=' px-5 border-t-2 border-b-2 border-white'>
                <p className=' my-2'>Africa Mission Trip</p>
              </div>
              <div className='px-5 border-t-2 border-b-2 border-white'>
                <p className=' my-2'>March 30, 2025</p>
              </div>
              <div className='px-5 border-t-2 border-b-2 border-white'>
                <p className=' my-2'>Location</p>
              </div>
            </div>
          </div>
        </div>



        <div className=' mr-10 w-auto text-lg'>
                    <div>
                        <h2 className=' uppercase font-semibold text-2xl text-slate-500 tracking-wide my-10'>
                          LATEST SERMONS
                        </h2>
                    </div>
                    <div>
                        <div className=' inline-flex px-5 hover:bg-white hover:cursor-pointer hover:rounded-xl hover:px-5'>
                            <div className='border-t-2 border-b-2 border-white'>
                                <img src={thumbnail} alt="thumbnail" className=" h-12 w-20 my-5"/>
                            </div>
                            <div className='border-t-2 border-b-2 border-white'>
                                <p className=' m-1 ml-4 px-5'>AFRICA MISSION TRIP</p>

                                <p className=' m-1 ml-4 px-5'>Speaker</p>
                        
                                <p className=' m-1 ml-4 px-5'>March 30, 2025</p>
                            </div>
                            
                        </div>
                    </div>
                    <div>
                        <div className=' inline-flex px-5 hover:bg-white hover:cursor-pointer hover:rounded-xl hover:px-5'>
                            <div className='border-t-2 border-b-2 border-white'>
                                <img src={thumbnail} alt="thumbnail" className=" h-12 w-20 my-5" />
                            </div>
                            <div className='border-t-2 border-b-2 border-white'>
                                <p className=' m-1 ml-4 px-5'>AFRICA MISSION TRIP</p>
                                <p className=' m-1 ml-4 px-5'>Speaker</p>
                                <p className=' m-1 ml-4 px-5'>March 30, 2025</p>
                            </div>
                            
                        </div>
                    </div>
                    <div>
                        <div className=' inline-flex px-5 hover:bg-white hover:cursor-pointer hover:rounded-xl hover:px-5'>
                            <div className='border-t-2 border-b-2 border-white'>
                                <img src={thumbnail} alt="thumbnail" className=" h-12 w-20 my-5" />
                            </div>
                            <div className='border-t-2 border-b-2 border-white'>
                                <p className=' m-1 ml-4 px-5'>AFRICA MISSION TRIP</p>
                                <p className=' m-1 ml-4 px-5'>Speaker</p>
                                <p className=' m-1 ml-4 px-5'>March 30, 2025</p>
                            </div>
                            
                        </div>
                    </div>
                </div>

      </section>
    </div>
  )
}

export default EventSermons