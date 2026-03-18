import { FaArrowRight, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us | RentFolio Ltd",
  description: "Reach out to us for any enquiries, requests, suggestions or feedback",
};

export default function ContactPage() {
  return (
    <div className="overflow-hidden">
      {/* Contact Hero Section */}
      <section className="relative h-[100vh] w-full overflow-hidden bg-black-color">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/assets/contact_hero_bg.webp')`, filter: 'brightness(0.6)' }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative h-full flex items-end">
          <div className="pl-[3%] ml-[5%] lg:border-l-2 lg:border-l-white absolute bottom-1/4 lg:bottom-0 text-white">
            <h2 className="text-2xl mb-[5%] tracking-[1px] font-light uppercase">
              REACH OUT TO US
            </h2>
            <h1 className="text-[40px] sm:text-7xl tracking-[1px] mb-[5%] w-[95%] sm:w-[75%] lg:w-[60%] font-bold leading-[1.1]">
              We are Here to Answer Your Every Questions
            </h1>
            <a href="mailto:rentfolioltd@gmail.com" className="flex items-center gap-4 text-lg font-medium tracking-widest group hover:text-primary-color transition-all duration-300 mb-[10%]">
              <span className="w-0 group-hover:w-6 h-[1px] bg-primary-color transition-all duration-300 overflow-hidden opacity-0 group-hover:opacity-100"></span>
              CONTACT US
              <span className="text-primary-color"><FaArrowRight /></span>
            </a>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 px-[5%] max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-16">
        <div className="flex-1">
          <h3 className="text-lg font-medium mb-8">CONTACT</h3>
          <h4 className="text-5xl sm:text-6xl font-medium mb-8 leading-tight">
            Schedule A Call <br /><span className="font-light">or Give Us A Call</span>
          </h4>
          <p className="text-lg opacity-80 leading-relaxed max-w-xl">
            The arrangement and layout of the apartments maximises natural light, opening to elegant private balconies, which provide residents with outdoor living areas to enjoy fresh air collaborative thinking to further the overall value proposition.
          </p>
        </div>

        <ContactForm />
      </section>

      {/* Map and Info Section */}
      <section className="relative my-20 sm:my-0 lg:my-24">
        <iframe
          className="sm:absolute sm:top-0 sm:left-0 w-full h-[500px] sm:h-[800px] z-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78803.7558317406!2d0.8212462702334286!3d51.88619668343394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8e24e12f62f05%3A0x175d5f1c455091de!2sColchester%2C%20UK!5e0!3m2!1sen!2sng!4v1703197805622!5m2!1sen!2sng"
          aria-hidden="false"
          tabIndex={0}
        ></iframe>

        <div className="relative z-10 bg-white sm:w-2/3 md:w-1/2 lg:w-[40%] xl:w-1/3 shadow-2xl mr-auto ml-[5%] mt-[-100px] sm:mt-24 sm:mb-24 flex flex-col">
          <div className="relative h-64 w-full">
            <img
              src="/assets/contact-map.webp"
              alt="map location image"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-10 lg:p-14">
            <h3 className="text-4xl font-medium mb-10">Retiva <span className="font-light">Investments</span></h3>

            <div className="flex items-center gap-6 border-t border-gray-200 py-6">
              <div className="text-4xl text-primary-color">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4 className="text-primary-color text-sm font-bold tracking-widest uppercase mb-1">LOCATION</h4>
                <p className="text-lg text-black-color font-medium">Colchester <br />United Kingdom</p>
              </div>
            </div>

            <div className="flex items-center gap-6 border-t border-gray-200 py-6">
              <div className="text-4xl text-primary-color">
                <FaPhoneAlt />
              </div>
              <div>
                <h4 className="text-primary-color text-sm font-bold tracking-widest uppercase mb-1">CONTACT</h4>
                <a className="text-lg text-black-color font-medium block hover:text-primary-color transition-colors" href="tel:+447412835416">+44 7412 835416</a>
                <a className="text-lg text-black-color font-medium block hover:text-primary-color transition-colors" href="tel:+23480577077777">+234 8057 707 7777</a>
              </div>
            </div>

            <div className="flex items-center gap-6 border-y border-gray-200 py-6 mb-10">
              <div className="text-4xl text-primary-color">
                <FaEnvelope />
              </div>
              <div>
                <h4 className="text-primary-color text-sm font-bold tracking-widest uppercase mb-1">E-MAIL</h4>
                <a className="text-lg text-black-color font-medium hover:text-primary-color transition-colors" href="mailto:rentfolioltd@gmail.com">rentfolioltd@gmail.com</a>
              </div>
            </div>

            <a href="mailto:rentfolioltd@gmail.com">
              <button className="bg-primary-color text-white flex items-center gap-4 font-bold uppercase tracking-widest px-8 py-5 hover:-translate-y-2 transition-transform duration-300 w-full justify-center">
                SCHEDULE A MEETING
                <FaArrowRight />
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
