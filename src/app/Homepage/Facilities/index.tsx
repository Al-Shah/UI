import Image from "next/image"

export default function index() {
  return (
    <section className=" font-kufam my-32 mx-40">
      <h2 className="text-center font-semibold  text-7xl">
        Facilities We Provide For You
      </h2>
      <h2 className="text-center  text-3xl">
        We provide comfort for our customers, with the various facilities we
        provide that we provide
      </h2>
      <div className="flex flex-col items-center">
        <Image
          className=""
          src={"/assets/images/ourFacilities.webp"}
          alt="facilities"
          width={767}
          height={735}
        />
        <div />
        <div className="flex flex-col gap-10 justify-center"></div>
      </div>
    </section>
  )
}
