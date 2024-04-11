import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import Heading from "../common/Heading";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useTheme } from "next-themes";
import Button from "../common/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import HoverBorderGradient from "../common/HoverBorderGradient";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
// import Styles from "../styles/button.module.css";

function Projects({ projectData }) {
  const { theme } = useTheme();
  const techs = [];
  const [selectedTechStacks, setSelectedTechStacks] = useState([]);
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  projectData.forEach((project) => {
    project.techstack.forEach((tech) => {
      const trimmedTech = tech.trim();
      if (!techs.includes(trimmedTech)) {
        techs.push(trimmedTech);
      }
    });
  });
  const handleCheckboxChange = (tech) => {
    if (selectedTechStacks.includes(tech)) {
      setSelectedTechStacks(selectedTechStacks.filter((item) => item !== tech));
    } else {
      setSelectedTechStacks([...selectedTechStacks, tech]);
    }
  };

  const handleApplyFilter = () => {
    onCloseModal();
  };
  const filteredProjects = projectData
    .filter((project) => {
      const projectTechStacks = project.techstack.map((tech) => tech.trim());
      return selectedTechStacks.every((tech) =>
        projectTechStacks.includes(tech)
      );
    })
    // .sort((a, b) => a.sequence - b.sequence);

  return (
    <div className="w-full my-20 lg:px-28 md:px-16 sm:px-8 px-5">
        <div className="flex justify-between items-start">
            <div>
            <Heading name={"Projects."} subtitle={"Just some stupid stuffs maybe."}/>
            </div>
            <div className="mt-6">
            <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                onClick={onOpenModal}
                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
              >
                <FontAwesomeIcon icon={faFilter} className="text-lg" />
              </HoverBorderGradient>
            </div>
        </div>
      <div className="flex justify-between items-center flex-wrap">
        {/* {console.log(filteredProjects, "filter")} */}
        {filteredProjects.map((item, index) => {
          return (
            <div
              key={index}
              className="xl:w-1/4 lg:w-5/12 sm:w-5/12 w-full m-3 rounded-xl"
            >
              <ProjectCard
                name={item.name}
                img={item.img}
                tech={item.techstack}
                detail={item.about}
                liveUrl={item.liveLink}
                github={item.github}
              />
            </div>
          );
        })}
        <Modal
          open={open}
          onClose={onCloseModal}
          center
          styles={{
            modal: {
              borderRadius: 10,
              background: theme === "dark" ? "#363636" : "white",
            },
          }}
        >
          <div className="py-5 px-4">
            <h2 className="text-gray-950 font-semibold text-lg mb-8 mt-4 dark:text-white">
              Select Tech Stacks
            </h2>
            {techs.map((tech) => (
              <div
                key={tech}
                className="flex justify-between items-center mb-5"
              >
                <p className="text-gray-700 dark:text-gray-300">{tech}</p>
                <input
                  type="checkbox"
                  checked={selectedTechStacks.includes(tech)}
                  onChange={() => handleCheckboxChange(tech)}
                />
              </div>
            ))}
            <div className="flex justify-center items-center">
            <Button name={"Apply"} onClick={handleApplyFilter}/>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default Projects;
