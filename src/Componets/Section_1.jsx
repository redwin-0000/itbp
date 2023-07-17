import React from 'react'
import Courosal from './Courosal'
import itbp_r from "../img/itbp_r.jpg"
import PM from "../img/PM.png"
import HM from "../img/HM.png"
const Section_1 = () => {
  return (
   <div>
    <img src={itbp_r} alt='itbp_6'  className='w-full min-h-screen '/>
    <div className='-mt-[32rem] flex justify-between'>
     <div className=''>
     <img src={PM} alt='pm' className='w-52 py-[18.5rem]'/>
     <div className='-mt-[23rem] px-3  font-bold'>
        <p>Shree NARENDRA MODI</p>
        <p>HON'BLE PM</p>
     </div>
     <div className='ml-[23rem] -mt-[10rem]'>
        <Courosal />
     </div>
     </div>
     <div className='my-[19rem]'>
     <img src={HM} alt='hm' className='w-56 -mt-6' />
     <div className='-mt-[5rem] px-11 py-5 font-bold text-white'>
        <p>Shree AMIT SHAH</p>
        <p>HON'BLE HM</p>
     </div>
     </div>
    </div>
   </div>
  )
}

export default Section_1