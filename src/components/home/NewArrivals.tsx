import { Link } from 'react-router-dom'

import { Carousel } from '../ui/Carousel'
import { CarouselCard } from '../ui/card/CarouselCard'

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
      <Carousel>
        <CarouselCard
          src={jewelry1}
          alt=""
          name="Product Name"
          category="Product Category"
          price="Rp. 15.000"
        />
        <CarouselCard
          src={jewelry2}
          alt=""
          name="Product Name"
          category="Product Category"
          price="Rp. 15.000"
        />
        <CarouselCard
          src={jewelry3}
          alt=""
          name="Product Name"
          category="Product Category"
          price="Rp. 15.000"
        />
        <CarouselCard
          src={jewelry4}
          alt=""
          name="Product Name"
          category="Product Category"
          price="Rp. 15.000"
        />
        <CarouselCard
          src={jewelry5}
          alt=""
          name="Product Name"
          category="Product Category"
          price="Rp. 15.000"
        />
        <CarouselCard
          src={jewelry1}
          alt=""
          name="Product Name"
          category="Product Category"
          price="Rp. 15.000"
        />
        <CarouselCard
          src={jewelry2}
          alt=""
          name="Product Name"
          category="Product Category"
          price="Rp. 15.000"
        />
        <CarouselCard
          src={jewelry3}
          alt=""
          name="Product Name"
          category="Product Category"
          price="Rp. 15.000"
        />
        <CarouselCard
          src={jewelry4}
          alt=""
          name="Product Name"
          category="Product Category"
          price="Rp. 15.000"
        />
        <CarouselCard
          src={jewelry5}
          alt=""
          name="Product Name"
          category="Product Category"
          price="Rp. 15.000"
        />
      </Carousel>
    </section>
  )
}
