import { Link } from "react-router-dom";

import { IoIosArrowRoundForward } from "react-icons/io";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

const ProjectCard = ({
  projectName,
  details,
  previewImg,
  url,
  stackList,
  featureList,
  githubURL,
  liveURL,
}) => {
  return (
    <div className=" border-b border-b-slate-700 py-8">
      <header className="mb-6">
        <h4 className="text-emerald-300 text-xl">{projectName}</h4>
        <h5>{details}</h5>
      </header>

      <div className="rounded-md overflow-hidden mb-6">
        <img src={previewImg} />
      </div>
      <div className="mb-6">
        <h4 className="mb-2">Stack:</h4>
        <ul className="flex gap-4 flex-wrap">
          {stackList.map((stack) => {
            return (
              <li className="flex align-middle gap-2">
                <img src={stack.icon} className="w-4" />
                <span className="text-xs">{stack.title}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="my-8">
        <h5 className="mb-2">Feature:</h5>
        <ul className="font-light mb-4">
          {featureList.map((feature) => {
            return (
              <li className="relative text-sm mb-0.5 ml-3 before:absolute before:w-1 before:h-0.5 before:bg-emerald-300 before:top-1/2 before:-left-3 before:-translate-y-0.5">
                {feature}
              </li>
            );
          })}
        </ul>
      </div>
      {/** Links to resurces */}
      <div className="flex justify-between items-center">
        <Link
          to={url}
          className="text-slate-800 py-2 px-4 rounded-md bg-emerald-300 text-sm"
        >
          Bővebben <IoIosArrowRoundForward className="inline-block" />
        </Link>
        <div className="flex gap-8 text-emerald-300 text-sm">
          <Link
            to={githubURL}
            target="_blank"
            className="flex items-center gap-2"
          >
            <IoLogoGithub />
            Forráskód
          </Link>
          <Link to={liveURL} className="flex items-center gap-2">
            <FaExternalLinkAlt />
            Demo
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
