import { Link } from "react-router-dom";

import ProjectCard from "../ProjectCard";

import JoyUIIcon from "../../icons/mui_icon.png";
import SassIcon from "../../icons/sass_icon.png";
import ReactIcon from "../../icons/react_icon_no-bg.png";
import FirebaseIcon from "../../icons/firebase_icon.png";
import ApiIcon from "../../icons/api_icon.png";

import NewMeScreenshot from "../../images/nemMe_screenshot.png";
import MealMoverScreenshot from "../../images/mealMover_screenshot.png";

const projectList = [
  {
    projectName: "New Me",
    details: "Fitness applikáció (Single Page App)",
    previewImage: NewMeScreenshot,
    url: "/projects/newme",
    stackList: [
      {
        icon: JoyUIIcon,
        title: "Joy UI",
      },
      {
        icon: ReactIcon,
        title: "React (Redux, Router)",
      },
      {
        icon: FirebaseIcon,
        title: "Firebase DB",
      },
    ],
    featureList: [
      "Kalória-számlálás",
      "Diéta tervezése",
      "Étrend tervezése",
      "Eredmények és célok naplózása, nyomonkövetése",
    ],
  },
  {
    projectName: "Meal Mover",
    details: "Gyorsétterem honlap (Single Page App)",
    previewImage: MealMoverScreenshot,
    url: "/projects/mealmover",
    stackList: [
      {
        icon: SassIcon,
        title: "Sass",
      },
      {
        icon: ReactIcon,
        title: "React (Redux, Router)",
      },
      {
        icon: FirebaseIcon,
        title: "Firebase DB",
      },
      {
        icon: ApiIcon,
        title: "REST API",
      },
    ],
    featureList: [
      "Információk az étterem kínálatáról",
      "Ételrendelés",
      "Real-Time Térkép API",
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="my-10">
      <header className="">
        <h2>
          <span className="inline-block relative text-3xl font-bold uppercase after:block after:absolute after:top-2/4 after:-translate-y-1/2 after:-right-10 after:w-8 after:h-1 after:bg-emerald-300">
            projektek
          </span>
        </h2>
      </header>
      <div>
        <h3 className="uppercase text-slate-400 my-2">főbb projektek</h3>
        <div>
          {projectList.map((project) => {
            return (
              <ProjectCard
                previewImg={project.previewImage}
                projectName={project.projectName}
                details={project.details}
                stackList={project.stackList}
                featureList={project.featureList}
                url={project.url}
              />
            );
          })}
        </div>
        <Link
          to="/projects"
          className="flex-1 text-center block my-8 py-2 px-4 bg-emerald-300 text-slate-900 border-2 border-emerald-300 rounded-md text-md hover:bg-transparent hover:text-emerald-300 transition"
        >
          Még több projekt
        </Link>
      </div>
    </section>
  );
};

export default Projects;
