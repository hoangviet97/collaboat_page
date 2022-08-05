import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/header/Header";
import Img from "../public/image.png";
import Hero from "../components/hero/Hero";
import School from "../icons/School";
import Person from "../icons/Person";
import Link from "next/link";
import Footer from "../components/footer/Footer";

const Home: NextPage = () => {
  return (
    <div className="bg-white">
      <Header />
      <Hero />
      <section className="main-container">
        <section className="my-[100px] lg:my-[200px]">
          <div className="text-center text-4xl mb-[50px] font-bold">
            <h2>It&apos;s build for everyone</h2>
          </div>
          <div className="customers md:grid md:grid-cols-3 w-[80%] gap-8 mx-auto">
            <div className="flex flex-col items-center justify-center bg-green-200 border-2 border-green-400 text-green-500 rounded-[12px] h-[180px] mb-[20px]">
              <Person />
              <span className="font-bold text-xl mt-4 tracking-wide">Inviduals</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-red-100 text-red-500 rounded-[12px] h-[180px] mb-[20px]">
              <School />
              <span className="font-bold text-xl mt-4 tracking-wide">School Project</span>
            </div>
            <div className="text-center bg-blue-100 text-blue-500 rounded-[12px] h-[180px] mb-[20px]">
              <span>Company</span>
            </div>
          </div>
        </section>
        <section className="section__tasks mt-[110px] lg:mt-[160px] mx-[20px] mb-[50px] md:mb-[0px] lg:mx-0 md:grid md:grid-cols-2">
          <div className="section__text flex items-center mb-[30px] md:mb-0 ">
            <div className="lg:w-[85%] text-center md:text-left">
              <span className="text-blue-500">TASKS</span>
              <h2 className="text-4xl font-bold tracking-wide text-stone-700 mb-[15px] mt-[10px] after:w-[100px] after:h-[4px] after:bg-blue-500 md:after:block after:mx-auto md:mx-0 after:mt-[30px] ">See the progress</h2>
              <p className="text-xl font-light tracking-wide mt-[30px]">Simply breakdown complex project into small sections with subtasks for better managing.</p>
              <button>Read more</button>
            </div>
          </div>
          <div className="section__img ">
            <img className="hero__image" src="/docs.png" alt="" />
          </div>
        </section>
        <section className="section__report mt-[110px] lg:mt-[160px] mx-[40px] lg:mx-0 grid md:grid-cols-2 ">
          <div className="section__img col-start-1 col-span-3 md:col-span-1">
            <img className="hero__image relative" src="/docs.png" alt="" />
          </div>
          <div className="section__text flex items-center justify-end mb-[30px] md:mb-0 col-start-1 col-span-3 row-start-1 md:col-start-2">
            <div className="lg:w-[85%] text-center md:text-left">
              <span className="text-blue-500">TEAM REPORTS</span>
              <h2 className="text-4xl font-bold tracking-wide text-stone-700 mb-[15px] mt-[10px] after:w-[100px] after:h-[4px] after:bg-blue-500 md:after:block after:mx-auto md:after:mx-0 after:mt-[30px]">Watch the progress</h2>
              <p className="text-xl font-light tracking-wide">Highlight important indicators into one space like statuses, time-tracking and milestones of each team members</p>
              <button>Read more</button>
            </div>
          </div>
        </section>
        <section className="section__sessions mt-[110px] lg:mt-[160px] mx-[20px] lg:mx-0 md:grid md:grid-cols-2">
          <div className="section__text mb-[30px] md:mb-0 flex items-center">
            <div className="lg:w-[85%] text-center md:text-left">
              <span className="text-blue-500">MESSAGES</span>
              <h2 className="text-4xl font-bold tracking-wide text-stone-700 mb-[15px] mt-[10px] after:w-[100px] after:h-[4px] after:bg-blue-500 after:block after:mx-auto md:after:mx-0 after:mt-[30px]">Watch the progress</h2>
              <p className="text-xl font-light tracking-wide">Quickly create and share updates, project announcement or polls between your team with Message view</p>
              <button>Read more</button>
            </div>
          </div>
          <div className="section__img">
            <img className="hero__image" src="/docs.png" alt="" />
          </div>
        </section>
        <section className="section__messages mt-[160px] grid md:grid-cols-2">
          <div className="section__img col-start-1 col-span-3 md:col-span-1">
            <img className="hero__image" src="/docs.png" alt="" />
          </div>
          <div className="section__text flex items-center justify-end col-start-1 col-span-3 row-start-1 md:col-start-2">
            <div className="lg:w-[85%] text-center md:text-left">
              <span className="text-blue-500">DOCUMENTS</span>
              <h2 className="text-4xl font-bold tracking-wide text-stone-700 mb-[15px] mt-[10px] after:w-[100px] after:h-[4px] after:bg-blue-500 after:block after:mx-auto  after:mt-[30px]">Everybody has a voice</h2>
              <p className="text-xl font-light tracking-wide">Access all your Docs, assets and more - then simply assign them to any tasks you want for better workflow</p>
              <Link href="/documents">Read more</Link>
            </div>
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
