import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here
    };

    return (
        <motion.section
            id="contact"
            className="py-24 bg-gray-50"
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
                        Get In <span className="text-orange-500">Touch</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Feel free to reach out to me for any questions or opportunities
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

                        {contactInfo.map((info) => (
                            <div key={info.title} className="flex items-start space-x-4">
                                <span className="text-orange-500 mt-1">{info.icon}</span>
                                <div>
                                    <h4 className="font-semibold">{info.title}</h4>
                                    <p className="text-gray-600">{info.content}</p>
                                </div>
                            </div>
                        ))}

                        {/* Social Links */}
                        <div className="pt-8">
                            <h4 className="font-semibold mb-4">Follow Me</h4>
                            <div className="flex space-x-4">
                                {socialLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition-colors"
                                    >
                                        {link.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-colors"
                                    required
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-colors"
                                    required
                                />
                            </div>
                            <input
                                type="text"
                                placeholder="Subject"
                                className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-colors"
                                required
                            />
                            <textarea
                                placeholder="Your Message"
                                rows="6"
                                className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-colors resize-none"
                                required
                            ></textarea>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-4 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                                type="submit"
                            >
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

const contactInfo = [
    {
        title: "Email",
        content: "nikhil.garg.2509@gmail.com",
        icon: <FaEnvelope size={20} />
    },
    {
        title: "Phone",
        content: "+91 7082130367",
        icon: <FaPhone size={20} />
    },
    {
        title: "Location",
        content: "Ambala, Haryana, India",
        icon: <FaMapMarkerAlt size={20} />
    }
];

const socialLinks = [
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nikhil-garg-6539911a3/",
        icon: <FaLinkedin size={20} />
    },
    {
        name: "GitHub",
        url: "https://github.com/nikhilgarg2509",
        icon: <FaGithub size={20} />
    }
];

export default Contact;
