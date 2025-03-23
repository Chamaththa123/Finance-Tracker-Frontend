import React from "react";

const Summary = ({ data }) => {
  return (
    <div className="flex gap-10">
      <div className="h-auto w-1/4 border-2 border-black bg-[black] p-4">
        <div className="text-[13px] font-bold uppercase text-gray-300">
          Current Total Saving
        </div>
        <div className="pt-1 text-[20px] font-extrabold uppercase text-white">
          Rs.{parseFloat(data.totalSaving).toFixed(2)}
        </div>
      </div>

      <div className="h-auto w-1/4 border-2 border-white bg-white p-4">
        <div className="text-[13px] font-bold uppercase text-gray-700">
          month Saving
        </div>
        <div className="pt-1 text-[20px] font-extrabold uppercase text-black">
        Rs.{(parseFloat(data.totalIncome) - parseFloat(data.totalExpense)).toFixed(2)}
        </div>
      </div>

      <div className="h-auto w-1/4 border-2 border-white bg-white p-4">
        <div className="text-[13px] font-bold uppercase text-gray-700">
          month total income
        </div>
        <div className="pt-1 text-[20px] font-extrabold uppercase text-black">
          Rs.{parseFloat(data.totalIncome).toFixed(2)}
        </div>
      </div>

      <div className="h-auto w-1/4 border-2 border-white bg-white p-4">
        <div className="text-[13px] font-bold uppercase text-gray-700">
          month total expense
        </div>
        <div className="pt-1 text-[20px] font-extrabold uppercase text-black">
          Rs.{parseFloat(data.totalExpense).toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default Summary;
