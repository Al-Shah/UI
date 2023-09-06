import AlButton from "@/components/AlButton"
import Image from "next/image"

const heroContent = {
  heading: "Make it easy for your Umrah worship with Al Shah Travel",
  subHeading: "Facilitate your Umrah pilgrimage",
}

export default function index() {
  return (
    <section className="">
      <div className="absolute left-0 w-full pt-44 px-40 space-y-8  text-white text-center ">
        <h2 className="  text-3xl">{heroContent.subHeading}</h2>
        <h1 className=" font-kufam font-bold text-6xl">
          {heroContent.heading}
        </h1>
        <AlButton text="Register Now" />
      </div>
      <Image
        src="/assets/images/mecca.webp"
        width={2115}
        height={1296}
        alt="Mecca"
      />
      <div className=" cursor-pointer w-full flex flex-col items-center ">
        <h3 className="text-xl font-normal my-4">Discover More</h3>
        <Image
          src={"/assets/icons/discover.svg"}
          alt="Discover More"
          width={40}
          height={40}
        />
      </div>
    </section>
  )
}
