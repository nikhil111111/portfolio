import { motion } from 'framer-motion';

const About = () => {
    return (
        <motion.section
            id="about"
            className="border-b border-neutral-900 py-20 max-w-7xl mx-auto px-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <motion.h2
                className="text-4xl font-bold text-center mb-16"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                About <span className="text-orange-500">Me</span>
            </motion.h2>

            <div className="flex flex-col lg:flex-row items-start gap-10">
                {/* Image Container */}
                <motion.div
                    className="lg:w-1/2 flex justify-center"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <div className="relative w-full max-w-md">
                        <div className="absolute inset-0 bg-orange-500 rounded-lg transform translate-x-3 translate-y-3 -z-10"></div>
                        <img
                            src="/nikhil.jpg"
                            alt="Profile"
                            className="rounded-lg w-full aspect-[4/5] object-cover object-top shadow-lg" // Added object-top and adjusted aspect ratio
                        />
                    </div>
                </motion.div>

                {/* Content Container */}
                <motion.div
                    className="lg:w-1/2"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <h3 className="text-2xl font-semibold mb-4">
                        Full Stack Developer
                    </h3>

                    <p className="text-gray-600 mb-6">
                        I am a passionate Full Stack Developer with expertise in building
                        responsive and dynamic web applications. With a strong foundation
                        in both front-end and back-end development, I create seamless
                        user experiences using modern technologies.
                    </p>

                    <div className="space-y-4">
                        <div>
                            <h4 className="text-lg font-semibold text-orange-500 mb-2">Technical Expertise</h4>
                            <p className="text-gray-600">
                                Proficient in React.js, Node.js, MongoDB, and modern web technologies.
                                Experienced in building scalable applications and RESTful APIs.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-orange-500 mb-2">Problem Solving</h4>
                            <p className="text-gray-600">
                                Dedicated to writing clean, efficient code and implementing
                                optimal solutions for complex technical challenges.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-orange-500 mb-2">Continuous Learning</h4>
                            <p className="text-gray-600">
                                Constantly updating my skills and staying current with the latest
                                web development trends and best practices.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default About;
