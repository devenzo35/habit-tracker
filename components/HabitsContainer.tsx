import HabitCard from "./HabitCard";
const HabitsContainer = () => {
  return (
    <div className="bg-gray-800 border-gray-700 rounded-md flex flex-col justify-around border gap-2 w-5/12 h-3/6 p-5">
      <HabitCard />
      <HabitCard />
      <HabitCard />
      <HabitCard />
    </div>
  );
};

export default HabitsContainer;
