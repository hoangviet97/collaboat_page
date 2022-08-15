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
import About from "../components/about/About";

const Home: NextPage = () => {
  return (
    <div className="bg-white">
      <Header />
      <Hero />
      <section className="main-container">
        <About />
        <MainFeatures />
        <section className="text-center my-[140px] md:my-[180px] mx-[40px] md:mx-0">
          <div className="font-bold text-4xl text-stone-700 tracking-wide">
            Interested already? There&apos;re even more <span className="text-blue-500">features</span>!
          </div>
          <MoreFeatures />
        </section>
      </section>
      <section className="bg-[#222f3e] w-[100%] h-[300px] flex justify-center items-center">
        <div className="flex flex-col md:flex-row md:justify-around items-center gap-[50px]">
          <div className="text-white text-2xl md:text-3xl lg:text-4xl leading-normal tracking-normal">
            So what are you waiting for? <br /> Create your free acoount now
          </div>
          <div>
            <Link href="https://app.collaboat.cz/register">
              <button className="bg-blue-500 text-white py-[10px] px-[25px] rounded-[12px] text-md md:text-xl">Get started</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
