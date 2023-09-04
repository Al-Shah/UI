import Image from "next/image"

interface propType {
  imgPath: string
  content: string
}

const fulfillContent = {
  heading: "A Wonderful Agency To Fulfill your Dreams",
  subHeading:
    "The Hajj and Umrah pilgrimages are smooth, the heart is clean. we have been trusted since 2023 and have obtained a license from SAUDI ARABIA to become this travel agency.",
  listData: [
    {
      imgPath: "/assets/icons/flight.svg",
      content: "Flight Delhi Saudi - Saudi Delhi",
    },
    {
      imgPath: "/assets/icons/ticket.svg",
      content: "Tickets are included in the cost",
    },
    {
      imgPath: "/assets/icons/hostel.svg",
      content: "Comfortable hotel with a rating of 4",
    },
    {
      imgPath: "/assets/icons/visas.svg",
      content: "We cover the Visa Fee and it's Included",
    },
  ],
}

const ListLine = ({
  imgPath = "/assets/icons/flight.svg",
  content = "Flight Delhi Saudi - Saudi Delhi",
}: propType) => {
  return (
    <div className="flex  items-center space-x-4">
      <div className="p-2 rounded-2xl w-fit bg-brown">
        <Image src={imgPath} alt={content} width={40} height={40} />
      </div>
      <p className="text-lg font-nunito font-medium">{content}</p>
    </div>
  )
}
export default function index() {
  return (
    <section className="w-full px-28 font-kufam font-semibold my-32 mx-40 flex">
      <div className="w-1/2 flex flex-col justify-center">
        <h2 className="text-6xl">{fulfillContent.heading}</h2>
        <p className="text-2xl">{fulfillContent.subHeading}</p>
        <div className="flex flex-col space-y-4 my-4">
          {fulfillContent.listData.map((list) => (
            <ListLine imgPath={list.imgPath} content={list.content} />
          ))}
        </div>
      </div>
      <div className="w-1/2">
        <Image
          src={"/assets/images/fulfill.webp"}
          alt="Book"
          width={974}
          height={750}
        />
      </div>
    </section>
  )
}
