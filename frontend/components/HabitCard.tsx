import { Draggable } from "react-beautiful-dnd";
import { FC, useContext, useState } from "react";
import classNames from "classnames";
import { habitsContext } from "../pages/_app";

interface Props {
  name: string;
  id: number;
  done: boolean;
  index: number;
}

const HabitCard: FC<Props> = ({ id, name, done, index }) => {
  const [isDone, setIsDone] = useState(done);

  const { setHabits } = useContext(habitsContext);

  const handleDone = () => {
    setHabits((state) => ({
      pending: state.pending.filter((pendingTask) => pendingTask.id !== id),
      completed: [...state.completed, { id, name, done: true, index }],
    }));
    setIsDone(!isDone);
  };

  const taskClasses = classNames({
    "bg-gray-600": !isDone,
    "bg-yellow-600": isDone,
  });

  return (
    <Draggable draggableId={id.toString()} index={index}>
      {(provided) => (
        <figure
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div
            className={`text-gray-300 border-gray-700 rounded-3xl border  group w-full h-16 flex pl-4 flex-row items-center justify-center relative duration-500 hover:pr-32 ${taskClasses}`}
          >
            <strong>
              <span className="text-3xl m-auto">{name}</span>
            </strong>
            <button
              onClick={handleDone}
              className="bg-yellow-500 text-gray-800 text-3xl rounded-r-3xl absolute w-3/12 right-0 h-full opacity-0 group-hover:opacity-100 duration-500 hover:bg-yellow-400"
            >
              <strong>DONE</strong>
            </button>
          </div>
        </figure>
      )}
    </Draggable>
  );
};

export default HabitCard;
