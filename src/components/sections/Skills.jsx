import { motion } from "framer-motion";

import HTMLIcon from "../../icons/html_icon.png";
import CSSIcon from "../../icons/css_icon.png";
import JSIcon from "../../icons/js_icon.png";
import SassIcon from "../../icons/sass_icon.png";
import ReactIcon from "../../icons/react_icon_no-bg.png";
import TailwindIcon from "../../icons/tailwind_icon.png";
import MuiIcon from "../../icons/mui_icon.png";
import NodeIcon from "../../icons/node_icon.png";
import ApiIcon from "../../icons/api_icon.png";
import GithubIcon from "../../icons/github_icon_light.png";
import VsCodeIcon from "../../icons/vs_code_icon.png";
import FirebaseIcon from "../../icons/firebase_icon.png";
import ProgrammingImage from "../../images/programming.svg";
import FramerMotionIcon from "../../icons/framer-motion_icon.png";

import StackCard from "../StackCard";
import SectionWrapper from "../../UI/SectionWrapper";

const stackList = [
  {
    url: HTMLIcon,
    stackName: "HTML5",
  },
  {
    url: CSSIcon,
    stackName: "CSS3",
  },
  {
    url: JSIcon,
    stackName: "Js (ES6+)",
  },
  {
    url: ReactIcon,
    stackName: "React",
  },
  {
    url: TailwindIcon,
    stackName: "Tailwind CSS",
  },
  {
    url: MuiIcon,
    stackName: "Joy UI",
  },
  {
    url: NodeIcon,
    stackName: "Node Js",
  },
  {
    url: ApiIcon,
    stackName: "REST API",
  },
  {
    url: GithubIcon,
    stackName: "Github",
  },
  {
    url: VsCodeIcon,
    stackName: "VS Code",
  },
  {
    url: FirebaseIcon,
    stackName: "Firebase DB",
  },
  {
    url: FramerMotionIcon,
    stackName: "Framer Motion",
  },
];

const Skills = () => {
  return (
    <SectionWrapper sectionID="skills" sectionTitle="Stack">
      <div>
        <p className="text-light text-slate-400 mb-10">
          Stack listám, amikkel eddig foglalkoztam.
          <br />A fejlesztés számomra önmagam fejlesztését is jelenti, így
          folyamatosan teszek azért, hogy tudásom mélyüljön és bővüljön
        </p>
        <div className="">
          <motion.ul className="grid grid-cols-3 gap-6">
            {stackList.map((stack) => {
              return <StackCard icon={stack.url} stackName={stack.stackName} />;
            })}
          </motion.ul>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Skills;
