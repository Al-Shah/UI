import Image from "next/image"

const hadithContent = {
  heading: "Hadith of the Day",
  subHeading: [
    "Narrated Ibn `Umar:",
    `I saw that Allah's Messenger (ﷺ) used to ride onhis Mount at Dhul Hulaifa and used to start saying, "Labbaik" when the Mount stood
    upright.`,
  ],
  foot: [
    "Sahih al-Bukhari 1514 Book 25, Hadith 2",
    "Vol. 2, Book 26, Hadith 590",
  ],
}

export default function index() {
  return (
    <section className=" font-kufam font-semibold mt-32 mx-40">
      <h2 className="text-center text-7xl">{hadithContent.heading}</h2>
      <div className="flex">
        <Image
          className="scale-90"
          src={"/assets/images/book.webp"}
          alt="Book"
          width={767}
          height={735}
        />
        <div />
        <div className="flex flex-col gap-10 justify-center">
          <div className="text-4xl">
            {hadithContent.subHeading.map((sub) => {
              return <p>{sub}</p>
            })}
          </div>
          <div>
            {hadithContent.foot.map((foot) => {
              return <p>{foot}</p>
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
