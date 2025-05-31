import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
  title,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-6 rounded-3xl w-full max-w-md flex flex-col'
  >
    {/* Card Title */}
    <h3 className='text-white text-xl font-semibold mb-4'>{title}</h3>

    {/* Testimonial Text */}
    <p className='text-white tracking-wider text-[16px]'>{testimonial}</p>

    {/* Footer Info */}
    <div className='mt-6 flex justify-between items-center gap-4'>
      <div className='flex-1 flex flex-col'>
        <p className='text-white font-medium text-[14px]'>
          <span className='blue-text-gradient'>@</span> {name}
        </p>
        <p className='mt-1 text-secondary text-[12px]'>
          {designation} {company}
        </p>
      </div>

      <img
        src={image}
        alt={`feedback_by-${name}`}
        className='w-10 h-10 rounded-full object-cover'
      />
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Educations</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-row flex-wrap gap-7 justify-center`}>

        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
