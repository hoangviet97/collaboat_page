import React from "react";
import Link from "next/link";

const MainFeatures = () => {
  return (
    <div>
      <section className="section__tasks mt-[110px] lg:mt-[160px] mx-[20px] mb-[50px] md:mb-[0px] lg:mx-0 md:grid md:grid-cols-2">
        <div className="section__text flex items-center mb-[30px] md:mb-0 ">
          <div className="lg:w-[85%] text-center md:text-left">
            <span className="text-blue-500">PROJECTS &#38; TASKS</span>
            <h2 className="text-4xl font-bold tracking-wide text-stone-700 mb-[15px] mt-[10px] after:w-[100px] after:h-[4px] after:bg-blue-500 md:after:block after:mx-auto md:after:mx-0 after:mt-[30px]">Work with tasks for maximum productivity</h2>
            <p className="text-xl font-light tracking-wide mt-[25px]">Simply break down complex project into small sections with subtasks for better managing.</p>
            <Link href="/tasks">
              <button className="text-blue-500 mt-[10px]">Read more</button>
            </Link>
          </div>
        </div>
        <div className="section__img ">
          <img className="hero__image" src="/projects.png" alt="project" />
        </div>
      </section>
      <section className="section__report mt-[110px] lg:mt-[160px] mx-[40px] lg:mx-0 grid md:grid-cols-2 ">
        <div className="section__img col-start-1 col-span-3 md:col-span-1">
          <img className="hero__image relative" src="/team.png" alt="team" />
        </div>
        <div className="section__text flex items-center justify-end mb-[30px] md:mb-0 col-start-1 col-span-3 row-start-1 md:col-start-2">
          <div className="lg:w-[85%] text-center md:text-left">
            <span className="text-blue-500">TEAM</span>
            <h2 className="text-4xl font-bold tracking-wide text-stone-700 mb-[15px] mt-[10px] after:w-[100px] after:h-[4px] after:bg-blue-500 md:after:block after:mx-auto md:after:mx-0 after:mt-[30px]">Perfect team is a cornerstone of success</h2>
            <p className="text-xl font-light tracking-wide mt-[25px]">Effectively control your team. Send invitations, manage your teammates and assign them different roles.</p>
            <Link href="/team">
              <button className="text-blue-500 mt-[10px]">Read more</button>
            </Link>
          </div>
        </div>
      </section>
      <section className="section__sessions mt-[110px] lg:mt-[160px] mx-[20px] lg:mx-0 md:grid md:grid-cols-2">
        <div className="section__text mb-[30px] md:mb-0 flex items-center">
          <div className="lg:w-[85%] text-center md:text-left">
            <span className="text-blue-500">MESSAGES</span>
            <h2 className="text-4xl font-bold tracking-wide text-stone-700 mb-[15px] mt-[10px] after:w-[100px] after:h-[4px] after:bg-blue-500 after:block after:mx-auto md:after:mx-0 after:mt-[30px]">Keep everyone on the same page</h2>
            <p className="text-xl font-light tracking-wide mt-[25px]">Quickly create and share updates, project announcement or polls between your team with Message view</p>
            <Link href="/messages">
              <button className="text-blue-500 mt-[10px]">Read more</button>
            </Link>
          </div>
        </div>
        <div className="section__img">
          <img className="hero__image" src="/messages.png" alt="" />
        </div>
      </section>
      <section className="section__messages mt-[110px] lg:mt-[160px] mx-[20px] grid md:grid-cols-2">
        <div className="section__img col-start-1 col-span-3 md:col-span-1">
          <img className="hero__image" src="/docs.png" alt="" />
        </div>
        <div className="section__text flex items-center justify-end mb-[30px] md:mb-0 col-start-1 col-span-3 row-start-1 md:col-start-2">
          <div className="lg:w-[85%] text-center md:text-left">
            <span className="text-blue-500">DOCUMENTS</span>
            <h2 className="text-4xl font-bold tracking-wide text-stone-700 mb-[15px] mt-[10px] after:w-[100px] after:h-[4px] after:bg-blue-500 after:block after:mx-auto md:after:mx-0 after:mt-[30px]">All files in one place</h2>
            <p className="text-xl font-light tracking-wide mt-[25px]">Access all your Docs, assets and more - then simply assign them to any tasks you want for better workflow</p>
            <Link href="/documents">
              <button className="text-blue-500 mt-[10px]">Read more</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainFeatures;
