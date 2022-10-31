import React from "react";

// import data
import { contact } from "../data";

const Contact = () => {
  // destructure contact data
  const { title, contacts } = contact;

  return (
    <section id="contact" className="section">
      {/* section title */}
      <div className="h2">{title}</div>
      <div className="flex flex-col lg:flex-row justify-center mx-auto gap-8">
        {contacts.map((contactInfo, idx) => {
          // destructure contactInfo
          const { name, data, href, text, icon } = contactInfo;
          return (
            <div key={idx}>
              <div
                className="w-[350px] h-[150px] lg:h-[350px] bg-neutral-500
                flex flex-col justify-center mx-auto p-[65px] rounded-[12px]  
                text-lg text-center
                hover:bg-opacity-60 hover:bg-primary-300 transition-all
              hover:border-neutral-400 hover:border-[1px] shadow-2xl"
              >
                <div className="flex justify-center items-center gap-2 text-2xl font-bold">
                  {icon}
                  <span className="text-neutral-200">{name}</span>
                </div>
                <div className="text-sm text-neutral-300">{data}</div>
                <a
                  href={href}
                  className="bg-primary-200 cursor-pointer rounded-[8px]
                  text-neutral-100 text-base font-medium
                  mt-[10px] mx-auto px-[20px] py-[10px]
                  hover:text-neutral-500"
                >
                  {text}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Contact;
