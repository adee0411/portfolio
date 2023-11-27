import ProjectCard from "./ProjectCard";

import JoyUIIcon from "../icons/mui_icon.png";
import SassIcon from "../icons/sass_icon.png";
import ReactIcon from "../icons/react_icon_no-bg.png";
import FirebaseIcon from "../icons/firebase_icon.png";
import ApiIcon from "../icons/api_icon.png";
import FramerMotionIcon from "../icons/framer-motion_icon.png";

import NewMeScreenshot from "../images/nemMe_screenshot.png";
import MealMoverScreenshot from "../images/mealMover_screenshot.png";

const projectList = [
  {
    projectName: "New Me",
    details: "Fitness applikáció (Single Page App)",
    previewImage: NewMeScreenshot,
    url: "/projects/newme",
    githubURL: "",
    liveURL: "",
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
    githubURL: "https://github.com/adee0411/mealMover.git",
    liveURL: "",
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
      {
        icon: FramerMotionIcon,
        title: "Framer Motion",
      },
    ],
    featureList: [
      "Információk az étterem kínálatáról",
      "Ételrendelés",
      "Real-Time Térkép API",
    ],
  },
];

const MainProjects = () => {
  return (
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
              githubURL={project.githubURL}
              liveURL={project.liveURL}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MainProjects;
