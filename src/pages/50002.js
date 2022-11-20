import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Section from "../components/Section";
import ProgressBar from "react-scroll-progress-bar";

const SED = () => {
    return (
        <div>
            <NavBar/>
            <ProgressBar bgcolor="#7289da"/> 
            <div className="flex items-center justify-center w-screen">
                <h1 className="text-3xl font-bold">50002 - Software Engineering Design</h1>
            </div>
            <Section name={"Introduction and Test Driven Development (TDD)"}/>
            <Section name={"Refactoring"}/>
            <Section name={"Mock Objects"}/>
            <Section name={"Designing for Flexibility"}/>
            <Section name={"Re-use and Extensibility"}/>
            <Section name={"Code Metrics"}/>
            <Section name={"Creating Objects and Managing Dependencies"}/>
            <Section name={"Working With Legacy Software"}/> 
            <Section name={"Concurrency Patterns"}/>
            <Section name={"MapReduce"}/>
            <Section name={"Interactive Applications"}/>
            <Section name={"System Integration"}/>
            <Section name={"Distribution and Web Services"}/>
            <Section name={"Continuous Delivery and Agile Methods"}/>
            <Section name={"Recap of Principles and Patterns"}/>
            
            <Footer/>
        </div>
    );
}
export default SED;


