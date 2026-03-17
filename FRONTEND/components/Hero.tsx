"use client";

const Hero = () => {
  return (
    <section
      className="bg-no-repeat h-[100vh] bg-cover bg-center"
      style={{ backgroundImage: `url('/assets/hero.webp')` }}
    >
      <div className="relative h-full">
        <div className="pl-[3%] ml-[5%] lg:border-l-2 lg:border-l-solid lg:border-l-white absolute bottom-1/4 lg:bottom-0 text-white">
          <h2 className="text-2xl mb-[5%] tracking-[1px]">WELCOME TO RENTFOLIO</h2>
          <h3 className="text-[40px] sm:text-7xl tracking-[1px] mb-[5%] w-[95%] sm:w-[75%] lg:w-[60%]">
            Property Management at its Very Best
          </h3>
          <button className="flex items-center text-lg font-light tracking-[1px] mb-[10%] group hover:text-primary-color transition-all ease-linear duration-300 delay-0">
            <span className="text-primary-color mr-0 w-0 transition-all ease-linear duration-300 delay-0 origin-center group-hover:w-4 group-hover:mr-2">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 32 32" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M 21.1875 9.28125 L 19.78125 10.71875 L 24.0625 15 L 4 15 L 4 17 L 24.0625 17 L 19.78125 21.28125 L 21.1875 22.71875 L 27.90625 16 Z"></path>
              </svg>
            </span>
            LEARN ABOUT US
            <span className="w-4 ml-2 transition-all ease-linear duration-300 delay-0 origin-[right_center] group-hover:w-0 group-hover:ml-0">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 32 32" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M 21.1875 9.28125 L 19.78125 10.71875 L 24.0625 15 L 4 15 L 4 17 L 24.0625 17 L 19.78125 21.28125 L 21.1875 22.71875 L 27.90625 16 Z"></path>
              </svg>
            </span>
          </button>
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
  );
};

export default Hero;
