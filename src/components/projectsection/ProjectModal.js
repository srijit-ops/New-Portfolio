import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Styles from "../../styles/project.module.css";
import Image from "next/image";
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";


function ProjectModal({
  open,
  onCloseModal,
  name,
  img,
  tech,
  detail,
  github,
  liveUrl,
}) {
  const { theme } = useTheme();
  return (
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
      <div className={`bg-white dark:bg-[#363636] sm:p-6 p-3`}>
        <div
          className={`${Styles.image} overflow-hidden relative rounded-[10px] w-full border-gray-200 dark:border-gray-600 border`}
        >
          <Image
            src={img}
            alt={name}
            layout="fill"
            // height={230}
            // width={238}
            className={`object-contain ${Styles.img}`}
          />
        </div>
        <div className="text-center p-3">
          <h1 className="sm:text-xl text-lg text-gray-950 dark:text-white font-semibold mx-auto my-2 tracking-wider">
            {name}
          </h1>
          {tech.map((item, index) => {
            return (
              <div
                className="tracking-wider inline-block  mx-2 my-1 sm:px-4 px-3 sm:py-2 py-1 rounded-[50px] bg-[#FF69B4] text-white"
                key={index}
              >
                <p className="sm:text-base text-xs">{item}</p>
                {/* <Tabs
              data={price}
              key={Math.random()}
              
            /> */}
              </div>
            );
          })}

          <p className="text-gray-600 dark:text-gray-300 mt-3 text-xs tracking-wider">
            {detail}
          </p>

          <div className="flex justify-center gap-12 items-center mt-8">
            <a href={github} className="flex justify-center items-center ">
            <FontAwesomeIcon icon={faGithub} className="sm:text-3xl text-2xl" inverse={theme==="dark"?true:false}/>
            </a>
            <a href={liveUrl} className="flex justify-center items-center ">
            <FontAwesomeIcon icon={faLink} className="sm:text-2xl text-xl" inverse={theme==="dark"?true:false}/>
            </a>
          </div>
          {/* <Button name={"View"}/> */}
        </div>

      </div>
    </Modal>
  );
}

export default ProjectModal;
