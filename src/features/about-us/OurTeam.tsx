import { useState } from 'react'

import { Carousel } from '@/components/Carousel'
import { LinkButton } from '@/components/button'

import robert from '@/assets/images/our-team/robert-andall.jpg'
import alison from '@/assets/images/our-team/alison-erickson.jpg'
import donald from '@/assets/images/our-team/donald-teel.jpg'
import ramiro from '@/assets/images/our-team/ramiro-pianarosa.jpg'

import classes from './OurTeam.module.css'

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
  const [currentPosition, setCurrentPosition] = useState(0)

  const moveCarousel = (direction: 'back' | 'next') => {
    setCurrentPosition((prev) =>
      direction === 'back' ? prev + 100 : prev - 100,
    )
  }

  return (
    <section id="OurTeam" className="py-48">
      {/* ----- Heading ----- */}
      <header className="flex flex-col heading--primary mb-64">
        <h2>MEET</h2>
        <h2 className="self-end italic">OUR TEAM</h2>
      </header>
      <div className="flex items-center gap-32">
        {/* ----- Team Info ----- */}
        <div className="flex flex-col gap-32 w-1/2 p-32 bg-gray-3">
          <p className="text-44 font-general-sans-medium leading-medium">
            Robert Andall
          </p>
          <p className="heading--tertiary text-almost-white-3">
            Owner & Head Piercer
          </p>
          <blockquote className="flex flex-col gap-16 text-16 leading-paragraph">
            <span>
              Hey there! I'm Robert Andall, the proud owner and head piercer
              here at Piercing Indonesia.
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
          containerClasses="w-1/2"
          classes={`auto-cols-[65%] !overflow-hidden max-w-full ${classes['mask-element']}`}
          onBack={() => moveCarousel('back')}
          onNext={() => moveCarousel('next')}
          disableBack={currentPosition === 0}
          disableNext={
            Math.abs(currentPosition / 100) === teamMembers.length - 1
          }
        >
          {teamMembers.map((member, i) => (
            <div
              id="CarouselItem--our-team"
              key={i}
              className="w-fit h-fit overflow-hidden transition-all ease-in"
              style={{
                transform: `translateX(${currentPosition}%)`,
              }}
            >
              <img
                className="aspect-[9_/_16] object-cover object-center transition-all ease-in hover:scale-110"
                style={{ inlineSize: '100%' }}
                src={member.image}
                alt="Image of a Piercing Indonesia employee."
              />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  )
}
