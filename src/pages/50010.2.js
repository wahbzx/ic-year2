import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ProgressBar from "react-scroll-progress-bar";
import Section from "../components/Section";
const Law = () => {
    return (
        <div>
            <NavBar/>
            <ProgressBar bgcolor="#7289da"/> 
            <div className="flex items-center justify-center w-screen">
                <h1 className="text-3xl font-bold">50010.2 - An Introduction to Law for Computer Scientists</h1>
            </div>
            <Section name="N/A"/>
            <Footer/>
        </div>
    );
}
export default Law;