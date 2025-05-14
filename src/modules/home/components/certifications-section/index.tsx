import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import Image from "next/image"

const Certifications = () => {
  return (
    <div className="h-40 w-full relative flex flex-row items-center justify-center gap-48 bg-slate-900">
        <Image
          src="certifications/ISO9001.svg"
          alt="ISO9001 Certification"
          width={100}
          height={100}
          priority
          className="object-cover object-center"
          quality={90}
        />
        <Image
          src="certifications/30Days.svg"
          alt="ISO9001 Certification"
          width={100}
          height={100}
          priority
          className="object-cover object-center"
          quality={90}
        />
        <Image
          src="certifications/100Years.svg"
          alt="ISO9001 Certification"
          width={100}
          height={100}
          priority
          className="object-cover object-center"
          quality={90}
        />
        <Image
          src="certifications/Paypal.svg"
          alt="ISO9001 Certification"
          width={100}
          height={100}
          priority
          className="object-cover object-center"
          quality={90}
        />
    </div>
  )
}

export default Certifications
