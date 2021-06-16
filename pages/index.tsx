import Head from "next/head";
import Image from "next/image";
import React from "react";
import styles from "../styles/Home.module.css";
import HabitsContainer from "../components/HabitsContainer";
import HabitsTracker from "../components/HabitsTracker";
import { DragDropContext } from "react-beautiful-dnd";

export default function Home() {
  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.draggableId === source.draggableId ||
      destination.index === source.index
    ) {
      return;
    }

    const column = "1";

    const newHabitsList = Array.from(column.taskId);
  };
  return (
    <div className="bg-gray-900 h-screen flex flex-row items-center justify-around">
      <h1 className="bg-black w-full text-white text-center text-3xl fixed top-0">
        Habit tracker
      </h1>
      <DragDropContext onDragEnd={onDragEnd}>
        <HabitsContainer />
      </DragDropContext>
      <HabitsTracker />
    </div>
  );
}
