import AboutCollage from "../../components/Template1/AboutCollage/AboutCollage";
import AboutCollage2 from "../../components/Template1/AboutCollage2/AboutCollage2";
import AboutWeb from "../../components/Template1/AboutWeb/AboutWeb";
import Banner from "../../components/Template1/Banner/Banner";
import Collage from "../../components/Template1/Collage/Collage";
import Collage2 from "../../components/Template1/Collage2/Collage2";
import FinalCard from "../../components/Template1/FinalCard/FinalCard";
import Footer from "../../components/Template1/Footer/Footer";
import Navbar from "../../components/Template1/Navbar/Navbar";
import Head from "./head";

export default function Template1() {
  return (
    <div>
        <Head/>
        <Navbar/>
        <Banner/>
        <AboutWeb/>
        <Collage/>
        <AboutCollage/>
        <Collage2/>
        <AboutCollage2/>
        <FinalCard/>
        <Footer/>
    </div>
  )
}
