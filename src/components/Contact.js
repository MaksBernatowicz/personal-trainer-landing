import React from "react";

// import data
import { contact } from "../data";

const Contact = () => {
  // destructure contact data
  const { title, contacts } = contact;

  return (
    <section
      id="contact"
      className="py-[80px] md:py-[110px] lg:pt-[140px] lg:pb-[180px]"
    >
      <div className="container mx-auto px-[20px] lg:px-[135px]">
        {/* section title */}
        <div
          className="section-title-group justify-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {/* <img src={icon} alt="" /> */}
          <h2 className="h2 section-title">
            {title} <span className="text-primary-200">.</span>
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row justify-center mx-auto gap-8">
          {contacts.map((contactInfo, idx) => {
            // destructure contactInfo
            const { name, data, href, text, icon } = contactInfo;
            return (
              <div
                key={idx}
                className="section-title-group justify-center"
                data-aos="fade-up"
                data-aos-delay="200"
              >
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
      </div>
    </section>
  );
};

export default Contact;
