import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faGraduationCap, faBuilding } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <section className="my-[100px] lg:my-[200px] mx-[40px] md:mx-0">
      <div className="text-center mb-[50px]">
        <h2 className="text-4xl font-bold after:w-[100px] after:h-[4px] after:bg-blue-500 md:after:block after:mx-auto mb-[25px] after:mt-[30px]">It&apos;s build for everyone</h2>
        <p className="text-xl">Collaboat is the easy way for everyone to track the work and collaborate on projects.</p>
      </div>
      <div className="customers md:grid md:grid-cols-3 w-[80%] gap-8 mx-auto">
        <div className="flex flex-col items-center justify-center border-2 rounded-[12px] h-[180px] mb-[20px]">
          <FontAwesomeIcon icon={faUser} />
          <span className="font-bold text-xl mt-4 tracking-wide">Inviduals</span>
        </div>
        <div className="flex flex-col items-center justify-center border-2 rounded-[12px] h-[180px] mb-[20px]">
          <FontAwesomeIcon icon={faGraduationCap} />
          <span className="font-bold text-xl mt-4 tracking-wide">School Project</span>
        </div>
        <div className="flex flex-col items-center justify-center border-2 rounded-[12px] h-[180px] mb-[20px]">
          <FontAwesomeIcon icon={faBuilding} />
          <span className="font-bold text-xl mt-4 tracking-wide">Company</span>
        </div>
      </div>
    </section>
  );
};

export default About;
