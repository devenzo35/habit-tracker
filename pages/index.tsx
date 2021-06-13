import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="bg-gray-900 h-screen flex flex-row items-center justify-around">
      <h1 className="bg-black w-full text-white text-center text-3xl fixed top-0">
        Habit tracker
      </h1>

      <div className="bg-gray-800 rounded-md border border-gray-700 w-5/12 h-3/6 p-5">
        <figure>
          <div className="bg-gray-600 text-gray-300  hover:bg-gray-800 rounded-3xl border border-gray-700 w-full h-2/6 flex flex-row items-center justify-between">
            <strong>
              <span className="text-3xl">Clean my room</span>
            </strong>
            <button className="bg-yellow-500 rounded-r-3xl w-3/12 h-full">
              {" "}
              Done!{" "}
            </button>
          </div>
        </figure>
      </div>
    </div>
  );
}
