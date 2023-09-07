import Image from "next/image"
import React from "react"

interface propType {
  image: string
}
const ImageHolder = ({ image }: propType) => {
  return <Image src={image} height={520} width={291} alt="gallery" />
}

export default ImageHolder
