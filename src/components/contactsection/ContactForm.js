import React from "react";
import Button from "../common/Button";

function ContactForm() {
  return (
    <div className="w-full">
      <form
        action="https://formsubmit.co/srijitasengupta23@gmail.com"
        method="POST"
      >
        <input
          type="text"
          placeholder="Name"
          name="Name"
          required
          className="block w-full mx-auto my-8 outline-none border border-gray-100 dark:border-[#363636] focus:dark:border-gray-500 focus:border-gray-300 p-3 rounded-[10px] bg-gray-100 dark:bg-[#363636] sm:text-base text-sm"
        />
        <input
          type="email"
          placeholder="Email"
          name="Email"
          required
          className="block w-full mx-auto my-8 outline-none border border-gray-100 dark:border-[#363636] focus:dark:border-gray-500 focus:border-gray-300 p-3 rounded-[10px] bg-gray-100 dark:bg-[#363636] sm:text-base text-sm"
        />
        <textarea
          name="Message"
          placeholder="Message"
          rows={4}
          required
          className="block w-full mx-auto my-8 outline-none border dark:border-[#363636] focus:dark:border-gray-500 border-gray-100 focus:border-gray-300 p-3 rounded-[10px] bg-gray-100 dark:bg-[#363636] sm:text-base text-sm"
        ></textarea>
        <Button type={"submit"} name={"Send"} />
      </form>
    </div>
  );
}

export default ContactForm;
