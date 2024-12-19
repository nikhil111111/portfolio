// Skills.jsx
import { motion } from 'framer-motion';
import { FaReact, FaNode, FaDatabase } from 'react-icons/fa';

const Skills = () => {
    return (
        <motion.section
            id="skills"
            className="py-24 bg-gray-50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <div className="max-w-7xl mx-auto px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl font-bold mb-4">
                        My <span className="text-orange-500">Skills</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        I specialize in building modern web applications using the latest technologies.
                        Here are the key technologies I work with:
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillsData.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className="flex items-center mb-4">
                                <span className="text-3xl text-orange-500 mr-3">
                                    {category.icon}
                                </span>
                                <h3 className="text-xl font-semibold">{category.title}</h3>
                            </div>
                            <div className="space-y-4">
                                {category.skills.map((skill) => (
                                    <div key={skill.name} className="relative">
                                        <div className="flex justify-between mb-1">
                                            <span className="text-gray-700">{skill.name}</span>
                                            <span className="text-orange-500">{skill.level}%</span>
                                        </div>
                                        <div className="h-2 bg-gray-200 rounded-full">
                                            <motion.div
                                                className="h-full bg-orange-500 rounded-full"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                transition={{ duration: 1, delay: 0.3 }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Skills */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-16 text-center"
                >
                    <h3 className="text-2xl font-semibold mb-6">Other Technologies</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {otherSkills.map((skill) => (
                            <span
                                key={skill}
                                className="px-4 py-2 bg-white rounded-full shadow-md text-gray-700 hover:shadow-lg transition-shadow"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

const skillsData = [
    {
        title: 'Frontend Development',
        icon: <FaReact />,
        skills: [
            { name: 'React.js', level: 90 },
            { name: 'JavaScript', level: 85 },
            { name: 'TypeScript', level: 80 },
            { name: 'Tailwind CSS', level: 85 }
        ]
    },
    {
        title: 'Backend Development',
        icon: <FaNode />,
        skills: [
            { name: 'Node.js', level: 85 },
            { name: 'Express.js', level: 80 },
            { name: 'RESTful APIs', level: 85 },
            { name: 'GraphQL', level: 75 }
        ]
    },
    {
        title: 'Database',
        icon: <FaDatabase />,
        skills: [
            { name: 'MongoDB', level: 85 },
            { name: 'Firebase', level: 80 },
        ]
    }
];

const otherSkills = [
    'Git', 'Redux', 'Jest',
    'Material UI'
];

export default Skills;
