import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const SectionWrapper = ({ children, sectionID, sectionTitle }) => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef);
  console.log(isHeaderInView);

  return (
    <section id={`${sectionID}`} className="my-10">
      <motion.header
        className="my-6"
        initial={isHeaderInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring" }}
        viewport={{ once: true }}
        ref={headerRef}
      >
        <h2>
          <span className="inline-block relative text-3xl font-bold uppercase after:block after:absolute after:top-2/4 after:-translate-y-1/2 after:-right-10 after:w-8 after:h-1 after:bg-emerald-300">
            {sectionTitle}
          </span>
        </h2>
      </motion.header>
      {children}
    </section>
  );
};

export default SectionWrapper;
