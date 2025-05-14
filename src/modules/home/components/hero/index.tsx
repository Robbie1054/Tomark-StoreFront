import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full relative">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="HeroImage.svg" // Add your image to the public folder
          alt="Electronic components background"
          fill
          priority
          className="object-cover object-center"
          quality={90}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <Heading
            level="h1"
            className="text-6xl leading-10 text-white font-bold"
          >
            Electronic Component Distributor
          </Heading>
          <Heading
            level="h2"
            className="text-3xl leading-10 text-gray-200 font-normal mt-4"
          >
            We are an ISO9001:2015 certified UK-based independent stocking distributor of electronic components. We specialise in selling new and original electronic components from stock!
          </Heading>
        </span>
        <a
          href="https://github.com/medusajs/nextjs-starter-medusa"
          target="_blank"
        >
          <Button variant="secondary">
            View on GitHub
            <Github />
          </Button>
        </a>
      </div>
    </div>
  )
}

export default Hero
