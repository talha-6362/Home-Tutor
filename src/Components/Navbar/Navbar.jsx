import { NavbarMenu } from "../../mockData/data"
import {MdComputer, MdMenu} from "react-icons/md"
import {motion} from "framer-motion"
import { useState } from "react"
import ResponsiveMenu  from "./ResponsiveMenu"
export const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.7 ,delay:0.7}}

    
    >

        <div className="container flex justify-between items-center py-6">
            {/* Logo Section*/}
            <div className="text-2xl flex items-center gap-2 font-bold">
                <MdComputer className="text-3xl text-secondary"/>
                <h1>E-Tutor</h1>
            </div>
            {/* Menu Section*/}

            <div className="hidden lg:block">
                <ul className="flex items-center gap-7">
                    {
                        NavbarMenu.map((item)=>
                        {
                            return(
                              <motion.li key={item.id}
                                whileHover={{scale:1.1}} 
                                transition={{duration:0.5}}>
                                  <a href={item.link} className="inline-block text-lg text-gray-600 text:sm xl:text-base py-1 px-2 xl:px-3
                                   hover:text-secondary transition-all duration-300 font-semibold"
                                  >
                                    {item.title}
                                  </a>
                                </motion.li>
                            )
                        }
                        )
                    }
                </ul>
            </div>





            {/* CTS Button Section*/}
            <div className="hidden lg:block space-x-6">
              <button className="font-semibold">Sign In</button>
              <button className="text-white bg-secondary font-semibold rounded-full px-6 py-2">Register</button>
            </div>
            {/* Mobile Humburger Section*/}
            <div className="lg:hidden " onClick={()=>setIsOpen(!isOpen)}>
              <MdMenu className="text-4xl "/>

            </div>
        </div>
    </motion.div>
    
    <ResponsiveMenu isOpen={isOpen}/> 
    </> 
  )
}
