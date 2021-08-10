import { useContext } from "react";
import { habitsContext } from "../pages/_app";
import { CompletedHabit } from "./CompletedHabit";
const CompletedHabits = () => {
  const {
    habits: { completed },
  } = useContext(habitsContext);

  console.log(completed);

  return (
    <div className="bg-gray-800 rounded-md border border-gray-700 w-5/12 h-3/6 p-5 flex flex-col gap-6  overflow-auto">
      {completed.map((habit) => {
        return <CompletedHabit {...habit} />;
      })}
    </div>
  );
};

export default CompletedHabits;
