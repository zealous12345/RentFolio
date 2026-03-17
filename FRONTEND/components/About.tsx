import Link from "next/link";

const About = () => {
  return (
    <section className="flex flex-col-reverse sm:flex-row sm:my-0 my-[10%]">
      {/* Image Side */}
      <div className="flex-[0_0_50%] bg-cover" style={{ backgroundImage: `url('/assets/about.webp')`, minHeight: '400px' }}></div>

      {/* Content Side */}
      <div className="flex-[0_0_50%] px-[5%] py-[5%] flex flex-col self-center">
        <h3 className="text-2xl mb-[5%] tracking-[1px] text-primary-color relative pl-[13%] before:absolute before:w-[10%] before:bg-primary-color before:h-[1px] before:top-1/2 before:left-0">
          ABOUT RENTFOLIO
        </h3>
        <p className="text-lg mb-[5%]">
          Welcome to Rentfolio, your trusted partner in real estate management. We are a dynamic and professional management company, specializing in providing comprehensive real estate management services on both a fee and contract basis. With a proven track record of success, we are committed to enhancing the value and profitability of your real estate investments. Whether you own residential, commercial, or mixed-use properties, we have the expertise and experience to meet your management needs.
        </p>
        <Link href="/contact">
          <button className="bg-primary-color text-white flex items-center gap-2 font-light w-fit tracking-[1px] p-6 hover:-translate-y-2 transition-transform delay-0 duration-300">
            SCHEDULE A MEETING
            <span>
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 32 32" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M 21.1875 9.28125 L 19.78125 10.71875 L 24.0625 15 L 4 15 L 4 17 L 24.0625 17 L 19.78125 21.28125 L 21.1875 22.71875 L 27.90625 16 Z"></path>
              </svg>
            </span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default About;
