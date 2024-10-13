import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const Bio = () => {
    return (
        <section className="bg-white text-center md:text-left rounded-xl p-5 md:p-5 shadow-md text-black">
            <img src="/profile-pic.jpg" 
            alt="profile pic" 
            className="h-32 w-32 rounded-full"
            />
            <h1 className="text-lg md:text-2xl font-bold mt-3 ">Dev Webdecoded</h1>
            <p className="text-secondary-foreground py-2  text-slate-500">I'm a Junior Full-Stack Engineer.</p>
            <div className="flex flex-row gap-2 mt-2">
                <a href="https://www.linkedin.com/in/sadiaprova14" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-blue-800 hover:text-blue-600 cursor-pointer"/>
            </a>
            <a href="https://mail.google.com" target="_blank" rel="noopener noreferrer">
            <SiGmail className="text-red-700 hover:text-red-600 cursor-pointer" />
            </a>
            <a href="https://github.com/sadiaprova12" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-black hover:text-purple-950 cursor-pointer"/>
            </a>
            </div>
        </section>
    );
    
};

export default Bio;