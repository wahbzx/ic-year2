import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Section from "../components/Section";
import { Module } from "../components/Section";
import { CardItem, ListItem } from "../components/CardSection";
import ProgressBar from "react-scroll-progress-bar";

const MOC = () => {
    return (
        <div>
            <NavBar/>
            <ProgressBar bgcolor="#7289da"/>  
            <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
                <Module name={"50003 - Models of Computation"}/>
                <Section Card={<SectionPart1/>} name="Introduction to the course"/>
                <section >
                <a id="OSE"><Section Card={<CardItem Title={"Lectures"} List={<Lectures2/>}/>} name="Operational Semantics of Expressions"/></a>
                <a id="OSIL"><Section Card={<CardItem Title={"Lectures"} List={<Lectures3/>}/>} name="Operational Semantics of Imperative Languages"/></a>
                <a id="IT"><Section Card={<CardItem Title={"Lectures"} List={<Lectures4/>}/>} name="Induction over Terms"/></a>
                <a id="ID"><Section Card={<CardItem Title={"Lectures"} List={<Lectures5/>}/>} name="Induction over Derivations"/></a>
                <a id="IMS"><Section Card={<CardItem Title={"Lectures"} List={<Lectures6/>}/>} name="Induction over Multiple Steps"/></a>
                </section>
                <section >
                <a id="RM"><Section Card={<CardItem Title={"Lectures"} List={<Lectures7/>}/>} name="Register Machines"/></a>
                <a id="RMG"><Section Card={<CardItem Title={"Lectures"} List={<Lectures8/>}/>} name="Register Machine Gadgets"/></a>
                <a id="HP"><Section Card={<CardItem Title={"Lectures"}/>} name="Halting Problem"/></a>
                <a id="TM"><Section Card={<CardItem Title={"Lectures"}/>} name="Turing Machines"/></a>
                <a id="LC"><Section Card={<CardItem Title={"Lectures"}/>} name="Lambda Calculus"/></a>
                </section>
            </div>
            <Footer/>
        </div>
    );
}
export default MOC;

const SectionPart1 = () => {
    return (
        <div className="flex flex-row">
            <CardItem Title={"Lectures"} List={<Lectures1/>}/>
            <CardItem Title={"Part 1"} List={<Part1/>}/>
            <CardItem Title={"Part 2"} List={<Part2/>}/>
        </div>
    );
}


const Part1 = () => {
return (
    <ul>
        <a href="#OSE"><ListItem text={"Operational Semantics of Expressions"}/></a>
        <a href="#OSIL"><ListItem text={"Operational Semantics of Imperative Languages"}/></a>
        <a href="#IT"><ListItem text={"Induction over Terms"}/></a>
        <a href="#ID"><ListItem text={"Induction over Derivations"}/></a>
        <a href="#IMS"><ListItem text={"Induction over Multiple Steps"}/></a>
    </ul>
);
}



const Part2 = () => {
    return (
        <ul>
        <a href="#RM">
            <ListItem text={"Register Machines"}/>
        </a>
        <a href="#RMG">
            <ListItem text={"Register Machine Gadgets"}/>
        </a>
        <a href="#HP">
            <ListItem text={"Halting Problem"}/>
        </a>
        <a href="#TM">
            <ListItem text={"Turing Machines"}/>
        </a>
        <a href="#LC">
            <ListItem text={"Lambda Calculus"}/>
        </a>
        </ul>
    );
    }

const Lectures1 = () => {
return (
    <ul>
    <a href="https://imperial.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=ce957b38-9d37-4332-98a2-af1d011231a6">
        <ListItem text={"Lecture 1 - Introduction and Motivation - Tuesday - 11-10-2022"}/>
    </a>
    </ul>
);
}
const Lectures2 = () => {
    return (
        <ul>
            <a href="https://imperial.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=456c5c58-cbf5-40bb-9855-af1d011236ff" >
            <ListItem text={"Lecture 2 - Operational Semantics for Expressions+ Tut 1 - Friday - 14-10-2022"}/>
            </a>
        </ul>
    );
    }

const Lectures3 = () => {
    return (
        <ul>
        <a href="https://imperial.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=c32a1b60-3356-430c-ba3c-af1d01123298" >
            <ListItem text={"Lecture 3 - Operational Semantics of Commands + Tut 1 - Tuesday - 18-10-2022"}/>
        </a>
        <a href="https://imperial.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=23af6bd1-2a02-4cf9-8dc8-af1d011237ff" >
            <ListItem text={"Lecture 4 - Operational Semantics of Commands + Tut 2 - Friday - 21-10-2022"}/>
        </a>
        <a href="https://imperial.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=f75d4416-d8d5-4de7-92d4-af1d0112334a" >
            <ListItem text={"Lecture 5 - Operational Semantics of Commands continued + Tut 2 + little bit of Tut 3 - Tuesday - 25-10-2022"}/>
        </a>
        </ul>
    );
    }

const Lectures4 = () => {
    return (
        <ul>
            <a href="https://imperial.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=c2dcec23-2855-4b76-9ec4-af1d011238dd" >
            <ListItem text={"Lecture 6 - Properties of Expressions + Tut 4 - Friday - 28-10-2022"}/>
            </a>
        </ul>
    );
    }


const Lectures5= () => {
    return (
        <ul>
            <a href="https://imperial.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=9a4dcec6-537e-481b-8a2a-af1d01123401" >
            <ListItem text={"Lecture 7 - Induction over Derivations - Tuesday - 01-11-2022"}/>
            </a>
            <a href="https://imperial.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=93e924ef-a9cf-4967-9937-af1d011239b4" >
            <ListItem text={"Lecture 8 - Induction over Derivations+ Tut 5 - Friday - 04-11-2022"}/>
            </a>

        </ul>
    );
    }
    const Lectures6 = () => {
        return (
            <ul>
                <a href="https://imperial.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=ebab106b-304c-4b8e-8a19-af1d011234d9" >
                <ListItem text={"Lecture 9 - Many Steps of Evaluation - Tuesday 08-11-2022"}/>
                </a>
            </ul>
        );
        }

const Lectures7 = () => {
    return (
        <ul>
            <a href="https://imperial.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=9c770fb1-20da-4797-84a1-af1d01123a67" >
            <ListItem text={"Lecture 10 - Register Machines - Friday 11-11-2022"}/>
            </a>
            <a href="https://imperial.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=6e51038e-fbef-4938-95ad-af1d011235c3" >
            <ListItem text={"Lecture 11 - Register Machines and Register Machine Gadgets - Tuesday 15-11-2022"}/>
            </a>
        </ul>
       
    );
}

const Lectures8 = () => {
    return (
        <ul>
            <a href="https://imperial.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=6e51038e-fbef-4938-95ad-af1d011235c3" >
            <ListItem text={"Lecture 11 - Register Machines and Register Machine Gadgets - Tuesday 15-11-2022"}/>
            </a>
            <a href="https://imperial.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=6e51038e-fbef-4938-95ad-af1d011235c3" >
            <ListItem text={"Lecture 12 - Register Machine Gadgets - Friday 18-11-2022"}/>
            </a>
        </ul>
       
    );
}
