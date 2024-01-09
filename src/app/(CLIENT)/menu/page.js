import AddtoCartBtn from '../(components)/AddtoCartBtn'
import PastaCategory from '../(components)/PastaCategory';
import SideCategory from '../(components)/SideCategory';
import DealsCategory from '../(components)/DealsCategory';
import FeaturedCategory from '../(components)/FeaturedCategory';
import PizzaCategory from '../(components)/PizzaCategory';
import BaveragesCategory from '../(components)/BeveragesCategory';
import BurgerCategory from '../(components)/BurgerCagtegory';



const page =  () => {
  return (
    <>
    <main className=' mt-3'>
    <FeaturedCategory/>
    <DealsCategory/>
    <BurgerCategory/>
    <PizzaCategory/>
    <PastaCategory/>
    <BaveragesCategory/>
    <SideCategory/>
    </main>
    
    </>
    

  )
}

export default page