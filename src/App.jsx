import Footer from './Components/Footer';
import Navbar from './Components/Navbar'
import PlansInclude from './Components/PlanInclude';
import LinkShortening from './Components/LinkShortage'
import CallToAction from'./Components/Calltoaction'
import Hero from'./Components/hero'
import BrandingSection from'./Components/Branding'
import StatsSection from'./Components/StateSeccion'
import Faq from'./Components/Faq'
function App() {

  return (
    
   <>
   <Navbar/>
   <Hero/>
   <PlansInclude/>
   <LinkShortening/>
   <BrandingSection/>
   <StatsSection/>
   <Faq/>
   <CallToAction/>
   <Footer/>
   </>
  )
}

export default App;
