import { motion, easeIn } from "framer-motion";

import PrimaryLink from "../../UI/PrimaryLink";
import SecondaryLink from "../../UI/SecondaryLink";

import ProgrammingIcon from "../../images/programming.svg";
import GitHubIcon from "../../icons/icons8-github.svg";
import InstagramIcon from "../../icons/icons8-instagram.svg";
import LinkedinIcon from "../../icons/icons8-linkedin.svg";

const Hero = () => {
  const eased = easeIn(0.5);

  return (
    <section id="hero" className="my-5">
      <motion.div
        className="my-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <img src={ProgrammingIcon} className=" w-3/5 m-auto" />
      </motion.div>
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.5,
          type: "spring",
          stiffness: 150,
        }}
      >
        <h1 className="text-slate-50 text-4xl font-bold">
          <span>Berki</span> <span className="text-emerald-300">Ádám</span>
        </h1>
        <h2 className="uppercase text-2xl font-light text-slate-300 mt-1 mb-4">
          Frontend fejlesztő
          <br />
          <span className="text-sm">(react és javascript fan)</span>
        </h2>
        <div id="social-links">
          <ul className="flex gap-5 justify-center">
            <li>
              <a>
                <img className="w-8" src={GitHubIcon} />
              </a>
            </li>
            <li>
              <a>
                <img className="w-8" src={InstagramIcon} />
              </a>
            </li>
            <li>
              <a>
                <img className="w-8" src={LinkedinIcon} />
              </a>
            </li>
          </ul>
        </div>
      </motion.div>
      <div className="flex justify-between gap-6">
        <PrimaryLink
          path="/projects"
          title="Projektkeim"
          extraClasses="flex-1 my-8 py-2 px-4 text-md"
        />
        <SecondaryLink
          path="#about"
          title="Ismerj meg"
          extraClasses="flex-1 my-8 py-2 px-4 text-md"
        />
      </div>
    </section>
  );
};

export default Hero;
