import HabitCard from "./HabitCard";
import { Droppable } from "react-beautiful-dnd";
import { useEffect, useState, useContext } from "react";
import { habitsContext } from "../pages/_app";

const HabitsContainer = ({ notes }) => {
  const {
    habits: { pending },
  } = useContext(habitsContext);

  return (
    <Droppable droppableId={"1"}>
      {(provided) => (
        <div
          className="bg-gray-800 border-gray-700 rounded-md flex flex-col justify-around border gap-2 w-5/12 h-3/6 p-5"
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          {pending.map((note, index) => {
            return <HabitCard key={note.id} {...note} index={index} />;
          })}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default HabitsContainer;
