import React from 'react'

const Featured = () => {
  return (
    <div className=' bg-slate-200 py-10'>
        <div className='mx-5 my-16 border-2 border-cyan-400 rounded-2xl'>
        <h2 className='uppercase text-3xl font-bold text-sky-800 my-5 ml-10 tracking-widest'>
          Featured
        </h2>
        <section className=' mx-10'>
          <article className='bg-transparent'>
            <h3 className=' uppercase font-semibold text-xl text-slate-500 tracking-wide my-10'>This Week's Sermon</h3>

            <div className=" justify-items-center mx-96 content-center items-center justify-center">
              <video src='' width="320" height="240" controls>
                <source src="https://www.youtube.com/watch?v=y0sF5xhGreA" type="video/mp4"/>
                <source src="movie.ogg" type="video/ogg"/>
                Your browser does not support the video tag.
              </video>
            </div>

            <p className=' py-5 px-9'>
              Lorem ipsum dolor sit amet consectetur adipiscing, elit ultrices sapien montes senectus dis, congue feugiat imperdiet donec nullam. Aenean mattis porta mollis ligula etiam quam risus sodales cubilia, sed dis nibh faucibus velit lacinia semper.
            </p>
            <button type="button" className=' border-3 border-white bg-red-900 text-white py-3 px-5 my-5 ml-5 rounded-full hover:bg-red-950'>
              Watch More On YouTube
            </button>

          </article>
        </section>
      </div>
    </div>
  )
}

export default Featured