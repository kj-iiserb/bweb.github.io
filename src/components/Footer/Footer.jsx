import React from 'react';
import { FaLinkedin, FaTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 flex flex-col w-full border-box md:flex-row">
        {/* Left Section */}
        <div className="w-full md:w-1/2 flex p-4 flex-col border-box md:pl-16">
          <h5 className="text-xl font-bold mb-3">VisDom</h5>
          <p>203 - VisDom Lab, Main(Plasma) Building,</p>
          <p>IISER Bhopal</p>
          <p>Phone No.: +91 755 269 2699</p>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 p-4 flex flex-col md:items-end md:pr-20">
          <h5 className="text-xl font-bold mb-3">Follow Us</h5>
          <div className="flex space-x-3 gap-2">
            <a href="#" className="hover:text-blue-500"> <FaLinkedin size={"30px"}/> </a>
            <a href="#" className="hover:text-blue-300"> <FaTwitter size={"30px"} /></a>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
