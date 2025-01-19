import React from "react";
import TaskList from "../TaskList/TaskList";

const TaskListNumbers = () => {
  return (
    <div className="flex mt-10 justify-between gap-5 screen">
      <div className="h-40 py-6 px-9 rounded-xl w-[45%] bg-blue-400">
        <h2 className="text-4xl pt-5 font-semibold">1</h2>
        <h3 className="text-3xl font-medium">New Task</h3>
      </div>
      <div className="h-40 py-6 px-9 rounded-xl w-[45%] bg-green-400">
        <h2 className="text-4xl pt-5 font-semibold">3</h2>
        <h3 className="text-3xl font-medium">Completed Task</h3>
      </div>
      <div className="h-40 py-6 px-9 rounded-xl w-[45%]  bg-yellow-400">
        <h2 className="text-4xl pt-5 font-semibold text-black">0</h2>
        <h3 className="text-3xl font-medium text-black ">Accepted Task</h3>
      </div>
      <div className="h-40 py-6 px-9 rounded-xl w-[45%] bg-red-400">
        <h2 className="text-4xl pt-5 font-semibold">0</h2>
        <h3 className="text-3xl font-medium">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
