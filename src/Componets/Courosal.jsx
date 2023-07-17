import React from 'react'
import itbp_1 from "../img/itbp_1.jpeg"
import itbp_2 from "../img/itbp_12.jpeg"
import itbp_3 from "../img/itbp_13.jpeg"
import itbp_4 from "../img/itbp_3.jpeg"
const Courosal = () => {
  return (
    <div className="carousel carousel-center rounded-box flex gap-6">
  <div className="carousel-item">
    <img src={itbp_1} alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src={itbp_2} alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src={itbp_3} alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src={itbp_4} alt="Pizza" />
  </div> 
  {/* <div className="carousel-item">
    <img src="/images/stock/photo-1550258987-190a2d41a8ba.jpg" alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src="/images/stock/photo-1559181567-c3190ca9959b.jpg" alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src="/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" alt="Pizza" />
  </div> */}
</div>
  )
}

export default Courosal