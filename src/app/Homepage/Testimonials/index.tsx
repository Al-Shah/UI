import ReviewCard from "./components/ReviewCard"

const testimonialContent = {
  heading: "Testimonials from our customers ",
  subHeading: "We have 100.000+ customers, here are our customer testimonials",
  reviews: [
    {
      title: "Al Shah Umrah",
      name: "Abd Al Jami’ah",
      review:
        "I am very satisfied with Al Shah Travel's service, starting from when we arrived in Saudi until we returned to Indonesia. We provide very good service.",
      rating: "4.7",
      imgPath: "/assets/images/umrah.webp",
    },
    {
      title: "Al Shah Umrah",
      name: "Abd Al Jami’ah",
      review:
        "I am very satisfied with Al Shah Travel's service, starting from when we arrived in Saudi until we returned to Indonesia. We provide very good service.",
      rating: "4.7",
      imgPath: "/assets/images/umrah.webp",
    },
    {
      title: "Al Shah Umrah",
      name: "Abd Al Jami’ah",
      review:
        "I am very satisfied with Al Shah Travel's service, starting from when we arrived in Saudi until we returned to Indonesia. We provide very good service.",
      rating: "4.7",
      imgPath: "/assets/images/umrah.webp",
    },
    {
      title: "Al Shah Umrah",
      name: "Abd Al Jami’ah",
      review:
        "I am very satisfied with Al Shah Travel's service, starting from when we arrived in Saudi until we returned to Indonesia. We provide very good service.",
      rating: "4.7",
      imgPath: "/assets/images/umrah.webp",
    },
    {
      title: "Al Shah Umrah",
      name: "Abd Al Jami’ah",
      review:
        "I am very satisfied with Al Shah Travel's service, starting from when we arrived in Saudi until we returned to Indonesia. We provide very good service.",
      rating: "4.7",
      imgPath: "/assets/images/umrah.webp",
    },
    {
      title: "Al Shah Umrah",
      name: "Abd Al Jami’ah",
      review:
        "I am very satisfied with Al Shah Travel's service, starting from when we arrived in Saudi until we returned to Indonesia. We provide very good service.",
      rating: "4.7",
      imgPath: "/assets/images/umrah.webp",
    },
  ],
}

export default function index() {
  return (
    <section className="w-full flex flex-col mt-40 items-end ">
      <div className="text-right w-2/4 flex flex-col items-end mx-20">
        <h3 className=" font-kufam text-7xl font-bold ">
          {testimonialContent.heading}
        </h3>
        <h4 className="text-2xl my-4 w-2/3 ">
          {testimonialContent.subHeading}
        </h4>
      </div>
      <div className="w-full flex flex-wrap gap-8 mt-20">
        {testimonialContent.reviews.map((review) => (
          <ReviewCard
            title={review.title}
            name={review.name}
            review={review.review}
            rating={review.rating}
            imgPath={review.imgPath}
          />
        ))}
      </div>
    </section>
  )
}
