import React from "react";

const CreateTask = () => {
  return (
    <div className="p-5 bg-[#4A4A4A] mt-7 rounded">
      <form className="flex flex-wrap w-full items-start justify-between">
        <div className="w-1/2 ">
          <div>
            <h3 className="text-sm text-gray-200 mb-0.5">Task Title</h3>
            <input
              className="mt-2 text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] borrder-gray-400 mb-4"
              type="text"
              placeholder="Enter task title"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-200 mb-0.5">Date</h3>
            <input
              className="mt-2 text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] borrder-gray-400 mb-4"
              type="date"
              name=""
              id=""
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-200 mb-0.5">Assign To</h3>
            <input
              className="mt-2 text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] borrder-gray-400 mb-4"
              type="text"
              placeholder="Employe Name"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-200 mb-0.5">Category</h3>
            <input
              className="mt-2 text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] borrder-gray-400 mb-4"
              type="text"
              placeholder="e.g., UI Design, Backend Development"
            />
          </div>
        </div>
        <div className="w-1/2">
          <h3 className="text-sm text-gray-200 mb-0.5">Description</h3>
          <textarea
            className="mt-3 w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-300"
            placeholder="Enter task description"
          />
          <button className="text-3xl bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-8 w-full">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
