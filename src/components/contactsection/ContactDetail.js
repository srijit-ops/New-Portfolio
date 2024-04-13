import React from "react";
import Styles from "../../styles/contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  faPhone,
  faLocation,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

function ContactDetail({ email, location, phone }) {
  return (
    <div className="w-full">
      <a
        className="flex justify-start items-start flex-row mb-8 cursor-pointer"
        href="tel:8910896623"
      >
        <div
          className={`flex justify-center items-center rounded-[50%] p-4 w-12 h-12 shadow-[rgba(99,99,99,0.2)_0px_2px_8px_0px] hover:scale-105 transition-all mr-6 ${Styles.iconholder}`}
        >
          <FontAwesomeIcon icon={faPhone} className="text-lg" inverse={true} />
        </div>
        <div>
          <p className="text-gray-500 sm:text-base text-sm dark:text-gray-300 tracking-wide">
            Phone
          </p>
          <p className="sm:text-xl text-sm font-semibold text-gray-950 tracking-wide mt-3  dark:text-white">
            {phone}
          </p>
        </div>
      </a>
      <a
        className="flex justify-start items-start flex-row mb-8 cursor-pointer"
        href="mailto:srijitasengupta23@gmail.com"
      >
        <div
          className={`hover:scale-105 transition-all flex justify-center items-center rounded-[50%] p-4 w-12 h-12 shadow-[rgba(99,99,99,0.2)_0px_2px_8px_0px] mr-6 ${Styles.iconholder}`}
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-lg"
            inverse={true}
          />
        </div>
        <div>
          <p className="text-gray-500 sm:text-base text-sm dark:text-gray-300  tracking-wide">
            Mail
          </p>
          <p className="sm:text-xl text-sm font-semibold text-gray-950 tracking-wide mt-3  dark:text-white">
            {email}
          </p>
        </div>
      </a>
      <a className="flex justify-start items-start flex-row mb-8 cursor-pointer">
        <div
          className={`hover:scale-105 transition-all flex justify-center items-center rounded-[50%] p-4 w-12 h-12 shadow-[rgba(99,99,99,0.2)_0px_2px_8px_0px] mr-6 ${Styles.iconholder}`}
        >
          <FontAwesomeIcon
            icon={faLocation}
            className="text-lg"
            inverse={true}
          />
        </div>
        <div>
          <p className="text-gray-500 sm:text-base text-sm dark:text-gray-300 tracking-wide">
            Location
          </p>
          <p className="sm:text-xl text-sm font-semibold text-gray-950 tracking-wide mt-3 dark:text-white">
            {location}
          </p>
        </div>
      </a>
    </div>
  );
}

export default ContactDetail;
