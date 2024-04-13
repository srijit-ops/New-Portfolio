import React, { useState } from "react";
import ProjectModal from "./ProjectModal";
import Styles from "../../styles/project.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faEye } from "@fortawesome/free-solid-svg-icons";
function ProjectCard({ name, img, tech, detail, github, liveUrl }) {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div className="w-full rounded-xl shadow-[0_2px_8px_0_rgba(99,99,99,0.2)] hover:shadow-[0_13px_27px_-5px_rgba(50,50,93,0.25),0_8px_16px_-8px_rgba(0,0,0,0.3)] transition-all">
      <div
        className={`${Styles.card} border-gray-200 border dark:border-black rounded-xl h-56 overflow-hidden relative flex justify-between items-end cursor-pointer p-2 w-full`}
      >
        <div
          className={`${Styles.card_img} bg-cover bg-no-repeat bg-[50%_50%] w-full h-full absolute z-[1] left-0 top-0 transition-all duration-[0.3s]`}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
        <div
          className={`${Styles.card_box} flex justify-center items-center z-[2] relative overflow-hidden flex-col backdrop-blur-[5px] translate-x-[0%] translate-y-[20%] opacity-0 p-4`}
        >
          <p className="sm:text-base text-sm text-white">{name}</p>
        </div>
        <div
          className={`${Styles.card_box} flex justify-center items-center z-[2] relative overflow-hidden flex-col backdrop-blur-[5px] translate-x-[0%] translate-y-[20%] opacity-0 p-4`}
          onClick={onOpenModal}
        >
          <FontAwesomeIcon
            icon={faEye}
            className="sm:text-lg text-base"
            inverse={true}
          />
        </div>
      </div>
      <ProjectModal
        open={open}
        onCloseModal={onCloseModal}
        name={name}
        img={img}
        tech={tech}
        detail={detail}
        liveUrl={liveUrl}
        github={github}
      />
    </div>
  );
}

export default ProjectCard;
