import Link from "next/link";

const ArrowIcon = () => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 32 32" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M 21.1875 9.28125 L 19.78125 10.71875 L 24.0625 15 L 4 15 L 4 17 L 24.0625 17 L 19.78125 21.28125 L 21.1875 22.71875 L 27.90625 16 Z"></path>
  </svg>
);

export const metadata = {
  title: "Our Services | RentFolio Ltd",
  description: "Comprehensive real estate management services to meet your every need",
};

const services = [
  {
    title: "Property Management",
    description: "Our property management services cover all aspects of property maintenance, tenant relations, and financial management. From leasing and rent collection to maintenance and repairs, we take care of every detail.",
    highlight: false,
    iconPath: "M217.47,105.24l-80-75.5-.09-.08a13.94,13.94,0,0,0-18.83,0l-.09.08-80,75.5A14,14,0,0,0,34,115.55V208a14,14,0,0,0,14,14H96a14,14,0,0,0,14-14V160a2,2,0,0,1,2-2h32a2,2,0,0,1,2,2v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V115.55A14,14,0,0,0,217.47,105.24ZM210,208a2,2,0,0,1-2,2H160a2,2,0,0,1-2-2V160a14,14,0,0,0-14-14H112a14,14,0,0,0-14,14v48a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V115.55a2,2,0,0,1,.65-1.48l.09-.08,79.94-75.48a2,2,0,0,1,2.63,0L209.26,114l.08.08a2,2,0,0,1,.66,1.48Z"
  },
  {
    title: "Tenant Placement",
    description: "We understand the importance of finding the right tenants for your property. Our tenant placement services include thorough screening, background checks, and lease agreements to ensure you have reliable and responsible tenants.",
    highlight: true,
    iconPath: "M117.82,217.45A6,6,0,0,1,112,222a6.14,6.14,0,0,1-1.46-.18l-32-8a6.15,6.15,0,0,1-1.87-.83l-24-16a6,6,0,0,1,6.66-10l23.13,15.42,31,7.75A6,6,0,0,1,117.82,217.45Zm132.73-96.6a13.89,13.89,0,0,1-7,8.09l-24,12-55.31,55.31A6,6,0,0,1,160,198a6.08,6.08,0,0,1-1.46-.18l-64-16a6,6,0,0,1-2-.94L36.9,141.16,12.47,128.94a14,14,0,0,1-6.26-18.78L31.06,60.47h0a14,14,0,0,1,18.78-6.26L72.6,65.59l53.75-15.36a6,6,0,0,1,3.3,0L183.4,65.59l22.76-11.38a14,14,0,0,1,18.78,6.26l24.85,49.69A13.93,13.93,0,0,1,250.55,120.85ZM17.84,118.21,37.32,128,64,74.68,44.47,64.94a2,2,0,0,0-2.68.9L16.94,115.53a2,2,0,0,0-.1,1.52A1.92,1.92,0,0,0,17.84,118.21ZM191,152.49l-30.73-24.61c-19,16.38-43.58,18.8-63.8,5.88a14,14,0,0,1-2.39-21.71l45.72-44.36a6,6,0,0,1,2.35-1.4L128,62.24,76.19,77,47.66,134.1l50.9,36.35,59.6,14.9Zm17.68-17.68L180.29,78H146.43l-43.91,42.6a1.9,1.9,0,0,0-.51,1.55,2,2,0,0,0,.94,1.5c13.29,8.49,34.14,10.87,52.79-7.92a6,6,0,0,1,8-.45L199.56,144Zm30.36-19.28L214.21,65.84a2,2,0,0,0-2.68-.9l-19.48,9.74L218.68,128l19.48-9.74a1.92,1.92,0,0,0,1-1.16A2,2,0,0,0,239.06,115.53Z"
  },
  {
    title: "Financial Management",
    description: "Let us handle the financial intricacies of your real estate investments. We provide comprehensive financial reporting, budgeting, and expense management to maximize your returns.",
    highlight: false,
    iconPath: "M128,166a38,38,0,1,0-38-38A38,38,0,0,0,128,166Zm0-64a26,26,0,1,1-26,26A26,26,0,0,1,128,102ZM240,58H16a6,6,0,0,0-6,6V192a6,6,0,0,0,6,6H240a6,6,0,0,0,6-6V64A6,6,0,0,0,240,58ZM22,108.82A54.73,54.73,0,0,0,60.82,70H195.18A54.73,54.73,0,0,0,234,108.82v38.36A54.73,54.73,0,0,0,195.18,186H60.82A54.73,54.73,0,0,0,22,147.18ZM234,96.29A42.8,42.8,0,0,1,207.71,70H234ZM48.29,70A42.8,42.8,0,0,1,22,96.29V70ZM22,159.71A42.8,42.8,0,0,1,48.29,186H22ZM207.71,186A42.8,42.8,0,0,1,234,159.71V186Z"
  },
  {
    title: "Maintenance and Repairs",
    description: "Our dedicated maintenance team ensures that your property is well-maintained, saving you time and money. We also offer emergency response services for your peace of mind.",
    highlight: false,
    iconPath: "M230.14,70.54,185.46,25.85a6,6,0,0,0-8.49,0L155.54,47.3,208.7,100.46l21.44-21.44A6,6,0,0,0,230.14,70.54Zm-53,38.41L124,56,44.69,135.31a30,30,0,0,0-7.6,13.13L18.38,222.69a6,6,0,0,0,7.93,7.93l74.25-18.71a30,30,0,0,0,13.13-7.6L193,124ZM114.63,208.73a18,18,0,0,1-7.87,4.55L48,228.49l15.21-58.76a18.14,18.14,0,0,1,4.55-7.87L136,94l58,58Z"
  },
  {
    title: "Lease Administration",
    description: "We take care of all lease-related responsibilities, including lease renewals, terminations, and compliance with local regulations.",
    highlight: true,
    iconPath: "M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-32-80a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,136Zm0,32a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,168Z"
  },
  {
    title: "Real Estate Consulting",
    description: "We offer expert advice and consulting services to help you make informed decisions regarding your real estate investments. Our team is well-versed in market trends and local regulations, offering you valuable insights.",
    highlight: false,
    iconPath: "M176,232a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h80A8,8,0,0,1,176,232Zm40-128a87.55,87.55,0,0,1-33.64,69.21A16.24,16.24,0,0,0,176,186v6a16,16,0,0,1-16,16H96a16,16,0,0,1-16-16v-6a16,16,0,0,0-6.23-12.66A87.59,87.59,0,0,1,40,104.49C39.74,56.83,78.26,17.14,125.88,16A88,88,0,0,1,216,104Zm-32.11-9.34a57.6,57.6,0,0,0-46.56-46.55,8,8,0,0,0-2.66,15.78c16.57,2.79,30.63,16.85,33.44,33.45A8,8,0,0,0,176,104a9,9,0,0,0,1.35-.11A8,8,0,0,0,183.89,94.66Z"
  },
];

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="bg-cover bg-center bg-no-repeat h-[100vh] relative"
        style={{ backgroundImage: `url('/assets/services_hero_bg.webp')` }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative h-full">
          <div className="pl-[3%] ml-[5%] lg:border-l-2 lg:border-l-white absolute bottom-[8%] text-white">
            <h2 className="text-xl sm:text-2xl mb-6 sm:mb-8 tracking-[3px] font-light uppercase">
              WHAT WE OFFER
            </h2>
            <h3 className="text-[40px] sm:text-6xl lg:text-[80px] tracking-[1px] mb-4 w-[95%] sm:w-[75%] lg:w-[55%] leading-[1.1]">
              Services to Meet Your Every Need
            </h3>
          </div>

          {/* SEND US A MESSAGE – right edge of hero */}
          <a
            href="/contact"
            style={{
              writingMode: "vertical-lr",
              position: "absolute",
              right: 0,
              top: "50%",
              transform: "translateY(-50%)",
              backgroundColor: "#035381",
              color: "white",
              padding: "20px 14px",
              fontSize: "1.1rem",
              fontWeight: 300,
              letterSpacing: "1px",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 10,
            }}
          >
            SEND US A MESSAGE
          </a>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="p-[5%]">
        <h3 className="text-3xl sm:text-5xl text-black-color mb-[5%]">Our Services</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-[2%]">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-[5%] flex flex-col ${
                service.highlight
                  ? "bg-primary-color text-white"
                  : "bg-[#f1f1f1] text-black-color"
              }`}
            >
              <div className={`${service.highlight ? "text-white" : "text-primary-color"} flex justify-end mb-[10%] text-4xl`}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d={service.iconPath}></path>
                </svg>
              </div>
              <h4 className={`${service.highlight ? "text-white" : "text-primary-color"} text-sm uppercase mb-4`}>Service</h4>
              <p className="text-2xl mb-2">{service.title}</p>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Project Inquiry CTA */}
      <section
        className="text-white bg-no-repeat bg-cover py-[10%] sm:py-[5%] flex flex-col items-center"
        style={{ backgroundImage: `url('/assets/retiva_bg.webp')` }}
      >
        <h3 className="text-lg font-medium mb-8">CONTACT</h3>
        <h4 className="text-5xl sm:text-6xl font-medium text-center mb-8">
          Do you have <span className="font-light"><br />a project in mind?</span>
        </h4>
        <span className="font-heading">WE WANT TO HEAR ABOUT IT</span>
        <div className="flex justify-center gap-4 mt-[10%] flex-col sm:flex-row">
          <a
            href="tel:+447412835416"
            className="flex items-end gap-4 bg-primary-color p-6 hover:-translate-y-2 transition-transform delay-0 duration-300"
          >
            <div className="text-5xl -mx-[9px] my-1">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M176,18H80A22,22,0,0,0,58,40V216a22,22,0,0,0,22,22h96a22,22,0,0,0,22-22V40A22,22,0,0,0,176,18Zm10,198a10,10,0,0,1-10,10H80a10,10,0,0,1-10-10V40A10,10,0,0,1,80,30h96a10,10,0,0,1,10,10ZM138,60a10,10,0,1,1-10-10A10,10,0,0,1,138,60Z"></path>
              </svg>
            </div>
            <div>
              <h5 className="text-sm tracking-[1px]">CALL US NOW</h5>
              <p className="font-medium tracking-[1px] text-2xl sm:text-3xl">+44 7412 835416</p>
            </div>
          </a>
          <a
            href="mailto:rentfolioltd@gmail.com"
            className="flex items-end gap-4 bg-[#333333] p-6 hover:-translate-y-2 transition-transform delay-0 duration-300"
          >
            <div className="text-5xl">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M227.33,91l-96-64a6,6,0,0,0-6.66,0l-96,64A6,6,0,0,0,26,96V200a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V96A6,6,0,0,0,227.33,91ZM100.18,152,38,195.9V107.65Zm12.27,6h31.1l62.29,44H50.16Zm43.37-6L218,107.65V195.9ZM128,39.21l85.43,57L143.53,146H112.47L42.57,96.17Z"></path>
              </svg>
            </div>
            <div>
              <h5 className="text-sm tracking-[1px]">GET IN TOUCH</h5>
              <p className="font-medium tracking-[1px] text-2xl sm:text-3xl">rentfolioltd@gmail.com</p>
            </div>
          </a>
        </div>
      </section>

      {/* Contact Info Bar */}
      <section className="py-[10%] px-[5%] sm:p-[5%] flex flex-col min-[382px]:flex-row flex-wrap justify-between items-baseline space-y-6 xl:space-y-0">
        <div className="min-[382px]:flex-[0_0_45%] xl:flex-[0_0_20%]">
          <div className="text-5xl text-primary-color mb-[10px]">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M128,66a38,38,0,1,0,38,38A38,38,0,0,0,128,66Zm0,64a26,26,0,1,1,26-26A26,26,0,0,1,128,130Zm0-112a86.1,86.1,0,0,0-86,86c0,30.91,14.34,63.74,41.47,94.94a252.32,252.32,0,0,0,41.09,38,6,6,0,0,0,6.88,0,252.32,252.32,0,0,0,41.09-38c27.13-31.2,41.47-64,41.47-94.94A86.1,86.1,0,0,0,128,18Zm0,206.51C113,212.93,54,163.62,54,104a74,74,0,0,1,148,0C202,163.62,143,212.93,128,224.51Z"></path>
            </svg>
          </div>
          <h4 className="text-black-color text-[15px] mb-[5px]">LOCATION</h4>
          <span className="text-[15px] text-black-color font-heading">London, United Kingdom</span>
        </div>
        <div className="min-[382px]:flex-[0_0_45%] xl:flex-[0_0_20%]">
          <div className="text-5xl text-primary-color mb-[10px]">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M176,18H80A22,22,0,0,0,58,40V216a22,22,0,0,0,22,22h96a22,22,0,0,0,22-22V40A22,22,0,0,0,176,18ZM70,62H186V194H70ZM80,30h96a10,10,0,0,1,10,10V50H70V40A10,10,0,0,1,80,30Zm96,196H80a10,10,0,0,1-10-10V206H186v10A10,10,0,0,1,176,226Z"></path>
            </svg>
          </div>
          <h4 className="text-black-color text-[15px] mb-[5px]">TELEPHONE</h4>
          <a className="text-[15px] text-black-color block" href="tel:+447412835416">+44 7412 835416</a>
        </div>
        <div className="min-[382px]:flex-[0_0_45%] xl:flex-[0_0_20%]">
          <div className="text-5xl text-primary-color mb-[10px]">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M224,50H32a6,6,0,0,0-6,6V192a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A6,6,0,0,0,224,50Zm-96,85.86L47.42,62H208.58ZM101.67,128,38,186.36V69.64Zm8.88,8.14L124,148.42a6,6,0,0,0,8.1,0l13.4-12.28L208.58,194H47.43ZM154.33,128,218,69.64V186.36Z"></path>
            </svg>
          </div>
          <h4 className="text-black-color text-[15px] mb-[5px]">E-MAIL</h4>
          <a className="text-[15px] text-black-color" href="mailto:rentfolioltd@gmail.com">rentfolioltd@gmail.com</a>
        </div>
        <div className="min-[382px]:flex-[0_0_45%] xl:flex-[0_0_20%]">
          <div className="text-5xl text-primary-color mb-[10px]">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M240,210H222V96a14,14,0,0,0-14-14H142V32a14,14,0,0,0-21.77-11.64l-80,53.33A14,14,0,0,0,34,85.34V210H16a6,6,0,0,0,0,12H240a6,6,0,0,0,0-12ZM208,94a2,2,0,0,1,2,2V210H142V94ZM46,85.34a2,2,0,0,1,.89-1.66l80-53.34A2,2,0,0,1,130,32V210H46ZM110,112v16a6,6,0,0,1-12,0V112a6,6,0,0,1,12,0Zm-32,0v16a6,6,0,0,1-12,0V112a6,6,0,0,1,12,0Zm0,56v16a6,6,0,0,1-12,0V168a6,6,0,0,1,12,0Zm32,0v16a6,6,0,0,1-12,0V168a6,6,0,0,1,12,0Z"></path>
            </svg>
          </div>
          <h4 className="text-black-color text-[15px] mb-[5px]">COMPANY</h4>
          <span className="text-[15px] text-black-color font-heading">Rentfolio Ltd</span>
        </div>
      </section>
    </div>
  );
}
