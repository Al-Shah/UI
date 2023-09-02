import Image from "next/image"

export default function index() {
  return (
    <section className=" font-kufam font-semibold my-32 mx-40">
      <h2 className="text-center text-7xl">Hadith of the Day</h2>
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
            <p>Narrated Ibn `Umar:</p>
            <p>
              I saw that Allah's Messenger (ﷺ) used to ride onhis Mount at Dhul
              Hulaifa and used to start saying, "Labbaik" when the Mount stood
              upright.
            </p>
          </div>
          <div>
            <p>Sahih al-Bukhari 1514 Book 25, Hadith 2</p>
            <p>Vol. 2, Book 26, Hadith 590 </p>
          </div>
        </div>
      </div>
    </section>
  )
}
