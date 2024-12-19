// Projects.jsx
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    return (
        <motion.section
            id="projects"
            className="py-24 bg-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <div className="max-w-7xl mx-auto px-8">
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl font-bold mb-4">
                        My <span className="text-orange-500">Projects</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Here are some of my recent projects that showcase my skills and experience
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className="relative group">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-white rounded-full hover:bg-orange-500 hover:text-white transition-colors"
                                    >
                                        <FaGithub size={20} />
                                    </a>
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-white rounded-full hover:bg-orange-500 hover:text-white transition-colors"
                                    >
                                        <FaExternalLinkAlt size={20} />
                                    </a>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-gray-600 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

const projects = [
    {
        title: "Online Web Compiler",
        description: "A Comprehensive Online Web Compiler to write,Save,Preview there code in there browser.",
        image: "/compiler.png",
        github: "https://github.com/nikhil111111/onlineWDcompiler",
        live: "https://frontendcompiler.vercel.app/",
        technologies: ["React", "Node.js", "MongoDB", "Express.js"]
    },
    {
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce platform with payment integration and admin dashboard.",
        image: "/ecommerce.jpg",
        github: "https://github.com/nikhil111111/ecommerce",
        live: "https://github.com/nikhil111111/ecommerce",
        technologies: ["React", "Node.js", "MongoDB", " RazorPay"]
    },
    {
        title: "AppointEase",
        description: "A full-stack Appointment management platform  and admin dashboard.",
        image: "/doctor.png",
        github: "https://github.com/nikhil111111/doctor",
        live: "https://github.com/nikhil111111/doctor",
        technologies: ["React", "Node.js", "MongoDB", "Express.js"]
    },
    // Add more projects...
];

export default Projects;
