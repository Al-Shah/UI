import ImageHolder from "./components/ImageHolder"

const galleryContent = {
  heading: "Gallery Footage In Makka Madina",
  subHeading:
    "We provide comfort for our customers, with the various facilities we provide that we provide",
  images: [
    {
      imgPath: "/assets/images/gal-1.webp",
    },
    {
      imgPath: "/assets/images/gal-2.webp",
    },
    {
      imgPath: "/assets/images/gal-3.webp",
    },
    {
      imgPath: "/assets/images/gal-4.webp",
    },
    {
      imgPath: "/assets/images/gal-5.webp",
    },
    {
      imgPath: "/assets/images/gal-6.webp",
    },
  ],
}

export default function index() {
  return (
    <section className="w-full flex flex-col text-center my-40 ">
      <div className="flex flex-col items-center">
        <h3 className=" font-kufam text-6xl font-bold ">
          {galleryContent.heading}
        </h3>
        <h4 className="text-2xl my-4 w-1/3 ">{galleryContent.subHeading}</h4>
      </div>
      <div className="flex justify-around mt-20">
        {galleryContent.images.map((image) => (
          <ImageHolder image={image.imgPath} />
        ))}
      </div>
    </section>
  )
}
