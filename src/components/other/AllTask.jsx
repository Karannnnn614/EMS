import React from "react";

const AllTask = () => {
  return (
    <div
      id="alltask"
      className="bg-[#4A4A4A] p-5 rounded mt-5 h-48 overflow-auto "
    >
      <div className="bg-red-400 mb-2 py-4 px-7 flex justify-between rounded">
        <h2>John Doe</h2>
        <h3>Design Homepage</h3>
        <h5>In Progress</h5>
      </div>
      <div className="bg-green-400 mb-2 py-4 px-7 flex justify-between rounded">
        <h2>Alice Brown</h2>
        <h3>Create Landing Page</h3>
        <h5>In Progress</h5>
      </div>

      <div className="bg-blue-400 mb-2 py-4 px-7 flex justify-between rounded">
        <h2>Bob Williams</h2>
        <h3>Develop API</h3>
        <h5>Pending</h5>
      </div>

      <div className="bg-yellow-400 mb-2 py-4 px-7 flex justify-between rounded">
        <h2>Charlie Davis</h2>
        <h3>Test Features</h3>
        <h5>Completed</h5>
      </div>
      <div className="bg-red-400 mb-2 py-4 px-7 flex justify-between rounded">
        <h2>Jane Smith</h2>
        <h3>Fix Bugs</h3>
        <h5>Completed</h5>
      </div>

      <div className="bg-green-400 mb-2 py-4 px-7 flex justify-between rounded">
        <h2>Mike Johnson</h2>
        <h3>Review Code</h3>
        <h5>Pending</h5>
      </div>
    </div>
  );
};

export default AllTask;
