import React from "react";
import ContactDetail from "./ContactDetail";
import ContactForm from "./ContactForm";
import Heading from "../common/Heading";

function Contact({ contactData }) {
  return (
    <div className="w-full my-20 lg:px-28 md:px-16 sm:px-8 px-5 relative">
      <Heading
        name={"Contact Me."}
        subtitle={"Hit Me Up: Let's Talk Code, Coffee, and Nature."}
      />
      <div className="flex justify-between items-start flex-wrap flex-row mt-14">
        <div className="xl:w-3/12 w-full mx-4">
          <ContactDetail
            email={contactData.email}
            location={contactData.location}
            phone={contactData.mobile}
          />
        </div>
        <div className="xl:w-7/12 w-full mx-4">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;
