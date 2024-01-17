import { Link } from 'react-router-dom'

import { Carousel } from '../ui'
import { ProductCard } from '../ui/card/ProductCard'

import jewelry1 from '../../assets/images/jewelry/anastasia-anastasia.jpg'
import jewelry2 from '../../assets/images/jewelry/birgith-roosipuu-k.jpg'
import jewelry3 from '../../assets/images/jewelry/carmen-alarcon.jpg'
import jewelry4 from '../../assets/images/jewelry/daihana-monares.jpg'
import jewelry5 from '../../assets/images/jewelry/gabrielle-henderson.jpg'

export const TopSelling = () => {
  return (
    <section id="TopSelling" className="flex flex-col px-48 py-96">
      {/* ----- Heading ----- */}
      <div className="flex items-end justify-between py-32">
        <header className="flex flex-col heading--secondary">
          <h2>TOP</h2>
          <h2>SELLING</h2>
        </header>
        <Link className="text-16" to="/products?filter=top-selling">
          SEE ALL
        </Link>
      </div>

      {/* ----- Carousel ----- */}
      <Carousel>
        <ProductCard
          src={jewelry1}
          alt=""
          name="Product Name"
          category="Product Category"
          price="Rp15.000"
          previousPrice="Rp25.000"
          startDate="2024-1-1"
          endDate="2024-1-10"
        />
        <ProductCard
          src={jewelry2}
          alt=""
          name="Product Name"
          category="Product Category"
          price="Rp15.000"
        />
        <ProductCard
          src={jewelry3}
          alt=""
          name="Product Name"
          category="Product Category"
          price="Rp15.000"
        />
        <ProductCard
          src={jewelry4}
          alt=""
          name="Product Name"
          category="Product Category"
          price="Rp15.000"
        />
        <ProductCard
          src={jewelry5}
          alt=""
          name="Product Name"
          category="Product Category"
          price="Rp15.000"
        />
        <ProductCard
          src={jewelry1}
          alt=""
          name="Product Name"
          category="Product Category"
          price="Rp15.000"
        />
        <ProductCard
          src={jewelry2}
          alt=""
          name="Product Name"
          category="Product Category"
          price="Rp15.000"
        />
        <ProductCard
          src={jewelry3}
          alt=""
          name="Product Name"
          category="Product Category"
          price="Rp15.000"
        />
        <ProductCard
          src={jewelry4}
          alt=""
          name="Product Name"
          category="Product Category"
          price="Rp15.000"
        />
        <ProductCard
          src={jewelry5}
          alt=""
          name="Product Name"
          category="Product Category"
          price="Rp15.000"
        />
      </Carousel>
    </section>
  )
}
