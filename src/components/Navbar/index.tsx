import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="w-full fixed px-16 py-12 flex justify-between text-xl">
      <div className="w-fit flex items-center space-x-4">
        <Image
          src="/assets/umrah.webp"
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
