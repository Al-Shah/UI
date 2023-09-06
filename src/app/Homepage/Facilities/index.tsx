import Image from "next/image"

const facilitiesContent = {
  heading: "Facilities We Provide For You",
  subHeading:
    "We provide comfort for our customers, with the various facilities we provide that we provide",
  facilitiesIcons: [
    [
      { imgPath: "/assets/icons/guide.svg", alt: "", title: "Umrah Guide" },
      { imgPath: "/assets/icons/hotels.svg", alt: "", title: "Hotels" },
    ],
    [
      { imgPath: "/assets/icons/guide.svg", alt: "", title: "Hajj Guide" },
      {
        imgPath: "/assets/icons/transport.svg",
        alt: "",
        title: "Transportation",
      },
    ],
    [
      { imgPath: "/assets/icons/asst.svg", alt: "", title: "Vias Assistance" },
      { imgPath: "/assets/icons/train.svg", alt: "", title: "Training" },
    ],
    [
      { imgPath: "/assets/icons/tickets.svg", alt: "", title: "Tickets" },
      { imgPath: "/assets/icons/money.svg", alt: "", title: "Money Exchange" },
    ],
  ],
}
export default function index() {
  return (
    <section className=" font-kufam my-32 mx-40">
      <h2 className="text-center font-semibold  text-7xl">
        {facilitiesContent.heading}
      </h2>
      <h2 className="text-center  text-3xl">{facilitiesContent.subHeading}</h2>
      <div className="flex flex-col items-center">
        <Image
          className="scale-75"
          src={"/assets/images/ourFacilities.webp"}
          alt="facilities"
          width={767}
          height={735}
        />
        <div />
        <div className="flex divide-x-2">
          {facilitiesContent.facilitiesIcons.map((facilitiesDuo) => {
            return (
              <div className=" px-20 flex flex-col gap-40 justify-center ">
                {facilitiesDuo.map((facility) => {
                  return (
                    <div className="flex flex-col items-center">
                      <Image
                        src={facility.imgPath}
                        alt={facility.alt}
                        width={60}
                        height={60}
                      />
                      <p className="mt-2 text-xl font-semibold">
                        {facility.title}
                      </p>
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
