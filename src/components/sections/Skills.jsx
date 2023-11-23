import HTMLIcon from "../../icons/html_icon.png";
import CSSIcon from "../../icons/css_icon.png";
import JSIcon from "../../icons/js_icon.png";
import SassIcon from "../../icons/sass_icon.png";
import ReactIcon from "../../icons/react_icon.png";
import TailwindIcon from "../../icons/tailwind_icon.png";
import MuiIcon from "../../icons/mui_icon.png";
import NodeIcon from "../../icons/node_icon.png";
import ApiIcon from "../../icons/api_icon.png";
import GithubIcon from "../../icons/github_icon_light.png";
import VsCodeIcon from "../../icons/vs_code_icon.png";
import FirebaseIcon from "../../icons/firebase_icon.png";
import ProgrammingImage from "../../images/programming.svg";

const Skills = () => {
  return (
    <section id="skills">
      <header className="mb-6">
        <h2>
          <span className="inline-block relative text-3xl font-bold uppercase after:block after:absolute after:top-2/4 after:-translate-y-1/2 after:-right-10 after:w-8 after:h-1 after:bg-emerald-300">
            stack
          </span>
        </h2>
      </header>
      <div>
        <div className="">
          <div className="">
            <ul className="flex gap-6 flex-wrap">
              <li className="flex align-middle gap-2 text-sm font-light border border-emerald-300 rounded-md px-3 py-2 ">
                <div className="w-5 flex place-items-center">
                  <img src={HTMLIcon} />
                </div>
                <h3>HTML5</h3>
              </li>
              <li className="flex align-middle gap-2 text-sm font-light border border-emerald-300 rounded-md px-3 py-2 ">
                <div className="w-5 flex place-items-center">
                  <img src={CSSIcon} />
                </div>
                <h3>CSS3</h3>
              </li>
              <li className="flex align-middle gap-2 text-sm font-light border border-emerald-300 rounded-md px-3 py-2 ">
                <div className="w-5 flex place-items-center">
                  <img src={JSIcon} />
                </div>
                <h3>JS (ES6+)</h3>
              </li>
              <li className="flex align-middle gap-2 text-sm font-light border border-emerald-300 rounded-md px-3 py-2 ">
                <div className="w-5 flex place-items-center">
                  <img src={SassIcon} />
                </div>
                <h3>Sass</h3>
              </li>
              <li className="flex align-middle gap-2 text-sm font-light border border-emerald-300 rounded-md px-3 py-2 ">
                <div className="w-5 flex place-items-center">
                  <img src={ReactIcon} />
                </div>
                <h3>React</h3>
              </li>
              <li className="flex align-middle gap-2 text-sm font-light border border-emerald-300 rounded-md px-3 py-2 ">
                <div className="w-5 flex place-items-center">
                  <img src={TailwindIcon} />
                </div>
                <h3>Tailwind CSS</h3>
              </li>
              <li className="flex align-middle gap-2 text-xs font-light border border-emerald-300 rounded-md px-3 py-2 ">
                <div className="w-3 flex place-items-center">
                  <img src={MuiIcon} />
                </div>
                <h3>Joy UI</h3>
              </li>
              <li className="flex align-middle gap-2 text-xs font-light border border-emerald-300 rounded-md px-3 py-2 ">
                <div className="w-3 flex place-items-center">
                  <img src={NodeIcon} />
                </div>
                <h3>Node JS</h3>
              </li>
              <li className="flex align-middle gap-2 text-xs font-light border border-emerald-300 rounded-md px-3 py-2 ">
                <div className="w-3 flex place-items-center">
                  <img src={ApiIcon} />
                </div>
                <h3>REST API</h3>
              </li>
              <li className="flex align-middle gap-2 text-xs font-light border border-emerald-300 rounded-md px-3 py-2 ">
                <div className="w-3 flex place-items-center">
                  <img src={GithubIcon} />
                </div>
                <h3>Github</h3>
              </li>
              <li className="flex align-middle gap-2 text-xs font-light border border-emerald-300 rounded-md px-3 py-2 ">
                <div className="w-3 flex place-items-center">
                  <img src={VsCodeIcon} />
                </div>
                <h3>VS Code</h3>
              </li>
              <li className="flex align-middle gap-2 text-xs font-light border border-emerald-300 rounded-md px-3 py-2 ">
                <div className="w-3 flex place-items-center">
                  <img src={FirebaseIcon} />
                </div>
                <h3>Firebase</h3>
              </li>
            </ul>
          </div>
        </div>
        {/**
        <div className="flex flex-wrap child:w-8 gap-1">
          <img src={SassIcon} />
          <img src={ReactIcon} />
          <img src={TailwindIcon} />
          <img src={MuiIcon} />
          <img src={NodeIcon} />
          <img src={ApiIcon} />
          <img src={GithubIcon} />
          <img src={VsCodeIcon} />
          <img src={FirebaseIcon} />
        </div> */}
      </div>
    </section>
  );
};

export default Skills;
