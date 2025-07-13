import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';
import { MdComputer } from 'react-icons/md';
import { AiOutlineMail } from 'react-icons/ai';
import { BiPhoneCall } from 'react-icons/bi';


const footerBgUrl = '/Assets/Footer.avif'; // If the image is in the 'public' folder


const FooterBg = {
    backgroundImage: `url(${footerBgUrl})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom center",
};

export const Footer = () => {
  return (
    <div style={FooterBg} className='rounded-t-3xl'>
        <div className='bg-primary/5'>
            <div className='container'>
                <div className='grid md:grid-cols-4 md:gap-4 py-5 border-t-2 border-gray-300/10 text-black'>
                    {/* Brand Info Section */}
                    <div className='py-8 px-4 space-y-4'>
                        <div className='text-2xl flex items-center gap-2 font-bold uppercase'>
                            <MdComputer className='text-secondary text-4xl' />
                            <p className=''>E-Tutor</p>
                        </div>
                        <p>
                            E-Tutor is committed to providing quality online tutoring services that cater to students worldwide. 
                            Our mission is to offer personalized learning experiences that empower students to reach their academic potential. 
                            Whether you re preparing for exams, seeking homework help, or looking to learn new skills, E-Tutor is here to guide you every step of the way.
                        </p>
                        <div className='flex gap-4'>
                            <a href="#" className='hover:text-secondary duration-200'>
                                <HiLocationMarker className='text-3xl' />
                            </a>
                            <a href="#" className='hover:text-secondary duration-200'>
                                <FaInstagram className='text-3xl' />
                            </a>
                            <a href="#" className='hover:text-secondary duration-200'>
                                <FaFacebook className='text-3xl' />
                            </a>
                            <a href="#" className='hover:text-secondary duration-200'>
                                <FaTwitter className='text-3xl' />
                            </a>
                            <a href="#" className='hover:text-secondary duration-200'>
                                <FaYoutube className='text-3xl' />
                            </a>
                            <a href="#" className='hover:text-secondary duration-200'>
                                <AiOutlineMail className='text-3xl' />
                            </a>
                            <a href="#" className='hover:text-secondary duration-200'>
                                <BiPhoneCall className='text-3xl' />
                            </a>
                        </div>
                    </div>
                    
                    {/* Footer Links Section */}
                    <div className='grid grid-cols-2 md:grid-cols-3 md:col-span-3 md:ml-14'>
                        <div className='py-8 px-4'>
                            <h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-5'>
                                Important Links
                            </h1>
                            <ul className='flex flex-col gap-3'>
                                <li><a href="#" className='hover:text-secondary duration-200'>Home</a></li>
                                <li><a href="#" className='hover:text-secondary duration-200'>About</a></li>
                                <li><a href="#" className='hover:text-secondary duration-200'>Services</a></li>
                                <li><a href="#" className='hover:text-secondary duration-200'>Contact</a></li>
                                <li><a href="#" className='hover:text-secondary duration-200'>Login</a></li>
                            </ul>
                        </div>
                        
                        <div className='py-8 px-4'>
                            <h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-5'>
                                Resources
                            </h1>
                            <ul className='flex flex-col gap-3'>
                                <li><a href="#" className='hover:text-secondary duration-200'>Home</a></li>
                                <li><a href="#" className='hover:text-secondary duration-200'>About</a></li>
                                <li><a href="#" className='hover:text-secondary duration-200'>Services</a></li>
                                <li><a href="#" className='hover:text-secondary duration-200'>Contact</a></li>
                                <li><a href="#" className='hover:text-secondary duration-200'>Login</a></li>
                            </ul>
                        </div>
                        
                        <div className='py-8 px-4'>
                            <h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-5'>
                                Company Links
                            </h1>
                            <ul className='flex flex-col gap-3'>
                                <li><a href="#" className='hover:text-secondary duration-200'>Home</a></li>
                                <li><a href="#" className='hover:text-secondary duration-200'>About</a></li>
                                <li><a href="#" className='hover:text-secondary duration-200'>Services</a></li>
                                <li><a href="#" className='hover:text-secondary duration-200'>Contact</a></li>
                                <li><a href="#" className='hover:text-secondary duration-200'>Login</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                {/* Copyright Section */}
                <div className='mt-8'>
                    <div className='text-center py-6 border-t-2 border-gray-800/10'>
                        <span className='text-sm text-black/60'>
                            &copy; 2025 E-Tutor & Coding Journey. All Rights Reserved.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  ); 
};
