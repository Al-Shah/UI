import Image from "next/image"

export default function index() {
  return (
    <section className="my-40">
      <Image
        src="/assets/images/guide.webp"
        width={2160}
        height={1571}
        alt="guide"
      />
    </section>
  )
}
