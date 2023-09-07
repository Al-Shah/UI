import Image from "next/image"

const accomadationContent = {
  heading: "Airways Accomadation",
  subHeading: "We cooperate with several airlines for Umrah and Hajj ",
  rating: "5.0",
}
const index = () => {
  return (
    <section className="mt-40 w-full flex items-center justify-around">
      <div className="flex flex-col w-1/5 ml-40">
        <h4 className=" font-kufam font-bold text-4xl">
          {accomadationContent.heading}
        </h4>
        <p className=" text-2xl font-normal my-4">
          {accomadationContent.subHeading}
        </p>
        <div className="flex space-x-2  items-center px-4 py-2 bg-brown my-4 w-fit rounded-xl">
          <Image
            src="/assets/icons/star.svg"
            height={25}
            width={25}
            alt="star"
          />
          <p className="font-normal text-lg">
            {accomadationContent.rating} Rating
          </p>
        </div>
      </div>
      <Image
        src="/assets/images/saudi.webp"
        height={77}
        width={326}
        alt="star"
      />
      <Image
        src="/assets/images/qatar.webp"
        height={77}
        width={226}
        alt="star"
      />
      <Image
        src="/assets/images/emirates.webp"
        height={77}
        width={137}
        alt="star"
      />
      <Image
        src="/assets/images/lion.webp"
        height={77}
        width={295}
        alt="star"
      />
    </section>
  )
}

export default index
