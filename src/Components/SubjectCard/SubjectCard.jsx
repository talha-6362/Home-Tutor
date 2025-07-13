// Components/SubjectCard/SubjectCard.jsx
import { motion } from "framer-motion";
import { FaComputer, FaBook } from "react-icons/fa6";

// Subject List Array
const SubjectList = () => [
    {
        id: 1,
        name: "Engineering",
        icon: <FaComputer />,
        color: '#0063ff',
        delay: 0.2,
    },
    {
        id: 2,
        name: "Mathematics",
        icon: <FaBook />,
        color: '#00c986',
        delay: 0.3,
    },
    {
        id: 3,
        name: "Science",
        icon: <FaBook />,
        color: '#922aee',
        delay: 0.4,
    },
    {
        id: 4,
        name: "English",
        icon: <FaComputer />,
        color: '#ea7516',
        delay: 0.5,
    },
    {
        id: 5,
        name: "Social Studies",
        icon: <FaBook />,
        color: '#075267',
        delay: 0.6,
    },
    {
        id: 6,
        name: "Computer Science",
        icon: <FaComputer />,
        color: '#986d1d',
        delay: 0.7,
    },
    {
        id: 7,
        name: "Foreign Language",
        icon: <FaBook />,
        color: '#0a6c3d',
        delay: 0.8,
    },
    {
        id: 8,
        name: "Test Prep",
        icon: <FaBook />,
        color: '#0a6c3d',
        delay: 0.9,
    },
    {
        id: 9,
        name: "Music",
        icon: <FaComputer />,
        color: '#0a6c3d',
        delay: 1.0,
    },
    {
        id: 10,
        name: "Art",
        icon: <FaBook />,
        color: '#0a6c3d',
        delay: 1.1,
    },
    {
        id: 11,
        name: "Business",
        icon: <FaComputer />,
        color: '#0a6c3d',
        delay: 1.2,
    },
    {
        id: 12,
        name: "Health & Wellness",
        icon: <FaBook />,
        color: '#0a6c3d',
        delay: 1.3,
    },
    {
        id: 13,
        name: "Counseling",
        icon: <FaComputer />,
        color: '#0a6c3d',
        delay: 1.4,
    },
    {
        id: 14,
        name: "Special Education",
        icon: <FaComputer />,
        color: '#0a6c3d',
        delay: 1.5,
    },
    {
        id: 15,
        name: "Career & Technical Education",
        icon: <FaBook />,
        color: '#0a6c3d',
        delay: 1.6,
    },
    {
        id: 16,
        name: "Professional Development",
        icon: <FaComputer />,
        color: '#0a6c3d',
        delay: 1.7,
    },
    {
        id: 17,
        name: "Social Emotional Learning",
        icon: <FaComputer />,
        color: '#0a6c3d',
        delay: 1.8,
    },
    {
        id: 18,
        name: "Physical Education",
        icon: <FaBook />,
        color: '#0a6c3d',
        delay: 1.9,
    },
    {

        id: 19,
        name: "Other",
        icon: <FaBook />,
        color: '#0a6c3d',
        delay: 2.0,
    },
    {
        id: 20,
        name: "All Subjects",
        icon: <FaBook />,
        color: '#0a6c3d',
        delay: 2.1,
    },

];

// Subject Card Component
const SubjectCard = () => {
    return (
        <div className="container py-14 md:py-24">
            {/* Header Section */}
            <div className="space-y-4 p-6 text-center max-w-[600px] mx-auto mb-5">
                <h1 className="uppercase font-semibold text-orange-500">
                    Our Tutor Subjects
                </h1>
                <p className="font-semibold text-3xl">
                    Find Online Tutor for Any Subject
                </p>
            </div>

            {/* Subject List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {
                    SubjectList().map((subject) => (
                        <motion.div
                            key={subject.id}
                            initial={{ opacity: 0, x: -200 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                type: 'spring',
                                stiffness: 100,
                                damping: 20,
                                delay: subject.delay,
                            }}
                            className="border rounded-lg border-secondary/20 p-4 flex justify-start items-center gap-4 hover:scale-105 hover:shadow-xl duration-200 cursor-pointer"
                        >
                            <div 
                                style={{
                                    color: subject.color,
                                    backgroundColor: subject.color + '20'
                                }}
                                className="w-10 h-10 rounded-md flex justify-center items-center"
                            >
                                {subject.icon}
                            </div>
                            <p>{subject.name}</p>
                        </motion.div>
                    ))
                }
            </div>
        </div>
    );
};

export default SubjectCard;
