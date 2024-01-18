import { useState } from 'react'

import { Carousel } from '../ui'
import { LinkButton } from '../ui/button'

import robert from '../../assets/images/our-team/robert-andall.jpg'
import alison from '../../assets/images/our-team/alison-erickson.jpg'
import donald from '../../assets/images/our-team/donald-teel.jpg'
import ramiro from '../../assets/images/our-team/ramiro-pianarosa.jpg'

const teamMembers = [
  {
    image: robert,
  },
  {
    image: alison,
  },
  {
    image: donald,
  },
  {
    image: ramiro,
  },
]

export const OurTeam = () => {
  const [currentPosition, setCurrentPosition] = useState({ pos: 0, index: 2 })

  const moveCarousel = (direction: 'back' | 'next') => {
    setCurrentPosition((prev) =>
      direction === 'back'
        ? { pos: prev.pos + 110, index: prev.index - 1 }
        : { pos: prev.pos - 110, index: prev.index + 1 },
    )
  }

  return (
    <section id="OurTeam" className="py-96">
      {/* ----- Heading ----- */}
      <header className="flex flex-col heading--primary mb-64">
        <h2>MEET</h2>
        <h2 className="self-end italic">OUR TEAM</h2>
      </header>
      <div className="relative">
        {/* ----- Team Info ----- */}
        <div className="absolute top-0 bottom-0 left-0 flex flex-col gap-32 w-1/2 pl-48 pr-32 py-96 bg-gray-3 z-10 mask-element--inner">
          <p className="text-44 font-general-sans-medium leading-medium">
            Donald Teel
          </p>
          <p className="heading--tertiary text-almost-white-3">
            Owner & Head Piercer
          </p>
          <blockquote className="flex flex-col gap-16 text-20 leading-paragraph">
            <span>
              Hey there! I'm Donald Teel, the proud owner and head piercer here
              at Piercing Indonesia.
            </span>
            <span>
              With a passion for self-expression and a knack for precision, I've
              been weaving art into piercings for years. At Piercing Indonesia,
              it's not just about the jewelry; it's about creating a
              personalized journey of self-expression for each client.
            </span>
          </blockquote>
          <div className="flex flex-col gap-16">
            <LinkButton
              variant="solid-white"
              href="#"
              label="BOOK AN APPOINTMENT"
            />
            <LinkButton
              variant="outlined-white"
              href="#"
              label="SEND ME FEEDBACK"
            />
          </div>
        </div>

        {/* ----- Team Images ----- */}
        <Carousel
          withArrows
          classes="auto-cols-[28%] mask-element !overflow-hidden max-w-[130rem]"
          onBack={() => moveCarousel('back')}
          onNext={() => moveCarousel('next')}
          disableBack={currentPosition.index === 0}
          disableNext={currentPosition.index === teamMembers.length - 1}
        >
          {teamMembers.map((member, i) => (
            <div
              id="CarouselItem--our-team"
              key={i}
              className="w-fit h-fit overflow-hidden transition-all ease-in"
              style={{
                transform: `translateX(${currentPosition.pos}%)`,
              }}
            >
              <img
                className="aspect-[9_/_16] object-cover object-center transition-all ease-in hover:scale-110"
                style={{ inlineSize: '100%' }}
                src={member.image}
                alt=""
              />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  )
}
