"use client"
import Image from "next/image"
import Link from "next/link"
import { useCallback, useEffect, useState } from "react"

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0)
  const [direction, setDirection] = useState("")
  let oldScrollY = 0

  const controlDirection = () => {
    if (window.scrollY > oldScrollY) {
      setDirection("down")
    } else {
      setDirection("up")
    }
    oldScrollY = window.scrollY
  }

  useEffect(() => {
    window.addEventListener("scroll", controlDirection)
    return () => {
      window.removeEventListener("scroll", controlDirection)
    }
  }, [])

  const onScroll = useCallback((event: any) => {
    const { scrollY } = window
    setScrollY(window.scrollY)
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true })
    }
  }, [])

  return (
    <nav
      className={`z-10 pt-12 ${
        direction === "down" && scrollY > 110 && "opacity-0"
      } ${
        scrollY > 110 && "backdrop-blur-sm bg-[#7ED0DE60] pt-4 py-4"
      } w-full fixed px-16  flex justify-between text-xl`}
    >
      <div className="w-fit flex items-center space-x-4">
        <Image
          src="/assets/images/umrah.webp"
          alt="Umrah"
          width={82}
          height={105}
          priority
        />
        <div className="w-fit font-girassol flex flex-col items-center">
          <h2 className="text-2xl">Al-Shah</h2>
          <h3 className=" text-sm">Hajj & Umrah</h3>
        </div>
      </div>

      <ul className="flex flex-grow justify-evenly items-center font-mediumd text-2xl text-white">
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>Hajj</Link>
        <Link href={"/"}>Umrah</Link>
        <Link href={"/"}>Packages</Link>
        <Link href={"/"}>Guide</Link>
        <Link href={"/"}>Books</Link>
        <Link href={"/"}>Contact Us</Link>
      </ul>
      <Link
        href={"/"}
        className="flex items-center space-x-4 bg-white rounded-3xl p-4 my-4"
      >
        <Image
          src="/assets/icons/whatsapp.webp"
          alt="Whatsapp"
          width={35}
          height={35}
        />
        <span>Call Us</span>
      </Link>
    </nav>
  )
}
