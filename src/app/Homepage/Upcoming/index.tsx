import Image from "next/image"

const upcomingContent = {
  heading: "Upcoming Ramadan Packages",
  subHeading: "Stay Tuned",
}

export default function index() {
  return (
    <section className="">
      <div className="absolute left-0 w-full pt-44 px-40 space-y-8  text-white text-center ">
        <h4 className=" font-semibold text-3xl">
          {upcomingContent.subHeading}
        </h4>
        <h3 className=" font-kufam font-bold text-6xl">
          {upcomingContent.heading}
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
