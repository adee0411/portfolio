import { Link } from "react-router-dom";

import SectionWrapper from "../../UI/SectionWrapper";
import MainProjects from "../MainProjects";
import PrimaryLink from "../../UI/PrimaryLink";

const ProjectOverview = () => {
  return (
    <SectionWrapper sectionID="main-projects" sectionTitle="Projektjeim">
      <MainProjects />
      <PrimaryLink
        path="/projects"
        title="Még több projekt"
        extraClasses="flex-1 block my-8 py-2 px-4 text-md"
      />
    </SectionWrapper>
  );
};

export default ProjectOverview;
