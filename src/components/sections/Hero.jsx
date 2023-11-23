import { Link } from "react-router-dom";

import ProgrammingIcon from "../../images/programming.svg";
import GitHubIcon from "../../icons/icons8-github.svg";
import InstagramIcon from "../../icons/icons8-instagram.svg";
import LinkedinIcon from "../../icons/icons8-linkedin.svg";

const Hero = () => {
  return (
    <section id="hero" className="my-5">
      <div className="my-8">
        <img src={ProgrammingIcon} className=" w-3/5 m-auto" />
      </div>
      <div className="text-center">
        <h1 className="text-slate-50 text-4xl font-bold">
          <span>Berki</span> <span className="text-emerald-300">Ádám</span>
        </h1>
        <h2 className="uppercase text-2xl font-light text-slate-300 mt-1 mb-4">
          Frontend fejlesztő
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
      </div>
      <div className="flex justify-between gap-6">
        <Link
          to="/projects"
          className="flex-1 text-center inline-block my-8 py-2 px-4 bg-emerald-300 text-slate-900 border-2 border-emerald-300 rounded-md text-md hover:bg-transparent hover:text-emerald-300 transition"
        >
          Projektjeim
        </Link>

        <Link
          to="/projects"
          className=" flex-1 text-center inline-block my-8 py-2 px-4 bg-transparent border-2 border-emerald-300 text-emerald-300 rounded-md text-md"
        >
          Ismerj meg
        </Link>
      </div>
    </section>
  );
};

export default Hero;
