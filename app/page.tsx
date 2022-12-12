import AboutCollage from "../components/AboutCollage/AboutCollage";
import AboutCollage2 from "../components/AboutCollage2/AboutCollage2";
import AboutWeb from "../components/AboutWeb/AboutWeb";
import Banner from "../components/Banner/Banner";
import Collage from "../components/Collage/Collage";
import Collage2 from "../components/Collage2/Collage2";
import FinalCard from "../components/FinalCard/FinalCard";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Head from "./head";

export default function Home() {
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
