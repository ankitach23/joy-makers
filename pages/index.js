import AboutUs from "./AboutUs";
import Home from "./Home";
import Navbar from "./Navbar";
import Concerns from "./Concerns";
import Birthday from "./Birthday";
import Footer from "./Footer";

export default function Index(){
  return(
    <>
    <Navbar/>
    <Home/>
    <AboutUs/>
    <Concerns/>
    <Birthday/>
    <Footer/>
    </>
    
  )
}