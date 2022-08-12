import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/header/Header";
import Img from "../public/image.png";
import Hero from "../components/hero/Hero";
import MainFeatures from "../components/features/MainFeatures";
import MoreFeatures from "../components/features/MoreFeatures";
import Link from "next/link";
import Overview from "../public/overview.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faGraduationCap, faBuilding, faTableColumns, faSackDollar, faTags, faChartColumn, faBell, faSquareCheck, faColumns, faTableCells, faTableCellsLarge, faUserShield } from "@fortawesome/free-solid-svg-icons";

const Home: NextPage = () => {
  return (
    <div className="bg-white">
      <Header />
      <Hero />
      <section className="main-container">
        <section className="my-[100px] lg:my-[200px]">
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
        <MainFeatures />
        <section className="text-center my-[140px] md:my-[180px] mx-[40px] md:mx-0">
          <div className="font-bold text-4xl text-stone-700 tracking-wide">
            Interested already? There&apos;re even more <span className="text-blue-500">features</span>!
          </div>
          <MoreFeatures />
        </section>
      </section>
      <section className="bg-[#222f3e] w-[100%] h-[300px] flex justify-around items-center">
        <div className="text-white text-5xl leading-normal tracking-normal">
          So what are you waiting for? <br /> Create your free acoount now
        </div>
        <div>
          <Link href="https://app.collaboat.cz/register">
            <button className="bg-blue-500 text-white py-[10px] px-[25px] rounded-[12px] text-xl">Get started</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
