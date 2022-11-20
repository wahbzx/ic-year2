import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ProgressBar from "react-scroll-progress-bar";
import Section from "../components/Section";

const Lab2 = () => {
    return (
        <div>
            <NavBar/>
            <ProgressBar bgcolor="#7289da"/> 
            <div className="flex items-center justify-center w-screen">
                <h1 className="text-3xl font-bold">50007.1 - Laboratory 2</h1>
            </div>
            <Section name={"Autumn Term - Pintos"}/>
            <Section name={"Spring Term - WACC"}/>
            <Footer/>
        </div>
    );
}
export default Lab2;