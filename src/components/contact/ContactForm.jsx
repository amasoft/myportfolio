import Button from "../reusable/Button";
import FormInput from "../reusable/FormInput";
import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";
// import Button from "./reusable/Button";
import { ToastContainer, toast } from "react-toastify";
import { useRef, useState } from "react";
import Axios from "axios";
import "react-toastify/dist/ReactToastify.css";
const ContactForm = () => {
  const [nameInput, setname] = useState("");
  const name = useRef("");
  const email = useRef("");
  const subject = useRef("");
  const message = useRef("");

  const contactMehandle = () => {
    // toast.success("hireme clicking");
    var data = {
      fullName: name.current.value,
      email: email.current.value,
      subject: subject.current.value,
      message: message.current.value,
    };
    console.log("details", JSON.stringify(data));
    Axios.post(
      "https://portfoliobackend-9wlr.onrender.com/api/v1/portfolio/contactme",
      // "http://localhost:5000/api/v1/portfolio/contactme",
      {
        fullName: name.current.value,
        email: email.current.value,
        subject: subject.current.value,
        message: message.current.value,
      }
    )
      .then((response) => {
        console.log("success", response);
        toast.success("message sent succesfully");
        // clearData();
        // onClose();
      })
      .catch((error) => {
        console.log("error", error);
        toast.success("eror sending request");
      });
  };

  return (
    <>
      <ToastContainer />

      <div className="w-full lg:w-1/2">
        <div className="leading-loose">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
          >
            <p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
              Contact Form
            </p>
            <label
              class="block text-lg text-primary-dark dark:text-primary-light mb-1"
              for="email"
            >
              FullName
            </label>
            <input
              className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
              inputLabel="Full Name"
              labelFor="name"
              type="text"
              inputId="name"
              ref={name}
              inputName="name"
              placeholderText="Your Name"
              ariaLabelName="Name"
            />
            <label
              class="block text-lg text-primary-dark dark:text-primary-light mb-1"
              for="email"
            >
              Email
            </label>
            <input
              className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
              labelFor="email"
              inputType="email"
              inputId="email"
              ref={email}
              inputName="email"
              placeholderText="Your email"
              ariaLabelName="Email"
            />
            <label
              class="block text-lg text-primary-dark dark:text-primary-light mb-1"
              for="email"
            >
              Subject
            </label>
            <input
              className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
              labelFor="subject"
              inputType="text"
              inputId="subject"
              ref={subject}
              inputName="subject"
              placeholderText="Subject"
              ariaLabelName="Subject"
            />

            <div className="mt-6">
              <label
                className="block text-lg text-primary-dark dark:text-primary-light mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
                id="message"
                name="message"
                cols="14"
                ref={message}
                rows="6"
                aria-label="Message"
              ></textarea>
            </div>

            <div className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
              <Button
                title="Send Message"
                type="submit"
                onclick={contactMehandle}
                aria-label="Send Message"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
