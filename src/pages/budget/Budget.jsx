import React from "react";

const Budget = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="text-[18px] font-semibold">Budget</div>
        <div className="flex gap-4">
          <div>
            <input
              type="text"
              placeholder="Search budget"
              className="rounded-lg border-2 border-gray-500 p-2 text-[14px] focus:border-gray-500 focus:outline-none focus:ring-0"
            />
          </div>
          <div>
            <button className="py-2 px-4 bg-[#179113] text-white font-medium text-[15px] rounded-full">Add Budget</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Budget;
