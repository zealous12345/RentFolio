import { FaPhoneAlt } from "react-icons/fa";

const ProjectInquiryCTA = () => {
  return (
    <section className="bg-primary-color text-white py-24 px-[5%] text-center bg-cover bg-center" style={{ backgroundImage: `url('/assets/retiva_bg.webp')` }}>
      <div className="max-w-4xl mx-auto space-y-8">
        <span className="text-[13px] font-bold tracking-[4px] uppercase opacity-80">Contact</span>
        <h2 className="text-4xl sm:text-6xl font-medium leading-tight">Do you have <br className="hidden sm:block" /><span className="font-light">a project in mind?</span></h2>
        <p className="tracking-widest font-heading text-[15px]">WE WANT TO HEAR ABOUT IT</p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
          <a href="tel:+447412835416" className="bg-white text-primary-color px-8 py-6 flex items-center gap-4 hover:-translate-y-2 transition-transform duration-300 shadow-xl group">
            <div className="text-3xl">
              <span className="inline-block group-hover:rotate-12 transition-transform">
                <FaPhoneAlt />
              </span>
            </div>
            <div className="text-left">
              <p className="text-[10px] font-bold tracking-widest opacity-60 uppercase mb-1">Call Us Now</p>
              <p className="text-xl font-bold tracking-tight">+44 7412 835416</p>
            </div>
          </a>
          <a href="mailto:rentfolioltd@gmail.com" className="bg-[#333333] text-white px-8 py-6 flex items-center gap-4 hover:-translate-y-2 transition-transform duration-300 shadow-xl group">
            <div className="text-4xl">
              <svg className="w-10 h-10 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 256 256">
                <path d="M227.33,91l-96-64a6,6,0,0,0-6.66,0l-96,64A6,6,0,0,0,26,96V200a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V96A6,6,0,0,0,227.33,91ZM100.18,152,38,195.9V107.65Zm12.27,6h31.1l62.29,44H50.16Zm43.37-6L218,107.65V195.9ZM128,39.21l85.43,57L143.53,146H112.47L42.57,96.17Z" />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-[10px] font-bold tracking-widest opacity-60 uppercase mb-1">Get In Touch</p>
              <p className="text-xl font-bold tracking-tight">rentfolioltd@gmail.com</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectInquiryCTA;
