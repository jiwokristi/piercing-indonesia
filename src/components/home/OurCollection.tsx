import { Link } from 'react-router-dom'

import { PlusIcon } from '../icons'

import lobePiercingImage from '../../assets/images/muhammad-taha-ibrahim.jpg'
import tonguePiercingImage from '../../assets/images/lorenzo-nafissi.jpg'
import labretPiercingImage from '../../assets/images/alexander-krivitskiy.jpg'
import septumPiercingImage from '../../assets/images/edward-howell.jpg'

export const OurCollection = () => {
  return (
    <>
      {/* ----- Description ----- */}
      <p className="font-general-sans-medium text-30 leading-medium w-1/2 mb-32">
        Discover the perfect piece of jewelry that aligns with your unique style
        and preferences.
      </p>

      {/* ----- Heading ----- */}
      <div className="border-t border-gray-1 flex flex-col text-[11rem] font-general-sans-bold py-32">
        <h2>OUR</h2>
        <h2 className="self-end">COLLECTION</h2>
      </div>

      {/* ----- Image Grid ----- */}
      <div className="grid grid-cols-2 gap-x-32 gap-y-64 py-32 font-general-sans-medium">
        <Link to="/products?filter=lobe" className="flex flex-col gap-32">
          <div className="w-fit h-fit overflow-hidden">
            <img
              className="hover:scale-110 transition-all ease-in"
              src={lobePiercingImage}
              alt="A woman with a lobe piercing."
            />
          </div>
          <div className="flex items-center gap-16">
            <h3 className="text-32">Lobe</h3>
            <span>&mdash;</span>
            <p className="text-16 text-gray-2">
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
              className="hover:scale-110 transition-all ease-in"
              src={tonguePiercingImage}
              alt="A woman with a tongue piercing."
            />
          </div>
          <div className="flex items-center gap-16">
            <h3 className="text-32">Tongue</h3>
            <span>&mdash;</span>
            <p className="text-16 text-gray-2">
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
              className="hover:scale-110 transition-all ease-in"
              src={labretPiercingImage}
              alt="A woman with a lip piercing."
            />
          </div>
          <div className="flex items-center gap-16">
            <h3 className="text-32">Labret</h3>
            <span>&mdash;</span>
            <p className="text-16 text-gray-2">
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
              className="hover:scale-110 transition-all ease-in"
              src={septumPiercingImage}
              alt="A man with a septum piercing."
            />
          </div>
          <div className="flex items-center gap-16">
            <h3 className="text-32">Septum</h3>
            <span>&mdash;</span>
            <p className="text-16 text-gray-2">
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
          to="/products"
        >
          <span>More</span>
          <PlusIcon classes="h-32 w-32" />
        </Link>
      </div>
    </>
  )
}
