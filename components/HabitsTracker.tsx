const HabitsTracker = () => {
  return (
    <div className="bg-gray-800 rounded-md border border-gray-700 w-5/12 h-3/6 p-5">
      <figure>
        <div className="bg-gray-600 text-gray-300  hover:bg-gray-800 rounded-3xl border border-gray-700 w-full h-2/6 flex flex-row items-center justify-center">
          <strong>
            <span className="text-3xl">Clean my room</span>
          </strong>
        </div>
      </figure>
      <div className="bg-red-300 text-gray-300 rounded-xl border border-gray-700 w-full h-1/6 flex flex-row items-center justify-center"></div>
      <div className="bg-green-300 text-gray-300  rounded-xl border border-gray-700 w-full h-1/6 flex flex-row items-center justify-center"></div>
      <div className="bg-gray-800 text-gray-300  rounded-xl border border-gray-700 w-full h-1/6 flex flex-row items-center justify-center"></div>
    </div>
  );
};

export default HabitsTracker;
