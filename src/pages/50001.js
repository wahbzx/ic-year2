import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Section from "../components/Section";
import ProgressBar from "react-scroll-progress-bar";
import { ListItem } from "../components/CardSection";

const ADA = () => {
    return (
        <div>
            <NavBar/>
            <ProgressBar bgcolor="#7289da"/> 
            <div className="flex items-center justify-center w-screen">
                <h1 className="text-3xl font-bold">50001 - Algorithm Design and Analysis</h1>
            </div>
            <Section Card={<Lectures1/>} name={"Introduction"}/>
            <Section Card={<Lectures2/>} name={"Evaluation"}/>
            <Section Card={<Lectures3/>} name={"Asymptotics"}/>
            <Section Card={<Lectures4/>} name={"Lists"}/>
            <Section Card={<Lectures5/>} name={"Abstract Datatypes"}/>
            <Section Card={<Lectures6/>} name={"Divide & Conquer"}/>
            <Section Card={<Lectures7/>}name={"Dynamic Programming"}/>
            <Section Card={<Lectures7/>} name={"Edit Distance"}/>
            <Section name={"Bitonic Travelling Salesman"}/>
            <Section Card={<Lectures8/>} name={"Amortised Analysis"}/>
            <Section Card={<Lectures9/>} name={"Random Access Lists"}/>
            <Section name={"Searching"}/>
            <Section name={"Red Black Trees"}/>
            <Section name={"Randomised Algorithms"}/>
            <Section name={"Treaps"}/>
            <Section name={"Randomised Binary Search"}/>
            <Section name={"Mutable Data Structures"}/>
            <Footer/>
        </div>
    );
}
export default ADA;


const Lectures1 = () => {
    return (
        <ul>
        <a href="https://imperial.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=292b16da-340f-4e72-81a5-af1d011836f6">
            <ListItem text={"Lecture 1 - Introduction and Evaluation"}/>
        </a>
        </ul>
    );
    }

    const Lectures2 = () => {
        return (
            <ul>
            <a href="https://imperial.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=292b16da-340f-4e72-81a5-af1d011836f6">
                <ListItem text={"Lecture 1 - Introduction and Evaluation"}/>
            </a>
            <a href="https://imperial.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=292b16da-340f-4e72-81a5-af1d011836f6">
                <ListItem text={"Lecture 2 - Evaluation and Asymptotics"}/>
            </a>
            </ul>
        );
        }

    const Lectures3 = () => {
        return (
            <ul>
            <a href="https://imperial.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=292b16da-340f-4e72-81a5-af1d011836f6">
                <ListItem text={"Lecture 2 - Evaluation and Asymptotics"}/>
            </a>
            <a href="https://imperial.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=292b16da-340f-4e72-81a5-af1d011836f6">
                <ListItem text={"Lecture 3 - Asymptotics and Lists"}/>
            </a>
            </ul>
        );
        }
    const Lectures4 = () => {
        return (
            <ul>
            <a href="https://imperial.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=292b16da-340f-4e72-81a5-af1d011836f6">
                <ListItem text={"Lecture 3 - Asymptotics and Lists"}/>
            </a>
            <a href="https://imperial.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=292b16da-340f-4e72-81a5-af1d011836f6">
                <ListItem text={"Lecture 4 - Lists and Abstract Datatypes"}/>
            </a>
            </ul>
        );
        }
    const Lectures5 = () => {
        return (
            <ul>
            <a href="https://imperial.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=292b16da-340f-4e72-81a5-af1d011836f6">
                <ListItem text={"Lecture 4 - Lists and Abstract Datatypes"}/>
            </a>
            <a href="https://imperial.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=292b16da-340f-4e72-81a5-af1d011836f6">
                <ListItem text={"Lecture 5 - Abstract Datatypes and Divide & Conquer"}/>
            </a>
            </ul>
        );
        }  
        const Lectures6 = () => {
            return (
                <ul>
                    <a href="https://imperial.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=292b16da-340f-4e72-81a5-af1d011836f6">
                        <ListItem text={"Lecture 5 - Abstract Datatypes and Divide & Conquer"}/>
                    </a>
                    <a href="https://imperial.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=1b8cbb62-459a-48fd-9839-af1d01183d4c">
                        <ListItem text={"Tutorial 1 - Sheet 1"}/>
                    </a>
                </ul>
            );
            }           
    const Lectures7 = () => {
        return (
            <ul>
                <a href="https://imperial.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=292b16da-340f-4e72-81a5-af1d011836f6">
                    <ListItem text={"Lecture 6 - Dynamic Programming and Edit Distance"}/>
                </a>
                <a href="https://imperial.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=3b82c211-b2c2-4bb2-9c45-af1d01183e1b">
                    <ListItem text={"Tutorial 2 - Sheet 2 + Coursework"}/>
                </a>
            </ul>
        );
        }
    const Lectures8 = () => {
        return (
            <ul>
            <a href="https://imperial.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=24c93682-2a09-4b5d-9f66-af1d0118d3a9">
                <ListItem text={"Lecture 7 - Amortized Analysis"}/>
            </a>
            <a href="https://imperial.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=c4e6ff98-8e0a-40ca-a79a-af1d01183f08">
                <ListItem text={"Tutorial 3 - Sheet 3"}/>
            </a>
            <a href="https://imperial.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=045394f6-5553-4c45-9a3b-af1d0118d471">
                <ListItem text={"Lecture 8 - Amortized Analysis and Random Access Lists"}/>
            </a>
            </ul>
        );
        }
    const Lectures9 = () => {
        return (
            <ul>
            <a href="https://imperial.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=045394f6-5553-4c45-9a3b-af1d0118d471">
                <ListItem text={"Lecture 8 - Amortized Analysis and Random Access Lists"}/>
            </a>
            <a href="https://imperial.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=292b16da-340f-4e72-81a5-af1d011836f6">
                <ListItem text={"Tutorial 4 - Sheet 4"}/>
            </a>
            </ul>
        );
        }
    