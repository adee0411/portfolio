import { Link } from "react-router-dom";

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

import StackCard from "../StackCard";

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
];

const Skills = () => {
  return (
    <section id="skills" className="my-10">
      <header className="mb-6">
        <h2>
          <span className="inline-block relative text-3xl font-bold uppercase after:block after:absolute after:top-2/4 after:-translate-y-1/2 after:-right-10 after:w-8 after:h-1 after:bg-emerald-300">
            stack
          </span>
        </h2>
      </header>
      <div>
        <p className="text-light text-slate-400 mb-10">
          Stack listám, amikkel eddig foglalkoztam.
          <br />A fejlesztés számomra önmagam fejlesztését is jelenti, így
          folyamatosan teszek azért, hogy tudásom mélyüljön és bővüljön
        </p>
        <div className="">
          <ul className="grid grid-cols-3 gap-6">
            {stackList.map((stack) => {
              return <StackCard icon={stack.url} stackName={stack.stackName} />;
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
