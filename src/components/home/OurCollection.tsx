import { Link } from 'react-router-dom'

import { PlusIcon } from '../icons'

import lobePiercingImage from '../../assets/images/people/muhammad-taha-ibrahim.jpg'
import tonguePiercingImage from '../../assets/images/people/lorenzo-nafissi.jpg'
import labretPiercingImage from '../../assets/images/people/alexander-krivitskiy.jpg'
import septumPiercingImage from '../../assets/images/people/edward-howell.jpg'

export const OurCollection = () => {
  return (
    <section id="OurCollection" className="py-96">
      {/* ----- Description ----- */}
      <p className="heading--tertiary w-1/2 mb-32">
        Discover the perfect piece of jewelry that aligns with your unique style
        and preferences.
      </p>

      {/* ----- Heading ----- */}
      <header className="border-t border-gray-1 flex flex-col heading--primary py-32">
        <h1>OUR</h1>
        <h1 className="self-end">COLLECTION</h1>
      </header>

      {/* ----- Image Grid ----- */}
      <div className="grid grid-cols-2 gap-x-32 gap-y-64 py-32">
        <Link to="/products?filter=lobe" className="flex flex-col gap-32">
          <div className="w-fit h-fit overflow-hidden">
            <img
              className="transition-all ease-in hover:scale-110"
              src={lobePiercingImage}
              alt="A woman with a lobe piercing."
            />
          </div>
          <div className="flex items-center gap-16">
            <p className="heading--tertiary">Lobe</p>
            <span className="heading--tertiary">&mdash;</span>
            <p className="font-general-sans-medium text-16 text-gray-2">
              Photo by{' '}
              <Link
                className="border-b-2 transition-all ease-in border-b-transparent hover:border-b-gray-2"
                to="https://unsplash.com/@planeteelevene?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
              >
                Muhammad-taha Ibrahim
              </Link>{' '}
              on{' '}
              <Link
                className="border-b-2 transition-all ease-in border-b-transparent hover:border-b-gray-2"
                to="https://unsplash.com/photos/person-wearing-silver-framed-eyeglasses-JW6FY79zjMs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
              >
                Unsplash
              </Link>
            </p>
          </div>
        </Link>
        <Link to="/products?filter=tongue" className="flex flex-col gap-32">
          <div className="w-fit h-fit overflow-hidden">
            <img
              className="transition-all ease-in hover:scale-110"
              src={tonguePiercingImage}
              alt="A woman with a tongue piercing."
            />
          </div>
          <div className="flex items-center gap-16">
            <p className="heading--tertiary">Tongue</p>
            <span className="heading--tertiary">&mdash;</span>
            <p className="font-general-sans-medium text-16 text-gray-2">
              Photo by{' '}
              <Link
                className="border-b-2 transition-all ease-in border-b-transparent hover:border-b-gray-2"
                to="https://unsplash.com/@leonardodinafo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
              >
                Lorenzo Nafissi
              </Link>{' '}
              on{' '}
              <Link
                className="border-b-2 transition-all ease-in border-b-transparent hover:border-b-gray-2"
                to="https://unsplash.com/photos/woman-showing-tongue-with-piercing-CC6yQu68318?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
              >
                Unsplash
              </Link>
            </p>
          </div>
        </Link>
        <Link to="/products?filter=labret" className="flex flex-col gap-32">
          <div className="w-fit h-fit overflow-hidden">
            <img
              className="brightness-75 transition-all ease-in hover:scale-110"
              src={labretPiercingImage}
              alt="A woman with a lip piercing."
            />
          </div>
          <div className="flex items-center gap-16">
            <p className="heading--tertiary">Labret</p>
            <span className="heading--tertiary">&mdash;</span>
            <p className="font-general-sans-medium text-16 text-gray-2">
              Photo by{' '}
              <Link
                className="border-b-2 transition-all ease-in border-b-transparent hover:border-b-gray-2"
                to="https://unsplash.com/@krivitskiy?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
              >
                Alexander Krivitskiy
              </Link>{' '}
              on{' '}
              <Link
                className="border-b-2 transition-all ease-in border-b-transparent hover:border-b-gray-2"
                to="https://unsplash.com/photos/grayscale-photo-of-womans-face-ERgpO1G4zMg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
              >
                Unsplash
              </Link>
            </p>
          </div>
        </Link>
        <Link to="/products?filter=septum" className="flex flex-col gap-32">
          <div className="w-fit h-fit overflow-hidden">
            <img
              className="transition-all ease-in hover:scale-110"
              src={septumPiercingImage}
              alt="A man with a septum piercing."
            />
          </div>
          <div className="flex items-center gap-16">
            <p className="heading--tertiary">Septum</p>
            <span className="heading--tertiary">&mdash;</span>
            <p className="font-general-sans-medium text-16 text-gray-2">
              Photo by{' '}
              <Link
                className="border-b-2 transition-all ease-in border-b-transparent hover:border-b-gray-2"
                to="https://unsplash.com/@edwardhowellphotography?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
              >
                Edward Howell
              </Link>{' '}
              on{' '}
              <Link
                className="border-b-2 transition-all ease-in border-b-transparent hover:border-b-gray-2"
                to="https://unsplash.com/photos/man-in-yellow-collared-shirt-CH4TaXDYfYM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
              >
                Unsplash
              </Link>
            </p>
          </div>
        </Link>
      </div>

      {/* ----- Show More ----- */}
      <div className="py-32">
        <Link
          className="flex items-center justify-center w-fit mx-auto gap-8 text-44 font-general-sans-bold border-b-4 border-gray-1 transition-all ease-in hover:border-transparent"
          to="/products?filter=all"
        >
          <span>More</span>
          <PlusIcon classes="h-32 w-32" />
        </Link>
      </div>
    </section>
  )
}
