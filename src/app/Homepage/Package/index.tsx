import PackageCard from "@/components/PackageCard"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const packageContent = {
  heading: "Al Shah Special Umrah and Hajj Packages",
  subHeading:
    "Choose your package according to your needs, guaranteed cheap and complete",
  tabs: ["Hajj", "Umrah", "Couple-packages"],
}

export default function index() {
  return (
    <section className=" font-kufam font-semibold mx-40 flex flex-col items-center justify-center">
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
          <PackageCard />
        </TabsContent>
        <TabsContent value="umrah">Umrah</TabsContent>
        <TabsContent value="couple-packages">couple-packages</TabsContent>
      </Tabs>
    </section>
  )
}
