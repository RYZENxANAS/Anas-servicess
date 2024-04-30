import React from 'react'

const Nav = () => {
  return (
    <div>
        <header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
     
      <span class="ml-3 text-xl text-[#498EBE]">ANASxRYZEN</span>
    </a>
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 text-black">Home</a>
      <a class="mr-5 text-black">Services</a>
      <a class="mr-5 text-black">About</a>
      <a class="mr-5 text-black">Contact</a>
    </nav>
  
  </div>
</header>
    </div>
  )
}

export default Nav