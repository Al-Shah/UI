import Image from "next/image"
import React from "react"
import AlButton from "../AlButton"

interface propType {
  date: string
  imgPath: string
  days: number
  travelType: "best" | "special" | "long" | string
  title: string
  amount: number
  flight?: boolean
  ticket?: boolean
  hostel?: boolean
  visas?: boolean
  eat?: boolean
}
const index = ({
  date,
  imgPath,
  days,
  travelType,
  title,
  amount,
  flight = false,
  ticket = false,
  hostel = false,
  visas = false,
  eat = false,
}: propType) => {
  return (
    <div className="w-[480px] m-4 shadow-md rounded-[50px] p-8 pr-16">
      <div className=" flex justify-center">
        <Image
          className="rounded-[50px]"
          alt="card"
          src={imgPath}
          width={440}
          height={410}
        />
        <div className="relative">
          <p className="absolute w-80 origin-bottom-left rotate-90 font-poppins text-4xl tracking-widest font-medium ml-2 text-gray-600">
            {date}
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center my-4">
        <p className=" text-gold text-xl">
          {days > 1 ? `${days}Days` : "1Day"}
        </p>
        <p
          className={`text-white ${
            (travelType === "best" && " bg-lightBlue") ||
            (travelType === "special" && " bg-lightCyan") ||
            (travelType === "long" && " bg-lightRed") ||
            "bg-lightBlue"
          } rounded-l-2xl -mr-16 flex justify-center font-nunito font-bold text-xl items-center px-6 py-4`}
        >
          {(travelType === "best" && "Best Seller") ||
            (travelType === "special" && "Special Offering") ||
            (travelType === "long" && "Long Trip")}
        </p>
      </div>
      <div className=" font-poppins text-3xl space-y-4">
        <h3>{title}</h3>
        <h3 className="font-medium">{`₹${amount.toLocaleString()} /Person`}</h3>
      </div>
      <div className="flex gap-8 my-8">
        {flight && (
          <Image
            className="rounded-xl p-2 bg-lightBlue"
            alt="card"
            src="/assets/icons/flight.svg"
            width={60}
            height={60}
          />
        )}
        {ticket && (
          <Image
            className="rounded-xl p-2 bg-lightBlue"
            alt="card"
            src="/assets/icons/ticket.svg"
            width={60}
            height={60}
          />
        )}
        {hostel && (
          <Image
            className="rounded-xl p-2 bg-lightBlue"
            alt="card"
            src="/assets/icons/hostel.svg"
            width={60}
            height={60}
          />
        )}
        {visas && (
          <Image
            className="rounded-xl p-2 bg-lightBlue"
            alt="card"
            src="/assets/icons/visas.svg"
            width={60}
            height={60}
          />
        )}
        {eat && (
          <Image
            className="rounded-xl p-2 bg-lightBlue"
            alt="card"
            src="/assets/icons/eat.svg"
            width={60}
            height={60}
          />
        )}
      </div>
      <div className="flex space-x-8">
        <AlButton
          bgColor="orange"
          font="poppins"
          fontSize="xl"
          color="gold"
          text="View Details"
        />
        <AlButton
          bgColor="blue"
          font="poppins"
          fontSize="xl"
          color="blue"
          text="Book Now"
        />
      </div>
    </div>
  )
}

export default index
