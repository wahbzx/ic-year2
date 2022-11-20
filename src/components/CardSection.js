import React from 'react';
import { Link } from 'react-router-dom'

const CardSection = () => {
    return (
        <section className='flex md:flex-row flex-col justify-center'>
        <CardItem Title={"Term 1"} List={<List1/>}/>
        <CardItem Title={"Term 2"} List={<List2/>}/>
        <CardItem Title={"Term 3"} List={<List3/>}/>
      </section>
    );
}

export default CardSection;

export const CardItem = ({Title, List}) => {
  return (
    <div className='flex flex-col ml-10 mr-10 mt-10
                  bg-gray-100  w-1/3 h-100 items-center
                  shadow-lg hover:shadow-lg duration-300
                  rounded-xl hover:shadow-[#7289da]
                  dark:bg-[#282b30]'>
      <h1 className='text-2xl font-bold py-10'>{Title}</h1>
      {List}
    </div>
  );
}

  export const ListItem = ({text},{link}) => {
    return (
      <li className='text-ml py-4 font-bold text-[#7289da] px-10 dark:text-[	#7289da]'>
        {text}
      </li>
    );
  }
  
  const List1 = () => {
    return (
      <ul>
        <Link to="/50001" ><ListItem text={"50001 - Algorithm Design and Analysis"}/></Link>
        <Link to="/50002" ><ListItem text={"50002 - Software Engineering Design"}/></Link>
        <Link to="/50003" ><ListItem text={"50003 - Models of Computation"}/></Link>
        <Link to="/50004" ><ListItem text={"50004 - Operating Systems"}/></Link>
        <Link to="/50007.1" ><ListItem text={"50007.1 - Laboratory 2 - Pintos"}/></Link>
      </ul>
    );
  }
  
  const List2 = () => {
    return (
      <ul>
        <Link to="50005" ><ListItem text={"50005 - Networks and Communications"}/></Link>
        <Link to="50006" ><ListItem text={"50006 - Compilers"}/></Link>
        <Link to="50007.1" ><ListItem text={"50007.1 - Laboratory 2 - WACC"}/></Link>
        <Link to="50007.2" ><ListItem text={"50007.2 - Introduction to Prolog"}/></Link>
        <Link to="50008" ><ListItem text={"50008 - Probability and Statistics"}/></Link>
        <Link to="50010.2" ><ListItem text={"50010.2 - An Introduction to Law for Computer Scientists"}/></Link>
      </ul>
    );
  }
  
  const List3 = () => {
    return (
      <ul>
        <Link to="DRP" ><ListItem text={"2nd Year Summer Group Project - DRP"}/></Link>
      </ul>
    );
  }
  
