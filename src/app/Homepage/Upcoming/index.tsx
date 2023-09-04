import Image from "next/image"

export default function index() {
  return (
    <section className="">
      <div className="absolute left-0 w-full pt-44 px-40 space-y-8  text-white text-center ">
        <h2 className=" font-semibold text-3xl">
          Facilitate your Umrah pilgrimage
        </h2>
        <h1 className=" font-kufam font-bold text-6xl">
          Make it easy for your Umrah worship with Al Shah Travel
        </h1>
      </div>
      <Image
        src="/assets/images/upcoming.webp"
        width={2115}
        height={1296}
        alt="Mecca"
      />
      <div className=" cursor-pointer w-full flex flex-col items-center ">
        <h3 className="text-xl font-normal my-4">Discover More</h3>
      </div>
    </section>
  )
}
