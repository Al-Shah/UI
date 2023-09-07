import Image from "next/image"
import React from "react"

interface propType {
  title: string
  name: string
  review: string
  rating: string
  imgPath: string
}
const ReviewCard = ({ title, name, review, rating, imgPath }: propType) => {
  return (
    <div className="flex items-start space-x-8 shadow-xl p-8 rounded-2xl ">
      <div className="flex flex-col items-center">
        <Image
          className="rounded-xl"
          alt="reviewer image"
          src={imgPath}
          width={120}
          height={120}
        />
        <div className="flex  bg-black rounded-3xl text-white p-2  px-4 w-fit space-x-2 text-sm font-semibold">
          <Image
            alt="star"
            src="/assets/icons/yellowStar.svg"
            width={15}
            height={15}
          />
          <p>{rating}</p>
        </div>
      </div>
      <div className="flex flex-col">
        <p className=" font-nunito font-semibold rounded-full bg-black text-white px-6 py-2 w-fit text-md">
          {title}
        </p>
        <p className="font-kufam font-semibold text-3xl mt-4">{name}</p>
        <p className="w-96 text-md">{review}</p>
      </div>
    </div>
  )
}

export default ReviewCard
