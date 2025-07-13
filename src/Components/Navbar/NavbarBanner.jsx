import { motion } from "framer-motion";
import { useState } from "react";

export const NavbarBanner = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        isOpen && (
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 ,delay:1}}
             className="bg-primary text-sm text-center font-semibold p-1 hidden lg:block relative">
                Are you a University or School Student looking for an online tutoring partnership?
                <a href="#" className="text-secondary ml-2">
                    Contact Us
                </a>
                <div
                    className="absolute top-1/2 right-10 cursor-pointer transform -translate-y-1/2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    &#10005; {/* Adding an "X" symbol for the close button */}
                </div>
            </motion.div>
        )
    );
};

export default NavbarBanner;
