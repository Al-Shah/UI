"use client"
import PackageCard from "@/app/Homepage/Package/components/PackageCard"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const packageContent = {
  heading: "Al Shah Special Umrah and Hajj Packages",
  subHeading:
    "Choose your package according to your needs, guaranteed cheap and complete",
  tabs: ["Hajj", "Umrah", "Couple-packages"],
  hajj: [
    {
      date: "19 AUG 2023",
      imgPath: "/assets/images/pkg-card-1.webp",
      days: 17,
      travelType: "special",
      title: "Al Shah Special Umrah",
      flight: true,
      ticket: true,
      hostel: true,
      visas: true,
      eat: true,
      amount: 125000,
    },
    {
      date: "19 AUG 2023",
      imgPath: "/assets/images/pkg-card-1.webp",
      days: 17,
      travelType: "special",
      title: "Al Shah Special Umrah",
      flight: true,
      ticket: false,
      hostel: true,
      visas: false,
      eat: true,
      amount: 725000,
    },
    {
      date: "19 AUG 2023",
      imgPath: "/assets/images/pkg-card-1.webp",
      days: 17,
      travelType: "best",
      title: "Al Shah Special Umrah",
      flight: true,
      ticket: false,
      hostel: true,
      visas: false,
      eat: true,
      amount: 725000,
    },
    {
      date: "19 AUG 2023",
      imgPath: "/assets/images/pkg-card-1.webp",
      days: 17,
      travelType: "special",
      title: "Al Shah Special Umrah",
      flight: true,
      ticket: false,
      hostel: true,
      visas: false,
      eat: true,
      amount: 725000,
    },
    {
      date: "19 AUG 2023",
      imgPath: "/assets/images/pkg-card-1.webp",
      days: 17,
      travelType: "best",
      title: "Al Shah Special Umrah",
      flight: true,
      ticket: false,
      hostel: true,
      visas: false,
      eat: true,
      amount: 725000,
    },
    {
      date: "19 AUG 2023",
      imgPath: "/assets/images/pkg-card-1.webp",
      days: 17,
      travelType: "best",
      title: "Al Shah Special Umrah",
      flight: true,
      ticket: false,
      hostel: true,
      visas: false,
      eat: true,
      amount: 725000,
    },
    {
      date: "19 AUG 2023",
      imgPath: "/assets/images/pkg-card-1.webp",
      days: 17,
      travelType: "special",
      title: "Al Shah Special Umrah",
      flight: true,
      ticket: false,
      hostel: true,
      visas: false,
      eat: true,
      amount: 725000,
    },
    {
      date: "19 AUG 2023",
      imgPath: "/assets/images/pkg-card-1.webp",
      days: 17,
      travelType: "long",
      title: "Al Shah Special Umrah",
      flight: true,
      ticket: false,
      hostel: true,
      visas: false,
      eat: true,
      amount: 725000,
    },
    {
      date: "19 AUG 2023",
      imgPath: "/assets/images/pkg-card-1.webp",
      days: 17,
      travelType: "long",
      title: "Al Shah Special Umrah",
      flight: true,
      ticket: false,
      hostel: true,
      visas: false,
      eat: true,
      amount: 725000,
    },
  ],
  umrah: [
    {
      date: "12 AUG 2023",
      imgPath: "/assets/images/pkg-card-1.webp",
      days: 7,
      travelType: "long",
      title: "Al Shah Special Umrah",
      flight: true,
      ticket: true,
      hostel: true,
      visas: true,
      eat: true,
      amount: 125000,
    },
    {
      date: "12 AUG 2023",
      imgPath: "/assets/images/pkg-card-1.webp",
      days: 11,
      travelType: "long",
      title: "Al Shah Special Umrah",
      flight: true,
      ticket: false,
      hostel: true,
      visas: false,
      eat: true,
      amount: 725000,
    },
    {
      date: "13 AUG 2023",
      imgPath: "/assets/images/pkg-card-1.webp",
      days: 17,
      travelType: "special",
      title: "Al Shah Special Umrah",
      flight: true,
      ticket: false,
      hostel: true,
      visas: false,
      eat: true,
      amount: 725000,
    },
    {
      date: "19 AUG 2023",
      imgPath: "/assets/images/pkg-card-1.webp",
      days: 17,
      travelType: "special",
      title: "Al Shah Special Umrah",
      flight: true,
      ticket: false,
      hostel: true,
      visas: false,
      eat: true,
      amount: 725000,
    },
    {
      date: "19 AUG 2023",
      imgPath: "/assets/images/pkg-card-1.webp",
      days: 17,
      travelType: "best",
      title: "Al Shah Special Umrah",
      flight: true,
      ticket: false,
      hostel: true,
      visas: false,
      eat: true,
      amount: 725000,
    },
    {
      date: "19 AUG 2023",
      imgPath: "/assets/images/pkg-card-1.webp",
      days: 17,
      travelType: "best",
      title: "Al Shah Special Umrah",
      flight: true,
      ticket: false,
      hostel: true,
      visas: false,
      eat: true,
      amount: 725000,
    },
    {
      date: "19 AUG 2023",
      imgPath: "/assets/images/pkg-card-1.webp",
      days: 17,
      travelType: "special",
      title: "Al Shah Special Umrah",
      flight: true,
      ticket: false,
      hostel: true,
      visas: false,
      eat: true,
      amount: 725000,
    },
    {
      date: "19 AUG 2023",
      imgPath: "/assets/images/pkg-card-1.webp",
      days: 17,
      travelType: "long",
      title: "Al Shah Special Umrah",
      flight: true,
      ticket: false,
      hostel: true,
      visas: false,
      eat: true,
      amount: 725000,
    },
    {
      date: "19 AUG 2023",
      imgPath: "/assets/images/pkg-card-1.webp",
      days: 17,
      travelType: "long",
      title: "Al Shah Special Umrah",
      flight: true,
      ticket: false,
      hostel: true,
      visas: false,
      eat: true,
      amount: 725000,
    },
  ],
  "couple-package": [
    {
      date: "01 AUG 2023",
      imgPath: "/assets/images/pkg-card-1.webp",
      days: 7,
      travelType: "best",
      title: "Al Shah Special Umrah",
      flight: true,
      ticket: true,
      hostel: true,
      visas: true,
      eat: true,
      amount: 125000,
    },
    {
      date: "19 AUG 2023",
      imgPath: "/assets/images/pkg-card-1.webp",
      days: 17,
      travelType: "best",
      title: "Al Shah Special Umrah",
      flight: true,
      ticket: false,
      hostel: true,
      visas: false,
      eat: true,
      amount: 725000,
    },
    {
      date: "19 AUG 2023",
      imgPath: "/assets/images/pkg-card-1.webp",
      days: 17,
      travelType: "best",
      title: "Al Shah Special Umrah",
      flight: true,
      ticket: false,
      hostel: true,
      visas: false,
      eat: true,
      amount: 725000,
    },
    {
      date: "19 AUG 2023",
      imgPath: "/assets/images/pkg-card-1.webp",
      days: 17,
      travelType: "special",
      title: "Al Shah Special Umrah",
      flight: true,
      ticket: false,
      hostel: true,
      visas: false,
      eat: true,
      amount: 725000,
    },
    {
      date: "19 AUG 2023",
      imgPath: "/assets/images/pkg-card-1.webp",
      days: 17,
      travelType: "best",
      title: "Al Shah Special Umrah",
      flight: true,
      ticket: false,
      hostel: true,
      visas: false,
      eat: true,
      amount: 725000,
    },
    {
      date: "19 AUG 2023",
      imgPath: "/assets/images/pkg-card-1.webp",
      days: 17,
      travelType: "best",
      title: "Al Shah Special Umrah",
      flight: true,
      ticket: false,
      hostel: true,
      visas: false,
      eat: true,
      amount: 725000,
    },
    {
      date: "19 AUG 2023",
      imgPath: "/assets/images/pkg-card-1.webp",
      days: 17,
      travelType: "special",
      title: "Al Shah Special Umrah",
      flight: true,
      ticket: false,
      hostel: true,
      visas: false,
      eat: true,
      amount: 725000,
    },
    {
      date: "19 AUG 2023",
      imgPath: "/assets/images/pkg-card-1.webp",
      days: 17,
      travelType: "long",
      title: "Al Shah Special Umrah",
      flight: true,
      ticket: false,
      hostel: true,
      visas: false,
      eat: true,
      amount: 725000,
    },
    {
      date: "19 AUG 2023",
      imgPath: "/assets/images/pkg-card-1.webp",
      days: 17,
      travelType: "long",
      title: "Al Shah Special Umrah",
      flight: true,
      ticket: false,
      hostel: true,
      visas: false,
      eat: true,
      amount: 725000,
    },
  ],
}

