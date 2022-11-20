import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Section from "../components/Section";
import ProgressBar from "react-scroll-progress-bar";
import { ListItem, CardItem } from "../components/CardSection";

const OS = () => {
    return (
        <div>
            <NavBar/>
            <ProgressBar bgcolor="#7289da"/> 
            <div className="flex items-center justify-center w-screen">
                <h1 className="text-3xl font-bold">50004 - Operating Systems</h1>
            </div>
            <Section name={"Introduction"} Card={<SectionPart1/>}/>
            <a id="KD"><Section Card={<Lectures1/>} name={"Kernel Design"}/></a>
            <a id="Processes"><Section Card={<Lectures2/>} name={"Processes"}/></a>
            <a id="Threads"><Section Card={<Lectures3/>} name={"Threads"}/></a>
            <a id="Scheduling"><Section Card={<Lectures4/>} name={"Scheduling"}/></a>
            <a id="SynchI"><Section Card={<Lectures5/>} name={"Synchronisation I"}/></a>
            <a id="SynchII"><Section Card={<Lectures6/>} name={"Synchronisation II"}/></a>
            <a id="Deadlocks"><Section Card={<Lectures7/>} name={"Deadlocks"}/></a>
            <a id="MM"><Section Card={<Lectures8/>} name={"Memory Management"}/></a>
            <a id="DeviceM"><Section name={"Device Management"}/></a>
            <a id="DiskM"><Section name={"Disk Management"}/></a>
            <a id="FS"><Section name={"Filesystem"}/></a>
            <a id="Security"><Section name={"Security"}/></a>
            <Footer/>
        </div>
    );
}
export default OS;

const SectionPart1 = () => {
    return (
        <div className="flex flex-row">
            <CardItem Title={"Lectures"}/>
            <CardItem Title={"Part 1"} List={<Part1/>}/>
            <CardItem Title={"Part 2"} List={<Part2/>}/>
        </div>
    );
}


const Part1 = () => {
return (
    <ul>
        <a href="#KD"><ListItem text={"Kernel Design"}/></a>
        <a href="#Processes"><ListItem text={"Processes"}/></a>
        <a href="#Threads"><ListItem text={"Threads"}/></a>
        <a href="#Scheduling"><ListItem text={"Scheduling"}/></a>
        <a href="#SynchI"><ListItem text={"Synchronisation I"}/></a>
        <a href="#SynchII"><ListItem text={"Synchronisation II"}/></a>
        <a href="#Deadlocks"><ListItem text={"Deadlocks"}/></a>
    </ul>
);
}



const Part2 = () => {
    return (
        <ul>
        <a href="#MM"><ListItem text={"Memory Management"}/></a>
        <a href="#DeviceM"><ListItem text={"Device Management"}/></a>
        <a href="#DiskM"><ListItem text={"Disk Management"}/></a>
        <a href="#FS"><ListItem text={"Filesystem"}/></a>
        <a href="#Security"><ListItem text={"Security"}/></a>
        </ul>
    );
    }

    const Lectures1 = () => {
        return (
            <ul>
            <a href="https://imperial.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=f4e4479b-6bdf-4336-aa36-af2300fe4869">
                <ListItem text={"Lecture 1.1 - OS Introduction"}/>
            </a>
            </ul>
        );
        }
    const Lectures2 = () => {
        return (
            <ul>
            <a href="https://imperial.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=ce957b38-9d37-4332-98a2-af1d011231a6">
                <ListItem text={"Lecture 1.2 - Kernel Design"}/>
            </a>
            </ul>
        );
        }
    const Lectures3 = () => {
        return (
            <ul>
            <a href="https://imperial.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=a64fafe8-45f9-4b18-8389-af1d01122bff">
                <ListItem text={"Lecture 2 - Processes"}/>
            </a>
            <a href="https://imperial.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=55023415-e6b0-473b-b7e0-af2d00b5e667">
                <ListItem text={"Lecture 3.1 - Processes"}/>
            </a>
            <a href="https://imperial.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=5cd88be7-45bb-4c64-b0dc-af1d01121e31">
                <ListItem text={"Lecture 3.2 - Threads"}/>
            </a>
            </ul>
        );
        }
        const Lectures4 = () => {
            return (
                <ul>
                <a href="https://imperial.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=206caf60-fc62-463e-8ae2-af1d01122c9a">
                    <ListItem text={"Lecture 4 - Scheduling"}/>
                </a>
                </ul>
            );
            }
        
        const Lectures5 = () => {
            return (
                <ul>
                <a href="https://imperial.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=c36b60c9-3089-4eec-8414-af1d01121ede">
                    <ListItem text={"Lecture 5 - Synchornisation I"}/>
                </a>
                </ul>
            );
            }
        
        const Lectures6 = () => {
            return (
                <ul>
                <a href="https://imperial.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=eba5aa62-9e7d-486f-886a-af1d01122d6a">
                    <ListItem text={"Lecture 6 - Synchornisation II"}/>
                </a>
                </ul>
            );
            }
        const Lectures7 = () => {
            return (
                <ul>
                <a href="https://imperial.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=ee2d44e8-69ab-4495-b91e-af3b00b6aaab">
                    <ListItem text={"Lecture 7 - Deadlocks"}/>
                </a>
                <a href="https://imperial.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=8d8a7ba4-a036-4bf8-b8f3-af3c00c280da">
                    <ListItem text={"Lecture 7 - Deadlocks I (2021)"}/>
                </a>
                <a href="https://imperial.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=2b0984ce-6d6a-4be7-afaa-af3c00c280b6">
                    <ListItem text={"Lecture 7 - Deadlocks II (2021)"}/>
                </a>
                </ul>
            );
            }
        const Lectures8 = () => {
            return (
                <ul>
                <a href="https://imperial.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=9adbbec6-91c7-4ba9-b101-af1d01121f95">
                    <ListItem text={"Lecture 8 - Memory Management I"}/>
                </a>
                <a href="https://imperial.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=f55c301b-1733-42b1-9c5a-af1d01122e22">
                    <ListItem text={"Lecture 9 - Memory Management II"}/>
                </a>
                <a href="https://imperial.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=2dca4ab4-6371-487c-bdf9-af1d011220fc">
                    <ListItem text={"Lecture 10 - Memory Management III"}/>
                </a>
                <a href="https://imperial.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=b10e03f4-4f44-4958-8a54-af24008c3684">
                    <ListItem text={"Lecture 11 - Memory Management IV"}/>
                </a>
                <a href="https://imperial.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=769f3c23-7c64-46c2-8d6b-af1d01122f7d">
                    <ListItem text={"Lecture 12 - Memory Management V"}/>
                </a>
                </ul>
            );
            }