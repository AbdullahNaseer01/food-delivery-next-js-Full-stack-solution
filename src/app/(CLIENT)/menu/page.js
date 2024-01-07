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
    <FeaturedCategory/>
    <DealsCategory/>
    <BurgerCategory/>
    <PizzaCategory/>
    <PastaCategory/>
    <BaveragesCategory/>
    <SideCategory/>
    </>
    

  )
}

export default page