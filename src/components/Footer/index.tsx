import Image from "next/image"
import Link from "next/link"

const socialLinks = [
  {
    imgPath: "/assets/icons/insta.svg",
    linkTo: "http://www.google.com",
    alt: "Insta",
  },
  {
    imgPath: "/assets/icons/fb.svg",
    linkTo: "http://www.google.com",
    alt: "Facebook",
  },
  {
    imgPath: "/assets/icons/twitter.svg",
    linkTo: "http://www.google.com",
    alt: "Twitter",
  },
  {
    imgPath: "/assets/icons/youtube.svg",
    linkTo: "http://www.google.com",
    alt: "Youtube",
  },
]

const footerLinks = [
  [
    { title: "Quick Link", linkTo: "" },
    { title: "About Us", linkTo: "#" },
    { title: "Flight Accommodation", linkTo: "#" },
    { title: "Facilities", linkTo: "#" },
    { title: "Gallery", linkTo: "#" },
  ],
  [
    { title: "Package Umrah", linkTo: "" },
    { title: "Al Shah Umrah Bronze", linkTo: "#" },
    { title: "Al Shah Umrah Silver", linkTo: "#" },
    { title: "Al Shah Umrah Gold", linkTo: "#" },
    { title: "Al Shah Umrah Priority", linkTo: "#" },
  ],
  [
    { title: "Package Hajj", linkTo: "" },
    { title: "Al Shah Hajj Diamond", linkTo: "#" },
    { title: "Al Shah Hajj Platinum", linkTo: "#" },
    { title: "Al Shah Hajj Priority", linkTo: "#" },
  ],
  [
    { title: "Office Place", linkTo: "" },
    { title: "India", linkTo: "#" },
    { title: "Saudi Arabia", linkTo: "#" },
    { title: "Uni Emirates Arab", linkTo: "#" },
  ],
]
export default function Footer() {
  return (
    <footer className="w-full space-y-8 bg-sky text-white px-32 pt-20">
      <div className="flex justify-between text-xl items-start font-medium">
        <div className="w-1/5">
          <div className="w-fit flex px-8 scale-[0.8] origin-top-left bg-white text-black rounded-xl shadow-xl items-center space-x-4">
            <Image
              src="/assets/umrah.webp"
              alt="Umrah"
              width={82}
              height={105}
              priority
            />
            <div className="w-fit font-girassol flex flex-col items-center">
              <h2 className="text-3xl">Al-Shah</h2>
              <h3 className=" text-base">Hajj & Umrah</h3>
            </div>
          </div>
          <p>Comfortable and Quiet Worship, Our Service No. 1 in India</p>
        </div>
        {footerLinks.map((links) => (
          <ul className="flex flex-col space-y-2">
            {links.map((link) => {
              if (link.linkTo) {
                return <Link href={link.linkTo}>{link.title}</Link>
              } else {
                return (
                  <h5 className="text-2xl mb-4 font-semibold">{link.title}</h5>
                )
              }
            })}
          </ul>
        ))}
      </div>
      <hr className=" border-white " />
      <div className="pb-6 flex justify-between items-center">
        <h4>Copyright © 2023 Al Shah Travel | All Reserverd</h4>
        <div className="flex space-x-4">
          {socialLinks.map((social) => (
            <a href={social.linkTo} target="_blank" rel="noopener noreferrer">
              <div className="w-fit p-2 rounded-2xl bg-white">
                <Image
                  src={social.imgPath}
                  alt={social.alt}
                  width={40}
                  height={40}
                  priority
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
