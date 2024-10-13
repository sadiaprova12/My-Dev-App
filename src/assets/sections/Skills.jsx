const skills = [
    "JavaScript (ES6+)",
    "React.js",
    "Node.js",
    "Expres.js",
    "MongoDB",
    "SQL",
    "HTML & CSS",
    "Git & GitHub",
    "RESTful APIs",
    "Test-Dtiven Development (TDD)",
    "Agile/Scrum",
];

const Skills = () => {
    return (
        <section className="bg-white text-left rounded-xl p-2 md:p-5 shadow-md mt-6 text-black">
            <h2 className="text-slate-lg md:text-slate-2xl text-secondary-foreground mb-3 text-slate-500 font-semibold">Skills</h2>
            <ul className="flex flex-wrap leading-10 ">
                {skills.map((skill, index) => (
                   <li key={index}>{skill}</li>
                ))}
            </ul>
        </section>
    )
}

export default Skills;