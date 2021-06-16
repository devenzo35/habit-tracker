const HabitCard = () => {
  return (
    <figure>
      <div className="bg-gray-600 text-gray-300 border-gray-700 rounded-3xl border  group w-full h-16 flex pl-4 flex-row items-center justify-center relative duration-500 hover:bg-gray-800 hover:pr-32">
        <strong>
          <span className="text-3xl m-auto">Clean my room</span>
        </strong>
        <button className="bg-yellow-500 text-gray-800 text-3xl rounded-r-3xl absolute w-3/12 right-0 h-full opacity-0 group-hover:opacity-100 duration-500 hover:bg-yellow-400">
          <strong>DONE</strong>
        </button>
      </div>
    </figure>
  );
};

export default HabitCard;
