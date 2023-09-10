import React from 'react'

const Footer = () => {
  return (
    <div className=' font-semibold text-x opacity-95 mb-0'>
        <footer className=' block mt-8 bg-slate-100 text-sm pt-4'>
            <div class="big-box">
                <div className=' flex mt-3 justify-center text-slate-600'>
                    <div className=' w-3/12 mx-5 font-sans font-semibold'>
                        <h3 className='uppercase font-semibold py-2 text-3xl'>OUR ADDRESS</h3>
                        <p className=' my-3 mb-7 text-lg'>
                            Join us let’s worship every Sunday at 07:00 and on weekdays on Wednesdays and Fridays at 17:30 - 19:00 each day
                        </p>
                        <span className='text-lg'>
                            <p className='py-1'>Plot No. 8</p>
                            <p className='py-1'>2nd Exhibition Street</p>
                            <p className='py-1'>Dansoman Estates- Accra, Ghana</p>
                            <p className='py-1 mt-5'>(425) 853 442 552</p>
                            <p className='py-1'>info@yourchurch.com</p>
                        </span>
                    </div>
                    <div className=' w-3/12 mx-5 font-normal'>
                        <h3 className='uppercase font-semibold py-2 text-3xl'>RESOURCES</h3>
                        <div className=' px-5 border-b-2 border-white my-3 text-lg hover:cursor-pointer'>
                            <p>Hymnal</p>
                        </div>
                        <div className=' px-5 border-b-2 border-white my-3 text-lg hover:cursor-pointer'>
                            <p>Books And Articles</p>
                        </div>
                        <div className=' px-5 border-b-2 border-white my-3 text-lg hover:cursor-pointer'>
                            <p>Useful Links</p>
                        </div>
                        <div className=' px-5 border-b-2 border-white my-3 text-lg hover:cursor-pointer'>
                            <p>Calendar</p>
                        </div>
                    </div>
                    <div className=' w-3/12 mx-5 font-normal'>
                        <h3 className='uppercase font-semibold py-2 text-3xl'>CONTACT US</h3>
                        <div>
                            <form>
                                <div className=' flex flex-row gap-8 my-3 text-lg'>
                                    <label className=' mr-5'>
                                        <input type="text" placeholder="Your name..." className=' p-2 rounded-lg'/>
                                    </label>
                                    <label>
                                        <input type="email" placeholder="Your email..." className='p-2 rounded-lg'/>
                                    </label>
                                </div>
                                <div className='block text-lg'>
                                    <textarea title="message" placeholder="Your message..." maxlength="300" 
                                    minlength="4"
                                    className=' resize-y w-96 h-28 rounded-lg mt-3 ml-2 p-2 focus:border-0 mb-3'
                                    ></textarea>
                                    <div>
                                        <button className=' text-lg w-fit max-w-fit text-center p-3 text-white bg-slate-800 hover:text-black hover:bg-slate-200 hover:border-2 hover:border-black focus:border-0 ml-32 rounded-2xl px-5'>SEND MESSAGE</button>
                                    </div>
                                </div>
                            </form>
                            
                        </div>
                    </div>
                </div>
                <div className='flex mt-5'>
                    <div className=' flex-1 w-auto mt-3 mx-5'>
                        <img src="/" alt="church_logo" className=' w-16'/>
                    </div>
        
                    <div className=' text-right border-2 border-stone-600 border-b-0 border-l-0 border-r-0 text-stone-300 w-auto flex-1 mt-3 mx-3'>
                        <p>© 2023 Truth Missionary Baptist Church</p>
                    </div>
                </div>
                
            </div>
            
      </footer>
    </div>
  )
}

export default Footer