import { Link } from 'react-router-dom'

export const Hero = () => {
  return (
    <section
      id="Hero"
      className="relative flex items-end justify-between h-[calc(100vh_-_15.2rem)] bg-gray-1 p-48 before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:bg-hero-image before:bg-cover before:bg-center before:grayscale before:brightness-50"
    >
      <p className="z-10 w-1/2 text-30 text-almost-white-1 leading-medium">
        Piercing Indonesia, the forefront in body piercing, stands as the go-to
        brand for unparalleled products and services, setting the standard in
        the industry.
      </p>
      <p className="z-10 text-16 text-almost-white-1">
        Photo by{' '}
        <Link
          className="border-b-2 transition-all ease-in border-b-transparent hover:border-b-almost-white-1"
          to="https://unsplash.com/@hayespotter?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
        >
          Hayes Potter
        </Link>{' '}
        on{' '}
        <Link
          className="border-b-2 transition-all ease-in border-b-transparent hover:border-b-almost-white-1"
          to="https://unsplash.com/photos/man-in-gray-thrasher-crew-neck-shirt-standing-near-commercial-refrigerator-W50hYZJGNQE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
        >
          Unsplash
        </Link>
      </p>
    </section>
  )
}
