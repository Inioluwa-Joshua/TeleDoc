import { motion } from "framer-motion";

import { styles } from "../../styles";
import Typical from "react-typical";
import SearchBar from "./SearchBar";
import { useState } from "react";

const Hero = () => {
  const [results, setResults] = useState([]);

  const elements = [
    `How can i help you?`,
    2000,
    "Do you need medical care?",
    2000,
    "How are you feeling?",
    2000,
    "Tell me what's wrong in the text field below",
    2000,
  ];

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            <Typical steps={[`Welcome to TeleDoc`]} loop={1} />
            {/* <span className="text-[#915EFF]"></span>, */}
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-500`}>
            Your Health Care Assistant
            <br className="sm:block hidden" />
            <Typical steps={elements} loop={1} />
          </p>
          <div className="my-[50px]">
            <SearchBar setResults={setResults}/>
          </div>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
