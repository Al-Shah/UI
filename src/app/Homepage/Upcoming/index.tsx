import Image from "next/image"

export default function index() {
  return (
    <section className="">
      <div className="absolute left-0 w-full pt-44 px-40 space-y-8  text-white text-center ">
        <h4 className=" font-semibold text-3xl">Stay Tuned</h4>
        <h3 className=" font-kufam font-bold text-6xl">
          Upcoming Ramadan Packages
        </h3>
      </div>
      <Image
        src="/assets/images/upcoming.webp"
        width={2160}
        height={1440}
        alt="Mecca"
      />
    </section>
  )
}
