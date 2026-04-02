import React from 'react';
// Importing specific icons from react-icons
import { FaInstagram, FaFacebookF } from 'react-icons/fa6';
import { BsTwitterX } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="bg-[#0b1120] text-[#94a3b8] py-16 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Section */}
          <div className="lg:col-span-5">
            <h2 className="text-white text-3xl font-bold mb-5 tracking-tight">DigiTools</h2>
            <p className="max-w-xs leading-relaxed text-[15px]">
              Premium digital tools for creators, professionals, and businesses. 
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* Product Links */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold mb-6">Product</h3>
            <ul className="space-y-3 text-[15px]">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-3 text-[15px]">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>

          {/* Resources & Social */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-semibold mb-6">Resources</h3>
            <ul className="space-y-3 text-[15px] mb-10">
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
            
            <h3 className="text-white font-semibold mb-4">Social Links</h3>
            <div className="flex gap-3">
              <a href="#" aria-label="Instagram" className="bg-white p-2.5 rounded-full text-black hover:bg-gray-200 transition-all">
                <FaInstagram size={18} />
              </a>
              <a href="#" aria-label="Facebook" className="bg-white p-2.5 rounded-full text-black hover:bg-gray-200 transition-all">
                <FaFacebookF size={18} />
              </a>
              <a href="#" aria-label="X (Twitter)" className="bg-white p-2.5 rounded-full text-black hover:bg-gray-200 transition-all">
                <BsTwitterX size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-[13px] tracking-wide">
          <p>© 2026 Digitools. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;