import React from 'react'
import DG from "../img/NewDG1.jpg"

const heroSection = () => {
  return (
    <div  className="bg-gray-100 body-font min-h-screen py-[3rem]">
        <div className="container mx-auto flex  flex-wrap p-5 flex-col md:flex-row items-center ">
        <div  className=" flex flex-col flex-wrap items-center text-base justify-center space-y-2">
         <nav className='flex list-none space-x-6'>
            <li>
                <a href='h' className='text-[#f26522] font-bold'>About ITBP</a>
            </li>
            <li>
                <a href='h'  className='hover:text-[#f26522] font-bold'>About DG</a>
            </li>
            <li>
                <a href='h'  className='hover:text-[#f26522] font-bold'>Task Of the Force</a>
            </li>
            <li>
                <a href='h'  className='hover:text-[#f26522] font-bold'>Quick Link</a>
            </li>
         </nav>
         <div className='text-xl px-10 py-10'>
            <p className='text-xl'>The Indo-Tibetan Border Police (ITBP) Force was raised on 24 October, 1962. At present, the ITBP guards 3,488 km long India-China borders ranging from the Karakoram Pass in Ladakh to Jachep La in Arunachal Pradesh. Apart from this, the Force also has important roles in many internal security duties and operations against the Left Wing Extremism in the state of Chhattisgarh.</p>
        <p className='py-7'>
        Most of the ITBP’s Border Out Posts (BOPs) are located at altitudes ranging from 9,000 ft to 18,800 ft where temperatures drop to minus 45 degrees Celsius in extreme winters.
        </p>
        <p className='py-7'>
        ITBP is a specialized Armed Police Force of the Nation which trains its personnel in various disciplines including mountaineering and skiing apart from intensive tactical training, thereby creating a distinctive image of the Force.
        </p>
        <p className='py-7'>
        ITBP also conducts relief and rescue operations as 'First Responders' for natural calamities in the Himalayan region. The Force has responded in hundreds of search, rescue & relief operations over the years to provide succour to thousands of citizens in distress due to various calamities.
        </p>
        <p className='py-7'>
        The Force has a glorious history of the past 6 decades in which the jawans of the ITBP have made many sacrifices in the line of duty and in the service of the Nation.
        </p>
         </div>
      </div>
      <div className='flex flex-col md:ml-[40rem] '>
     <img src={DG} alt='dg' className='h-40 w-40' />
     <div className='-mt-[4.5rem] py-20 font-bold'>
        <p>Sh. Anish Dayal Singh</p>
        <p>IPS (MA-1988), DG ITBP</p>
     </div>
     </div>
     

        </div>
    </div>
  )
}

export default heroSection