import React from "react";

const TaskList = () => {
  return (
    <div
      id="tasklist"
      className="mt-14 h-[54%] w-full overflow-x-auto py-5 flex mt-10 flex item-center justify-start gap-6 flex-nowrap"
    >
      {/* Task 1 */}
      <div className="flex-shrink-0 h-full w-[340px] p-5 bg-red-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 py-1 rounded text-xl">High</h3>
          <h4 className="text-sm">20 Nov 2024</h4>
        </div>
        <h2 className="mt-5 text-3xl font-semibold">
          Make a Notion To Do List
        </h2>
        <p className="text-sm mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit, doloremque veniam minus beatae cupiditate officiis.
        </p>
      </div>

      {/* Task 2 */}
      <div className="flex-shrink-0 h-full w-[340px] p-5 bg-blue-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-blue-600 px-3 py-1 rounded text-xl">Medium</h3>
          <h4 className="text-sm">22 Nov 2024</h4>
        </div>
        <h2 className="mt-5 text-3xl font-semibold">
          Update Project Documentation
        </h2>
        <p className="text-sm mt-4">
          Ensure all project details are up-to-date and aligned with the latest
          development phase.
        </p>
      </div>

      {/* Task 3 */}
      <div className="flex-shrink-0 h-full w-[340px] p-5 bg-green-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-green-600 px-3 py-1 rounded text-xl">Low</h3>
          <h4 className="text-sm">25 Nov 2024</h4>
        </div>
        <h2 className="mt-5 text-3xl font-semibold">Organize Team Meeting</h2>
        <p className="text-sm mt-4">
          Schedule a meeting to discuss project milestones and upcoming
          deliverables.
        </p>
      </div>

      {/* Task 4 */}
      <div className="flex-shrink-0 h-full w-[340px] p-5 bg-yellow-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-yellow-600 px-3 py-1 rounded text-xl">Medium</h3>
          <h4 className="text-sm">28 Nov 2024</h4>
        </div>
        <h2 className="mt-5 text-3xl font-semibold">
          Research New Tech Trends
        </h2>
        <p className="text-sm mt-4">
          Explore the latest trends in AI, ML, and cloud technologies for
          potential integration.
        </p>
      </div>

      {/* Task 5 */}
      <div className="flex-shrink-0 h-full w-[340px] p-5 bg-purple-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-purple-600 px-3 py-1 rounded text-xl">High</h3>
          <h4 className="text-sm">30 Nov 2024</h4>
        </div>
        <h2 className="mt-5 text-3xl font-semibold">
          Prepare Presentation Slides
        </h2>
        <p className="text-sm mt-4">
          Create slides for the upcoming Innovation Blitz 2.0 event
          presentation.
        </p>
      </div>
      <div className="flex-shrink-0 h-full w-[340px] p-5 bg-red-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 py-1 rounded text-xl">High</h3>
          <h4 className="text-sm">20 Nov 2024</h4>
        </div>
        <h2 className="mt-5 text-3xl font-semibold">
          Make a Notion To Do List
        </h2>
        <p className="text-sm mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit, doloremque veniam minus beatae cupiditate officiis.
        </p>
      </div>
    </div>
  );
};

export default TaskList;
