import { LinkButton } from '@/components/button'

export const CallToAction = () => {
  return (
    <section
      id="CallToAction"
      className="relative h-screen before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-hero-image before:bg-cover before:bg-center before:grayscale before:brightness-50 before:bg-fixed flex flex-col items-center justify-center gap-32 p-32"
    >
      <header className="z-10 flex flex-col items-center justify-center gap-32 text-almost-white-1 text-center">
        <span className="leading-medium text-16">OUR SERVICES</span>
        <h3 className="heading--secondary w-1/2">
          WE TREAT YOUR DISTINCT <span className="italic">AESTHETIC</span> WITH
          THE UTMOST CONSIDERATION
        </h3>
      </header>
      <p className="z-10 text-almost-white-1 text-center leading-paragraph text-16">
        At Piercing Indonesia, we understand that body piercing is more than a
        process; it's a form of self-expression.
        <br />
        Our mission goes beyond adorning bodies; it embraces the essence of
        individuality and the power of self-discovery through the art of
        piercing.
      </p>
      <LinkButton
        href="#"
        variant="outlined-white"
        label="BOOK NOW"
        classes="z-10"
      />
    </section>
  )
}
