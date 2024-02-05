import {
  Hero,
  OurCollection,
  NewArrivals,
  TopSelling,
  CallToAction,
} from '@/features/home'

export const Home = () => {
  return (
    <>
      <Hero />
      <OurCollection />
      <CallToAction />
      <NewArrivals />
      <TopSelling />
    </>
  )
}
