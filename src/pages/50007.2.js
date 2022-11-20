import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ProgressBar from "react-scroll-progress-bar";
import Section from "../components/Section";

const Prolog = () => {
    return (
        <div>
            <NavBar/>
            <ProgressBar bgcolor="#7289da"/> 
            <div className="flex items-center justify-center w-screen">
                <h1 className="text-3xl font-bold">50007.2 - Introduction to Prolog</h1>
            </div>
            <Section name="Prolog Concepts"/>
            <Section name="Prolog Constructs"/>
            <Section name="Prolog Computation"/>
            <Section name="Prolog Lists & Arithmetics"/>
            <Section name="Prolog Negation"/>
            <Section name="Prolog Control"/>
            <Section name="Prolog Aggregation"/>
            <Footer/>
        </div>
    );
}
export default Prolog;