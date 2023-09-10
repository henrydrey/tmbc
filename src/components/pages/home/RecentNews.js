import React from 'react'
import newsPh from "../../../assets/imgs/news1.jpg"

const RecentNews = () => {
  return (
    <div className=' bg-slate-200 py-10'>
        <h2 className='uppercase text-3xl font-bold text-sky-800 mx-5 my-5 tracking-widest'>
        Recent News
      </h2>
      <section className='flex my-4 gap-y-8 gap-x-4'>
        <article className='bg-sky-300 flex-1 m-3 p-3 px-5 rounded-3xl border-3 border-white'>
          <h2 className=' font-semibold text-base py-3 mb-5'>Some news</h2>
          <img src={newsPh} alt='news' className=' h-40 w-48 rounded-xl ml-11 mr-4 mb-5'/>
          <p className=' mb-5'>
            Lorem ipsum dolor sit amet consectetur adipiscing, elit ultrices sapien montes senectus dis, congue feugiat imperdiet donec nullam. Aenean mattis porta mollis ligula etiam quam risus sodales cubilia, sed dis nibh faucibus velit lacinia semper.
          </p>
          <a href="menu.html" className=' mt-5 hover:underline font-semibold'>Read more</a>
        </article>
        <article className='flex-1 bg-sky-300 m-3 p-3 rounded-3xl border-3 border-white px-5'>
          <h2 className=' font-semibold text-base py-3 mb-5'>Some news</h2>
          <img src={newsPh} alt='news' className=' h-40 w-48 rounded-xl ml-11 mr-4 mb-5'/>
          <p className=' mb-5'>
            Lorem ipsum dolor sit amet consectetur adipiscing, elit ultrices sapien montes senectus dis, congue feugiat imperdiet donec nullam. Aenean mattis porta mollis ligula etiam quam risus sodales cubilia, sed dis nibh faucibus velit lacinia semper.
          </p>
          <a href="menu.html" className=' mt-5 hover:underline font-semibold'>Read more</a>
        </article>
        <article className='flex-1 bg-sky-300 m-3 p-3 rounded-3xl border-3 border-white px-5'>
          <h2 className=' font-semibold text-base py-3 mb-5'>Some news</h2>
          <img src={newsPh} alt='news' className=' h-40 w-48 rounded-xl ml-11 mr-4 mb-5'/>
          <p className=' mb-5'>
            Lorem ipsum dolor sit amet consectetur adipiscing, elit ultrices sapien montes senectus dis, congue feugiat imperdiet donec nullam. Aenean mattis porta mollis ligula etiam quam risus sodales cubilia, sed dis nibh faucibus velit lacinia semper.
          </p>
          <a href="menu.html" className=' mt-5 hover:underline font-semibold'>Read more</a>
        </article>
        <article className='flex-1 bg-sky-300 m-3 p-3 rounded-3xl border-3 border-white px-5'>
          <h2 className=' font-semibold text-base py-3 mb-5'>Some news</h2>
          <img src={newsPh} alt='news' className=' h-40 w-48 rounded-xl ml-11 mr-4 mb-5'/>
          <p className=' mb-5'>
            Lorem ipsum dolor sit amet consectetur adipiscing, elit ultrices sapien montes senectus dis, congue feugiat imperdiet donec nullam. Aenean mattis porta mollis ligula etiam quam risus sodales cubilia, sed dis nibh faucibus velit lacinia semper.
          </p>
          <a href="menu.html" className=' mt-5 hover:underline font-semibold'>Read more</a>
        </article>
      </section>
    </div>
  )
}

export default RecentNews