export default function index() {
  return (
    <section className=" font-kufam font-semibold  flex flex-col items-center justify-center">
      <h2 className="text-center text-7xl w-2/3">{packageContent.heading}</h2>
      <h3 className="text-center w-2/5 my-8">{packageContent.subHeading}</h3>

      <Tabs
        defaultValue="hajj"
        className="mx-auto w-full  flex flex-col items-center"
      >
        <TabsList className="border-2 w-fit p-4 rounded-xl ">
          {packageContent.tabs.map((tab) => (
            <TabsTrigger value={tab.toLocaleLowerCase()}>{tab}</TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="hajj">
          <div className="flex flex-wrap justify-center">
            {packageContent.hajj.map((card) => (
              <PackageCard
                date={card.date}
                imgPath={card.imgPath}
                days={card.days}
                travelType={card.travelType}
                title={card.title}
                flight={card.flight}
                ticket={card.ticket}
                hostel={card.hostel}
                visas={card.visas}
                eat={card.eat}
                amount={card.amount}
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="umrah">
          {" "}
          <div className="flex flex-wrap justify-center">
            {packageContent.umrah.map((card) => (
              <PackageCard
                date={card.date}
                imgPath={card.imgPath}
                days={card.days}
                travelType={card.travelType}
                title={card.title}
                flight={card.flight}
                ticket={card.ticket}
                hostel={card.hostel}
                visas={card.visas}
                eat={card.eat}
                amount={card.amount}
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="couple-packages">
          {" "}
          <div className="flex flex-wrap justify-center">
            {packageContent["couple-package"].map((card) => (
              <PackageCard
                date={card.date}
                imgPath={card.imgPath}
                days={card.days}
                travelType={card.travelType}
                title={card.title}
                flight={card.flight}
                ticket={card.ticket}
                hostel={card.hostel}
                visas={card.visas}
                eat={card.eat}
                amount={card.amount}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  )
}
