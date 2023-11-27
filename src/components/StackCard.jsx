import { motion } from "framer-motion";

const StackCard = ({ icon, stackName }) => {
  return (
    <motion.li
      className="text-sm font-light"
      initial={{ opacity: 0, scale: 0 }}
      transition={{ type: "spring", duration: 1.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
    >
      <figure className="flex flex-col gap-2 justify-center align-middle mb-2">
        <img src={icon} className="block mx-auto w-8" />
        <figcaption className="text-center text-slate-400">
          {stackName}
        </figcaption>
      </figure>
    </motion.li>
  );
};

export default StackCard;
