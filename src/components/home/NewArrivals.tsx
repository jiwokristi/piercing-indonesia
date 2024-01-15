import React from 'react'
import { Link } from 'react-router-dom'

import jewelry1 from '../../assets/images/jewelry/anastasia-anastasia.jpg'
import jewelry2 from '../../assets/images/jewelry/birgith-roosipuu-k.jpg'
import jewelry3 from '../../assets/images/jewelry/carmen-alarcon.jpg'
import jewelry4 from '../../assets/images/jewelry/daihana-monares.jpg'
import jewelry5 from '../../assets/images/jewelry/gabrielle-henderson.jpg'

export const NewArrivals = () => {
  return (
    <section id="NewArrivals" className="flex flex-col px-48">
      {/* ----- Heading ----- */}
      <div className="flex items-end justify-between py-32">
        <header className="flex flex-col heading--secondary">
          <h2>NEW</h2>
          <h2>ARRIVALS</h2>
        </header>
        <Link className="text-16" to="/products?filter=new-arrivals">
          SEE ALL
        </Link>
      </div>

      {/* ----- Carousel ----- */}
      <div className="flex gap-32">
        <div className="w-fit h-fit overflow-hidden">
          <img src={jewelry1} alt="" />
        </div>
        <div className="w-fit h-fit overflow-hidden">
          <img src={jewelry2} alt="" />
        </div>
        <div className="w-fit h-fit overflow-hidden">
          <img src={jewelry3} alt="" />
        </div>
        <div className="w-fit h-fit overflow-hidden">
          <img src={jewelry4} alt="" />
        </div>
        <div className="w-fit h-fit overflow-hidden">
          <img src={jewelry5} alt="" />
        </div>
      </div>
    </section>
  )
}
