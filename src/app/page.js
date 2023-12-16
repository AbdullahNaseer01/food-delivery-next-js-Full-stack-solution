import Image from 'next/image'
import Navbar from './(components)/Navbar'
import Hero from './(components)/Hero'
import Banner from './(components)/Banner'
import GridSection from './(components)/GridSection'
import ServicesSection from './(components)/ServicesSection'
import ProcessSection from './(components)/ProcessSection'
import ReviewSection from './(components)/ReviewSection'
import NewsletterSection from './(components)/NewsletterSection'
import Footer from './(components)/Footer'

export default function Home() {
  return (
   <>
   <Navbar/>
   <Hero/>
   <Banner/>
   <GridSection/>
   <ServicesSection/>
   <ProcessSection/>
   <ReviewSection/>
   <NewsletterSection/>
   <Footer/>
   </>
  )
}
