import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ProgressBar from "react-scroll-progress-bar";
import Section from "../components/Section";

const Compilers = () => {
    return (
        <div>
            <NavBar/>
            <ProgressBar bgcolor="#7289da"/> 
            <div className="flex items-center justify-center w-screen">
                <h1 className="text-3xl font-bold">50006 - Compilers</h1>
            </div>
            <Section name="Chapter 1"/>
            <Section name="Chapter 2"/>
            <Section name="Chapter 3"/>
            <Section name="Chapter 4"/>
            <Section name="Chapter 5"/>
            <Section name="Chapter 6"/>
            <Section name="Chapter 7"/>
            <Footer/>
        </div>
    );
}
export default Compilers;