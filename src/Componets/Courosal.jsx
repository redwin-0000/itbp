import React from 'react'
// import itbp_1 from "../img/itbp_1.jpeg"
import PM from "../img/PM.png"
import HM from "../img/HM.png"
// import itbp1 from "../img/itbp_1.jpeg"
// import itbp2 from "../img/itbp_2.jpeg"
// import itbp3 from "../img/itbp_3.jpeg"
// import itbp4 from "../img/itbp_4.jpeg"
// import itbp5 from "../img/itbp_6.jpeg"
const Courosal = () => {
  return (
    <div className='-mt-[8rem] mr-60 '>
        {/* <div>
            <img src={itbp_1} alt='itbp' className='w-[40rem]' />
        </div> */}
        <div className="carousel carousel-end rounded-box flex">
  <div className="carousel-item">
    <img src={PM} alt="Drink" />
  </div> 
  <div className="carousel-item">
    <img src={HM} alt="Drink" />
  </div> 
  <div className="carousel-item">
    <img src={PM} alt="Drink" />
  </div> 
  <div className="carousel-item">
    <img src={HM} alt="Drink" />
  </div> 
  <div className="carousel-item">
    <img src={PM} alt="Drink" />
  </div> 
  <div className="carousel-item">
    <img src={HM} alt="Drink" />
  </div> 
  <div className="carousel-item">
    <img src={PM} alt="Drink" />
  </div>
</div>
    </div>
  )
}

export default Courosal