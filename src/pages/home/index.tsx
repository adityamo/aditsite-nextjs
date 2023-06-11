import React from "react";
import LandingDrawer from "@/components/LandingDrawer";

/* Component */
import PageIntro from "@/components/page-section/PageIntro";
import SimpleMe from "@/components/page-section/SimpleMe";
import About from "@/components/page-section/About";
import Mobile from "@/components/page-section/Mobile";
import Website from "@/components/page-section/Website";
import Support from "@/components/page-section/Support";
import Resume from "@/components/page-section/Resume";
import Project from "@/components/page-section/Project";

/* Data */
import resumedata from "./data/resumedata.json";
import slideData from "./data/project.json";

const HomeBase = (): JSX.Element => {
  return (
    <LandingDrawer>
      <PageIntro />
      <SimpleMe />
      <About />
      <Mobile />
      <Website />
      <Support />
      <Resume data={resumedata} />
      <Project sliderData={slideData} />
    </LandingDrawer>
  );
};

export default HomeBase;
