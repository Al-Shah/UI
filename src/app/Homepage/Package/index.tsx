import PackageCard from "@/components/PackageCard"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function index() {
  return (
    <section className=" font-kufam font-semibold mx-40 flex flex-col items-center justify-center">
      <h2 className="text-center text-7xl w-2/3">
        Al Shah Special Umrah and Hajj Packages
      </h2>
      <h3 className="text-center w-2/5 my-8">
        Choose your package according to your needs, guaranteed cheap and
        complete
      </h3>

      <Tabs
        defaultValue="hajj"
        className="mx-auto w-full  flex flex-col items-center"
      >
        <TabsList className="border-2 w-fit p-4 rounded-xl ">
          <TabsTrigger value="hajj">Hajj</TabsTrigger>
          <TabsTrigger value="umrah">Umrah</TabsTrigger>
          <TabsTrigger value="couple-packages">Couple-packages</TabsTrigger>
        </TabsList>
        <TabsContent value="hajj">
          <PackageCard />
        </TabsContent>
        <TabsContent value="umrah">umrah</TabsContent>
        <TabsContent value="couple-packages">couple-packages</TabsContent>
      </Tabs>
    </section>
  )
}
