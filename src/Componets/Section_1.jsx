import React from 'react'
import Courosal from './Courosal'
import itbp_r from "../img/itbp_r.jpg"
import PM from "../img/PM.png"
import HM from "../img/HM.png"
const Section_1 = () => {
  return (
   <div>
    <img src={itbp_r} alt='itbp_6'  className='w-full min-h-screen'/>
    <div className='-mt-[32rem] flex justify-between'>
     <div className=''>
     <img src={PM} alt='pm'/>
     <div className='-mt-[4.5rem] px-44 font-bold'>
        <p>Shree NARENDRA MODI</p>
        <p>HON'BLE PM</p>
     </div>
     <div className='ml-[40rem]'>
        <Courosal />
     </div>
     </div>
     <div className=''>
     <img src={HM} alt='hm' />
     <div className='-mt-[5rem] px-44 font-bold text-white'>
        <p>Shree AMIT SHAH</p>
        <p>HON'BLE HM</p>
     </div>
     </div>
    </div>
   </div>
  )
}

export default Section_1