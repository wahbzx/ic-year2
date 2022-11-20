import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ProgressBar from "react-scroll-progress-bar";

const DRP = () => {
    return (
        <div>
            <NavBar/>
            <ProgressBar bgcolor="#7289da"/> 
            <div className="flex items-center justify-center w-screen">
                <h1 className="text-3xl font-bold">2nd Year Summer Group Project - DRP</h1>
            </div>
            <Footer/>
        </div>
    );
}
export default DRP;