import Head from "next/head";
import Image from "next/image";
import React from "react";
import styles from "../styles/Home.module.css";
import HabitsContainer from "../components/HabitsContainer";
import HabitsTracker from "../components/HabitsTracker";

export default function Home() {
  return (
    <div className="bg-gray-900 h-screen flex flex-row items-center justify-around">
      <h1 className="bg-black w-full text-white text-center text-3xl fixed top-0">
        Habit tracker
      </h1>

      <HabitsContainer />
      <HabitsTracker />
    </div>
  );
}
