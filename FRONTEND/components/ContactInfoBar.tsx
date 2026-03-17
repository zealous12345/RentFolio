const ContactInfoBar = () => {
  return (
    <section className="py-[10%] px-[5%] sm:p-[5%] flex flex-col min-[382px]:flex-row flex-wrap justify-between items-baseline space-y-6 xl:space-y-0 max-w-[1440px] mx-auto">
      <div className="min-[382px]:flex-[0_0_45%] xl:flex-[0_0_20%]">
        <div className="text-5xl text-primary-color mb-4">
          <svg fill="currentColor" viewBox="0 0 256 256" width="1em" height="1em"><path d="M128,66a38,38,0,1,0,38,38A38,38,0,0,0,128,66Zm0,64a26,26,0,1,1,26-26A26,26,0,0,1,128,130Zm0-112a86.1,86.1,0,0,0-86,86c0,30.91,14.34,63.74,41.47,94.94a252.32,252.32,0,0,0,41.09,38,6,6,0,0,0,6.88,0,252.32,252.32,0,0,0,41.09-38c27.13-31.2,41.47-64,41.47-94.94A86.1,86.1,0,0,0,128,18Zm0,206.51C113,212.93,54,163.62,54,104a74,74,0,0,1,148,0C202,163.62,143,212.93,128,224.51Z"></path></svg>
        </div>
        <h4 className="text-black-color text-[15px] mb-1 font-bold">LOCATION</h4>
        <span className="text-[15px] text-black-color font-heading">London, United Kingdom</span>
      </div>
      
      <div className="min-[382px]:flex-[0_0_45%] xl:flex-[0_0_20%]">
        <div className="text-5xl text-primary-color mb-4">
          <svg fill="currentColor" viewBox="0 0 256 256" width="1em" height="1em"><path d="M176,18H80A22,22,0,0,0,58,40V216a22,22,0,0,0,22,22h96a22,22,0,0,0,22-22V40A22,22,0,0,0,176,18ZM70,62H186V194H70ZM80,30h96a10,10,0,0,1,10,10V50H70V40A10,10,0,0,1,80,30Zm96,196H80a10,10,0,0,1-10-10V206H186v10A10,10,0,0,1,176,226Z"></path></svg>
        </div>
        <h4 className="text-black-color text-[15px] mb-1 font-bold">TELEPHONE</h4>
        <a className="text-[15px] text-black-color block hover:text-primary-color transition-colors" href="tel:+447412835416">+44 7412 835416</a>
      </div>

      <div className="min-[382px]:flex-[0_0_45%] xl:flex-[0_0_20%]">
        <div className="text-5xl text-primary-color mb-4">
          <svg fill="currentColor" viewBox="0 0 256 256" width="1em" height="1em"><path d="M224,50H32a6,6,0,0,0-6,6V192a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A6,6,0,0,0,224,50Zm-96,85.86L47.42,62H208.58ZM101.67,128,38,186.36V69.64Zm8.88,8.14L124,148.42a6,6,0,0,0,8.1,0l13.4-12.28L208.58,194H47.43ZM154.33,128,218,69.64V186.36Z"></path></svg>
        </div>
        <h4 className="text-black-color text-[15px] mb-1 font-bold">E-MAIL</h4>
        <a className="text-[15px] text-black-color hover:text-primary-color transition-colors" href="mailto:rentfolioltd@gmail.com">rentfolioltd@gmail.com</a>
      </div>

      <div className="min-[382px]:flex-[0_0_45%] xl:flex-[0_0_20%]">
        <div className="text-5xl text-primary-color mb-4">
          <svg fill="currentColor" viewBox="0 0 256 256" width="1em" height="1em"><path d="M240,210H222V96a14,14,0,0,0-14-14H142V32a14,14,0,0,0-21.77-11.64l-80,53.33A14,14,0,0,0,34,85.34V210H16a6,6,0,0,0,0,12H240a6,6,0,0,0,0-12ZM208,94a2,2,0,0,1,2,2V210H142V94ZM46,85.34a2,2,0,0,1,.89-1.66l80-53.34A2,2,0,0,1,130,32V210H46ZM110,112v16a6,6,0,0,1-12,0V112a6,6,0,0,1,12,0Zm-32,0v16a6,6,0,0,1-12,0V112a6,6,0,0,1,12,0Zm0,56v16a6,6,0,0,1-12,0V168a6,6,0,0,1,12,0Zm32,0v16a6,6,0,0,1-12,0V168a6,6,0,0,1,12,0Z"></path></svg>
        </div>
        <h4 className="text-black-color text-[15px] mb-1 font-bold">COMPANY</h4>
        <span className="text-[15px] text-black-color font-heading">Rentfolio Ltd</span>
      </div>
    </section>
  );
};

export default ContactInfoBar;
