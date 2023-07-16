import React from 'react'
import Itbp from "../img/ITBP_logo_download.jpg" 
const Header = () => {
  return (
    <header className="text-white  body-font bg-[#0f284a]">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href='l'>
        <img src={Itbp} alt='logo' className='w-20 h-20 rounded-lg'/>
        <div className='text-white px-4 font-light'>
            <h4><span className='hover:underline underline-offset-2'>SiteMap |</span> <span className='hover:underline underline-offset-2'>Contact | </span><span className='font-bold'>Shaurya Dradhata Karamnishtha</span></h4>
            <h1 className="md:text-4xl text-md  ">Indo Tibetan Border Police</h1>
        </div>
      </a>
      <div  className="md:ml-auto flex flex-col flex-wrap items-center text-base justify-center space-y-2">
      <nav>
        <a className='hover:underline underline-offset-2' href='f'>Skip to Main Content<span className='px-2'>|</span></a>
        <a className='hover:underline underline-offset-2' href='s'>Screen Reader Access <span className='px-2'>|</span></a>
          <select className=" w-24 h-7 ">
            <option className='bg-[#0f284a]'>English</option>
            <option className='bg-[#0f284a]'>Hindi</option>
           </select>
        </nav>
        <nav>
        <a className='hover:underline underline-offset-2' href='f'>Home <span className='px-2'>|</span></a>
        <a className='hover:underline underline-offset-2' href='s'>Who We Are <span className='px-2'>|</span></a>
        <a className='hover:underline underline-offset-2' href='f'>Our Heroes <span className='px-2'>|</span></a>
        <a className='hover:underline underline-offset-2' href='s'>Rigester Grievance</a>

      </nav>
      </div>
    </div>
  </header>
  )
}

export default Header