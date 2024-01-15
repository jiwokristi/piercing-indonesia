import { Hero } from '../../components/home/Hero'
import { OurCollection } from '../../components/home/OurCollection'
import { NewArrivals } from '../../components/home/NewArrivals'
import { TopSelling } from '../../components/home/TopSelling'

export const Home = () => {
  return (
    <>
      <Hero />
      <OurCollection />
      <NewArrivals />
      <TopSelling />
    </>
  )
}
