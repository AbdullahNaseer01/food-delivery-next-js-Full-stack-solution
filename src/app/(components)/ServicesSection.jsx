import ServiceCard from "./ServiceCard"

const ServicesSection = () => {
  return (
    <section className="text-gray-600 body-font mx-1 mt-24  rounded-lg">
    <div className="container px-5 py-8 mx-auto">
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <ServiceCard/>
            <ServiceCard/>
            <ServiceCard/>            
        </div>
    </div>
</section>

  )
}
export default ServicesSection