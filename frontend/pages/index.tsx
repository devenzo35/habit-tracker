import Head from "next/head";
import Image from "next/image";
import React from "react";
import styles from "../styles/Home.module.css";
import HabitsContainer from "../components/HabitsContainer";
import { DragDropContext } from "react-beautiful-dnd";
import { useEffect, useState, useContext } from "react";
import CompletedHabits from "../components/CompletedHabits";
import { habitsContext } from "./_app";

export default function Home() {
  const [notes, setNotes] = useState([]);
  const { setHabits } = useContext(habitsContext);

  useEffect(() => {
    fetch("http://localhost:1337/tasks")
      .then((res) => res.json())
      .then((json) =>
        setHabits((state) => ({ pending: json, completed: state.completed }))
      );
  }, []);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    console.log("drag end");

    /* if (!destination) {
      return;
    }

    if (
      destination.draggableId === source.draggableId ||
      destination.index === source.index
    ) {
      return;
    } */

    const newColumn = Array.from(notes);
    newColumn.splice(source.index, 1);
    newColumn.splice(destination.index, 0, notes[source.index]);

    setNotes(newColumn);
  };

  return (
    <div className="bg-gray-900 h-screen flex flex-row items-center justify-around">
      <h1 className="bg-black w-full text-white text-center text-3xl fixed top-0">
        Habit tracker
      </h1>
      <DragDropContext onDragEnd={onDragEnd}>
        <HabitsContainer notes={notes} />
      </DragDropContext>
      <CompletedHabits />
    </div>
  );
}
