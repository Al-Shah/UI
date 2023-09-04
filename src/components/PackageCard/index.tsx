import Image from "next/image"
import React from "react"

const index = () => {
  return (
    <div className="">
      <div className="p-16 flex justify-center w-fit">
        <Image
          className="rounded-[50px]"
          alt="card"
          src="/assets/images/pkg-card-1.webp"
          width={440}
          height={410}
        />
        <div className="relative">
          <p className="absolute w-80 origin-bottom-left rotate-90 font-poppins text-4xl">
            19 AUG 2023
          </p>
        </div>
      </div>
    </div>
  )
}

export default index
