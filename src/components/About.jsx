import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      {/* Section 1: Technical Expertise */}
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-10 space-y-5 max-w-3xl'
      >
        <h2 className='text-2xl font-bold font-tech'>Technical Expertise</h2>
        <p className='text-secondary text-[17px] leading-[30px]'>
          I specialize in building intelligent systems using machine learning, AI, and modern data tools. My work focuses on developing predictive models, designing clean and efficient data pipelines, and deploying scalable solutions using tools like Docker and Django. I've worked on fine-tuning large language models such as LLaMA 3 and Mistral, and I'm experienced with techniques like Retrieval-Augmented Generation (RAG) and neural networks for supervised learning tasks.
        </p>
        <p className='text-secondary text-[17px] leading-[30px]'>
          My background includes hands-on experience in cybersecurity, where I completed an ethical hacking and penetration testing course. Through practical projects and Capture The Flag (CTF) challenges, I developed skills in reconnaissance, exploitation, privilege escalation, and breach response. I also worked on real-world scenarios involving vulnerability assessment, incident response, and web application security.
        </p>
      </motion.div>

      {/* Section 2: Core Skills */}
      <motion.div
        variants={fadeIn("", "", 0.2, 1)}
        className='mt-16 space-y-4 max-w-3xl'
      >
        <h2 className='text-2xl font-bold font-skills'>Core Skills</h2>
        <ul className='list-disc list-inside text-secondary text-[17px] leading-[30px]'>
          <li>Python, Pandas, Docker, Django</li>
          <li>Jupyter Notebooks, GitHub</li>
          <li>Large Language Models (LLMs), RAG</li>
          <li>Supervised Learning, Neural Networks</li>
          <li>Cybersecurity: Reconnaissance, Exploitation, Incident Response</li>
          <li>AI-Driven Client Strategy & Technical Consulting</li>
          <li>Fine-tuning of LLaMA 3 and Mistral</li>
        </ul>
      </motion.div>

      {/* Section 3: Business & Sales Experience */}
      <motion.div
        variants={fadeIn("", "", 0.3, 1)}
        className='mt-16 space-y-5 max-w-3xl'
      >
        <h2 className='text-2xl font-bold font-business'>Business & Sales Experience</h2>
        <p className='text-secondary text-[17px] leading-[30px]'>
          Before diving into tech full-time, I spent two years working in field sales across Sweden and Norway. This experience helped me build strong communication, planning, and leadership skills, along with a deep understanding of business needs and client relations. My academic background in economics supports my ability to interpret data-driven decisions within broader economic and business contexts.
        </p>
        <p className='text-secondary text-[17px] leading-[30px]'>
          Over the past year and a half, I’ve been working closely with clients in the AI space. My role combined technical development and business strategy—I spent 50% of my time building AI and ML applications, and the other 50% identifying potential customers and demonstrating how these technologies could create real value for their businesses.
        </p>
      </motion.div>

      {/* Services Section */}
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};


export default SectionWrapper(About, "about");
