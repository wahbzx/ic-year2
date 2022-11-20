import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ProgressBar from "react-scroll-progress-bar";
import Section from "../components/Section";


const NetworksAndCommunications = () => {
    return (
        <div>
            <NavBar/>
            <ProgressBar bgcolor="#7289da"/> 
            <div className="flex items-center justify-center w-screen">
                <h1 className="text-3xl font-bold">50005 - Networks and Communications</h1>
            </div>
            <Section name="Week 1"/>
            <Section name="Week 2"/>
            <Section name="Week 3"/>
            <Section name="Week 4"/>
            <Section name="Week 5"/>
            <Section name="Week 6"/>
            <Section name="Week 7"/>
            <Section name="Week 8"/>
            <Section name="Week 9"/>
            <Section name="Week 10"/>
            <Footer/>
        </div>
    );
}
export default NetworksAndCommunications;