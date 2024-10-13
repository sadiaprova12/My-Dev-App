import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const Bio = () => {
    return (
        <section className="bg-white text-center md:text-left rounded-xl p-2 md:p-5 shadow-md text-black">
            <h1 className="text-lg md:text-2xl font-bold mt-3">Dev Webdecoded</h1>
            <p className="text-secondary-foreground py-2">I'm a Junior Full-Stack Engineer.</p>
            <div className="flex flex-row gap-2 mt-2">
            <FaLinkedin className="text-blue-800 hover:text-blue-600 cursor-pointer"/>
            <SiGmail className="text-red-700 hover:text-red-600 cursor-pointer" />
            <FaGithub />

            </div>
        </section>
    );
    
};

export default Bio;