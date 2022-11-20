import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Section from "../components/Section";
import ProgressBar from "react-scroll-progress-bar";
import { ListItem } from "../components/CardSection";

const SED = () => {
    return (
        <div>
            <NavBar/>
            <ProgressBar bgcolor="#7289da"/> 
            <div className="flex items-center justify-center w-screen">
                <h1 className="text-3xl font-bold">50002 - Software Engineering Design</h1>
            </div>
            <Section Card={<Lecture1/>} name={"Introduction and Test Driven Development (TDD)"}/>
            <Section Card={<Lecture2/>} name={"Refactoring"}/>
            <Section Card={<Lecture3/>} name={"Mock Objects"}/>
            <Section Card={<Lecture4/>} name={"Designing for Flexibility"}/>
            <Section Card={<Lecture5/>} name={"Re-use and Extensibility"}/>
            <Section Card={<Lecture6/>} name={"Code Metrics"}/>
            <Section Card={<Lecture7/>} name={"Creating Objects and Managing Dependencies"}/>
            <Section Card={<Lecture8/>} name={"Working With Legacy Software"}/> 
            <Section Card={<Lecture9/>} name={"Concurrency Patterns"}/>
            <Section Card={<Lecture10/>} name={"MapReduce"}/>
            <Section Card={<Lecture11_12/>} name={"Interactive Applications"}/>
            <Section Card={<Lecture13/>} name={"System Integration"}/>
            <Section name={"Distribution and Web Services"}/>
            <Section name={"Continuous Delivery and Agile Methods"}/>
            <Section name={"Recap of Principles and Patterns"}/>
            
            <Footer/>
        </div>
    );
}
export default SED;

const Lecture1 = () => {
    return (
    <ul>
    <a href="https://imperial.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=d21028be-8dfd-4c1c-b373-af2900965a6a">
        <ListItem text={"Lecture 1 - Intro and TDD"}/>
    </a>
    </ul>
    );
    }

const Lecture2 = () => {
    return (
    <ul>
    <a href="https://imperial.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=57f54915-eb2c-465a-80df-af2e00a9675b">
        <ListItem text={"Lecture 2 - Refactoring"}/>
    </a>
    </ul>
    );
    }

const Lecture3 = () => {
    return (
    <ul>
    <a href="https://imperial.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=932b138b-e0b1-4476-83d7-af3001217d1d">
        <ListItem text={"Lecture 3 - Mock Objects"}/>
    </a>
    </ul>
    );
    }
const Lecture4 = () => {
    return (
    <ul>
    <a href="https://imperial.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=730e4555-7746-4d69-9cb1-adc900e7add1">
    <ListItem text={"Lecture 4 - Designing for Flexibility"}/>
    </a>
    </ul>
    );
}
const Lecture5 = () => {
    return (
    <ul>
    <a href="https://imperial.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=49332064-d9ec-4391-b9da-af370076920c">
    <ListItem text={"Lecture 5 - Re-use and Extensibility"}/>
    </a>
    </ul>
    );
}
const Lecture6 = () => {
    return (
    <ul>
    <a href="https://imperial.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=3c4f37cb-536b-4863-968e-af340118386d">
    <ListItem text={"Lecture 6 - Code Metrics"}/>
    </a>
    </ul>
    );
}
const Lecture7 = () => {
    return (
    <ul>
    <a href="https://imperial.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=bfe8c56b-bcf5-4ab6-b31d-af3e00a5b016">
    <ListItem text={"Lecture 7 - Creating Objects and Managing Dependencies"}/>
    </a>
    </ul>
    );
}
const Lecture8 = () => {
    return (
    <ul>
    <a href="https://imperial.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=1642eefb-7b4d-407f-9452-af340118395d">
    <ListItem text={"Lecture 8 - Working With Legacy Software"}/>
    </a>
    </ul>
    );
}
const Lecture9 = () => {
    return (
    <ul>
    <a href="https://imperial.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=6fdf2442-8e01-40bc-bec3-af4500df8765">
    <ListItem text={"Lecture 9 - Concurrency Patterns"}/>
    </a>
    </ul>
    );
}
const Lecture10 = () => {
    return (
    <ul>
    <a href="https://imperial.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=ddd6089c-8a24-4953-a4ee-af3401183a29">
    <ListItem text={"Lecture 10 - MapReduce"}/>
    </a>
    </ul>
    );
}
const Lecture11_12 = () => {
    return (
    <ul>
    <a href="https://imperial.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=299eaa38-ba76-4a49-9ee7-af4c0099ace4">
    <ListItem text={"Lecture 11 - Interactive Applications"}/>
    </a>
    <a href="https://imperial.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=cf25b43b-fccb-4e06-af2a-af3401183ade">
    <ListItem text={"Lecture 12 - Interactive Applications Part 2"}/>
    </a>
    </ul>
    );
}


const Lecture13 = () => {
    return (
    <ul>
    <a href="https://imperial.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=b38faf70-4dcd-49fd-b686-af5300b48c11">
        <ListItem text={"Lecture 13 - System Integration"}/>
    </a>
    </ul>
    );
    }

    