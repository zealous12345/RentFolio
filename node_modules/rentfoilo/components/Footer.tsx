import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaHome, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <section>
      <div
        className="flex flex-wrap space-y-8 lg:space-y-0 flex-col sm:flex-row justify-between items-top px-[5%] py-[8%] bg-no-repeat bg-cover"
        style={{ backgroundImage: `url('/assets/footer_retiva.webp')` }}
      >
        {/* Logo + About */}
        <div className="sm:flex-[0_0_50%] lg:flex-[0_0_25%]">
          <div className="w-[80px] mb-10">
            <div className="flex flex-col items-center">
              <div className="bg-primary-color flex items-center justify-center w-full aspect-square">
                <svg viewBox="0 0 80 80" fill="white" className="w-4/5 h-4/5">
                  <path d="M40 8L8 34h8v38h16V52h16v20h16V34h8L40 8z"/>
                </svg>
              </div>
              <div className="bg-white w-full flex flex-col items-center py-1">
                <span style={{ fontSize: '9px', fontWeight: '900', color: '#003366', letterSpacing: '1px', lineHeight: '1.2' }}>RENTFOLIO</span>
                <span style={{ fontSize: '7px', fontWeight: '700', color: '#003366', letterSpacing: '1px' }}>LIMITED</span>
              </div>
            </div>
          </div>
          <p className="w-[80%] text-[#7a7a7a]">
            Rentfolio is a dynamic and professional management company, specializing in providing comprehensive real estate management services on both a fee and contract basis.
          </p>
        </div>

        {/* Helpful Links */}
        <div className="flex flex-col sm:flex-[0_0_50%] lg:flex-[0_0_25%] gap-4 lg:gap-16">
          <h4 className="text-primary-color text-[15px]">HELPFUL LINKS</h4>
          <div className="flex flex-col text-sm">
            <Link href="/" className="pb-2 text-[13px] tracking-[1px] hover:opacity-80 text-[#7a7a7a] relative before:absolute before:bottom-0 before:h-[1px] before:bg-[#7a7a7a] before:w-1/4">Home</Link>
            <Link href="/services" className="py-2 text-[13px] tracking-[1px] hover:opacity-80 text-[#7a7a7a] relative before:absolute before:bottom-0 before:h-[1px] before:bg-[#7a7a7a] before:w-1/4">Services</Link>
            <Link href="/contact" className="py-2 text-[13px] tracking-[1px] hover:opacity-80 text-[#7a7a7a] relative before:absolute before:bottom-0 before:h-[1px] before:bg-[#7a7a7a] before:w-1/4">Contact Us</Link>
          </div>
        </div>

        {/* Contact Info */}
        <div className="sm:flex-[0_0_50%] lg:flex-[0_0_25%] flex flex-col gap-4 lg:gap-16">
          <h4 className="text-primary-color text-[15px]">CONTACT INFO</h4>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="text-primary-color text-[1.1rem] hover:text-[#7a7a7a]"><FaHome /></div>
              <span className="text-[#7a7a7a] text-[13px] tracking-[1px] font-heading">London, <br />United Kingdom</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-primary-color text-[1.1rem] hover:text-[#7a7a7a]"><FaEnvelope /></div>
              <a href="mailto:rentfolioltd@gmail.com" className="text-[#7a7a7a] text-[13px] tracking-[1px]">rentfolioltd@gmail.com</a>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-primary-color text-[1.1rem] hover:text-[#7a7a7a]"><FaPhoneAlt /></div>
              <a href="tel:+447412835416" className="text-[#7a7a7a] text-[13px] tracking-[1px] font-heading">+44 7412 835416</a>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="sm:flex-[0_0_50%] lg:flex-[0_0_25%] flex flex-col gap-4 lg:gap-16">
          <h4 className="text-primary-color text-[15px]">SOCIAL MEDIA</h4>
          <div>
            <div className="flex gap-4 mb-4">
              <span className="cursor-pointer text-white bg-white p-2 rounded-full transition-[color_2s,box-shadow_2s] shadow-[inset_0px_0px_0px_40px_var(--primary-color)] hover:shadow-[inset_0px_0px_0px_1px_var(--primary-color)] hover:text-primary-color">
                <FaFacebookF />
              </span>
              <span className="cursor-pointer text-white bg-white p-2 rounded-full transition-[color_2s,box-shadow_2s] shadow-[inset_0px_0px_0px_40px_var(--primary-color)] hover:shadow-[inset_0px_0px_0px_1px_var(--primary-color)] hover:text-primary-color">
                <FaTwitter />
              </span>
              <span className="cursor-pointer text-white bg-white p-2 rounded-full transition-[color_2s,box-shadow_2s] shadow-[inset_0px_0px_0px_40px_var(--primary-color)] hover:shadow-[inset_0px_0px_0px_1px_var(--primary-color)] hover:text-primary-color">
                <FaLinkedinIn />
              </span>
            </div>
            <span className="text-primary-color font-heading text-[13.5px] tracking-[1px]">© Rentfolio 2026. All rights reserved</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
