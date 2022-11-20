import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ProgressBar from "react-scroll-progress-bar";
import Section from "../components/Section";

const PS = () => {
    return (
        <div>
            <NavBar/>
            <ProgressBar bgcolor="#7289da"/> 
            <div className="flex items-center justify-center w-screen">
                <h1 className="text-3xl font-bold">50008 - Probability and Statistics</h1>
            </div>
            <Section name="Introduction"/>
            <Section name="Mathematical Methods"/>
            <Section name="Numerical Summaries"/>
            <Section name="Elementary Set Theory"/>
            <Section name="Probablity"/>
            <Section name="Discrete Random Variables"/>
            <Section name="Continuous Random Variables"/>
            <Section name="Jointly Distributed Random Variables"/>
            <Section name="Estimation"/>
            <Section name="Hypothesis Testing"/>
            <Footer/>
        </div>
    );
}
export default PS;