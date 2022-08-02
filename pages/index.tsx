import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/header/Header";
import Img from "../public/image.png";
import Hero from "../components/hero/Hero";
import School from "../icons/School";
import Person from "../icons/Person";

const Home: NextPage = () => {
  return (
    <div className="bg-white">
      <Header />
      <Hero />
      <section className="main-container">
        <section className="my-[200px]">
          <div className="text-center text-4xl mb-[50px] font-bold">
            <h2>It&apos;s build for everyone</h2>
          </div>
          <div className="customers grid grid-cols-3 w-[80%] gap-8 mx-auto">
            <div className="flex flex-col items-center justify-center bg-green-200 border-2 border-green-400 text-green-500 rounded-[12px] h-[180px]">
              <Person />
              <span className="font-bold text-xl mt-4 tracking-wide">Inviduals</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-red-100 text-red-500 rounded-[12px] h-[180px]">
              <School />
              <span className="font-bold text-xl mt-4 tracking-wide">School Project</span>
            </div>
            <div className="text-center bg-blue-100 text-blue-500 rounded-[12px] h-[180px]">
              <span>Company</span>
            </div>
          </div>
        </section>
        <section className="section__tasks mt-[160px] grid grid-cols-2">
          <div className="section__text flex items-center">
            <div className="w-[80%]">
              <span className="text-blue-500">TASKS</span>
              <h2 className="text-4xl font-bold tracking-wide text-stone-700 mb-[15px] mt-[10px] after:w-[100px] after:h-[4px] after:bg-blue-500 after:block after:mt-[30px]">See the progress</h2>
              <p className="text-xl font-light tracking-wide mt-[30px]">Simply breakdown complex project into small sections with subtasks for better managing.</p>
            </div>
          </div>
          <div className="section__img">
            <img className="hero__image" src="/docs.png" alt="" />
          </div>
        </section>
        <section className="section__report mt-[160px] grid grid-cols-2">
          <div className="section__img">
            <img className="hero__image" src="/docs.png" alt="" />
          </div>
          <div className="section__text flex items-center justify-end ">
            <div className="w-[80%]">
              <span className="text-blue-500">TEAM REPORTS</span>
              <h2 className="text-4xl font-bold tracking-wide text-stone-700 mb-[15px] mt-[10px] after:w-[100px] after:h-[4px] after:bg-blue-500 after:block after:mt-[30px]">Watch the progress</h2>
              <p className="text-xl font-light tracking-wide">Highlight important indicators into one space like statuses, time-tracking and milestones of each team members</p>
            </div>
          </div>
        </section>
        <section className="section__sessions mt-[160px] grid grid-cols-2">
          <div className="section__text flex items-center">
            <div className="w-[80%]">
              <span className="text-blue-500">SESSIONS</span>
              <h2 className="text-4xl font-bold tracking-wide text-stone-700 mb-[15px] mt-[10px] after:w-[100px] after:h-[4px] after:bg-blue-500 after:block after:mt-[30px]">Never miss your session again!</h2>
            </div>
          </div>
          <div className="section__img">
            <img className="hero__image" src="/docs.png" alt="" />
          </div>
        </section>
        <section className="section__messages mt-[160px] grid grid-cols-2">
          <div className="section__img">
            <img className="hero__image" src="/docs.png" alt="" />
          </div>
          <div className="section__text flex items-center justify-end">
            <div className="w-[80%]">
              <span className="text-blue-500">MESSAGES</span>
              <h2 className="text-4xl font-bold tracking-wide text-stone-700 mb-[15px] mt-[10px] after:w-[100px] after:h-[4px] after:bg-blue-500 after:block after:mt-[30px]">Everybody has a voice</h2>
              <p className="text-xl font-light tracking-wide">Quickly create and share updates, project announcement or polls between your team with Message view</p>
            </div>
          </div>
        </section>
        <section className="section__docs mt-[160px] grid grid-cols-2">
          <div className="section__text flex items-center">
            <div className="w-[80%]">
              <span className="text-blue-500">DOCUMENTS</span>
              <h2 className="text-4xl font-bold tracking-wide text-stone-700 mb-[15px] mt-[10px] after:w-[100px] after:h-[4px] after:bg-blue-500 after:block after:mt-[30px]">All docs in one place</h2>
              <p className="text-xl font-light tracking-wide">Access all your Docs, assets and more - then simply assign them to any tasks you want for better workflow</p>
            </div>
          </div>
          <div className="section__img">
            <img className="hero__image" src="/docs.png" alt="" />
          </div>
        </section>
        <section className="text-center my-[160px]">
          <span className="font-bold text-4xl text-stone-700 tracking-wide">
            Interested already? There&apos;re even more <span className="text-blue-500">features</span>!
          </span>
        </section>
      </section>
      <section className="bg-blue-500 w-[100%] h-[200px]">
        <div>So what are you waiting for?</div>
        <div>Create </div>
      </section>
    </div>
  );
};

export default Home;
