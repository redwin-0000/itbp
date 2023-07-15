import React from 'react'
import Bhartkveer from "../img/bharatkeveer.jpg"
const Footer = () => {
  return (
    <footer className="text-white bg-[#0f284a] body-font">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900" href='logo'>
        <span className="ml-3 text-xl text-white">Visitors</span>
      </a>
      <p className="mt-2 text-sm text-gray-300">7765982 , Page last updated on: 14/7/2023</p>
      <p className='text-sm text-gray-300'>Working hours at Headquarters 9:30 A.M. To 6:00 P.M.</p>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-bold text-gray-100 tracking-widest text-lg mb-3">Terms</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-300 hover:underline underline-offset-2" href='f'>Terms & Policy</a>
          </li>
          <li>
            <a className="text-gray-300 hover:underline underline-offset-2 " href='s'>Privacy Policy</a>
          </li>
          <li>
            <a className="text-gray-300 hover:underline underline-offset-2" href='t'>Copyright Policy</a>
          </li>
          <li>
            <a className="text-gray-300 hover:underline underline-offset-2" href='f'>Accessibility Statement</a>
          </li>
          <li>
            <a className="text-gray-300 hover:underline underline-offset-2" href='f'>Help</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4 ">
        <h2 class="title-font font-bold text-gray-100 tracking-widest text-md mb-3 px-14 ">Organisation</h2>
       <div className='flex flex-col'>
       <nav class="list-none mb-3 flex space-x-5">
          <li>
            <a class="text-gray-300 hover:underline underline-offset-2" href='f'>MHA </a>
          </li>
          <li>
            <a class="text-gray-300 hover:underline underline-offset-2" href='s'>BSF </a>
          </li>
          <li>
            <a class="text-gray-300 hover:underline underline-offset-2" href='t'>CISF</a>
          </li>
          <li>
            <a class="text-gray-300 hover:underline underline-offset-2" href='f'>CRPF</a>
          </li>
          <li>
            <a class="text-gray-300 hover:underline underline-offset-2 " href='f'>SSB</a>
          </li>
        </nav>
        <nav class="list-none flex space-x-6">
          <li>
            <a class="text-gray-300 hover:underline underline-offset-2" href='f'>AR</a>
          </li>
          <li>
            <a class="text-gray-300 hover:underline underline-offset-2" href='s'>BPR&D</a>
          </li>
          <li>
            <a class="text-gray-300 hover:underline underline-offset-2" href='t'>NCRB</a>
          </li>
          <li>
            <a class="text-gray-300 hover:underline underline-offset-2" href='f'>NSG</a>
          </li>
        </nav>
       </div>
      </div> 
      {/*  */}
      <div>
        <img src={Bhartkveer} alt='bhartkveer' className='w-[30vw] h-[20vh] '/>
    </div> 
   {/*  */}
    </div>
  </div>
  <div class="bg-gray-100">
    <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p class="text-gray-700 text-sm text-center sm:text-left">© Content Owned by Indo Tibetan Border Police , Government of India.      </p>
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
      </span>
    </div>
  </div>
</footer>
  )
}

export default Footer