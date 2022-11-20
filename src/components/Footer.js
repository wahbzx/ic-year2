import {AiFillGithub, AiFillLinkedin} from "react-icons/ai"

const Footer = () => {
    return (
      <section className='min-h-s px-10 mt-10 py-10'>
          <div className='text-center px-10 font-medium'>
            <h2 className='text-3xl py-10'>
              Developed by <span className='text-[#7289da] hover:text-4xl hover:text-[#48578c] duration-300'>Wahbi</span>
            </h2>
            <p className="text-md py-5 leading-8">
              Summarisation and Compilation of Notes and Resources for 2nd Year Computing at Imperial
            </p>
          </div>
          <div className='text-5xl cursor-pointer flex flex-row justify-center gap-10'>
            <a href="https://www.github.com/wahbzx"><AiFillGithub className='hover:text-6xl duration-300'/></a>
            <a href="https://www.linkedin.com/in/wahbisaid"><AiFillLinkedin className='hover:text-6xl duration-300'/></a>
          </div>
        </section>
    );
  }
export default Footer;  