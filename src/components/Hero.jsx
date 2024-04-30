import React from 'react'

const Hero = () => {
  return (
    <div>
        <section class=" body-font">
  <div class="container mx-auto flex px-10 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1  class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Grow Your Business  with
        <br class="hidden lg:inline-block "/> <span className='text-[#498EBE]'>Syed Anas</span> 
      </h1>
      <p class="mb-8 leading-relaxed text-2xl">We are team of talented developers making Websites</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Get Started</button>
       
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="https://img.freepik.com/free-vector/successful-internet-marketing-data-applications-e-services-multimedia-social-network-likes-followers-attraction-colorful-icon_335657-2702.jpg?w=740&t=st=1714482007~exp=1714482607~hmac=a274a6e11f9e56b58511039e74b3406483159fffd7d066d2b03fdf6b4a32f2df"/>
    </div>
  </div>
</section>
    </div>
  )
}

export default Hero