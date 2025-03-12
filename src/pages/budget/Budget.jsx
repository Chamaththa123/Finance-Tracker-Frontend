import React, { useState, useEffect } from "react";
import AddBudget from "./AddBudget";

const Budget = () => {
  const [openModal, setOpenModal] = useState(false);
  const [budget, setBudget] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [filteredBudget, setFilteredBudget] = useState([]);

  useEffect(() => {
    const fetchBudget = async () => {
      setLoading(true);
      try {
        const response = await axiosClient.get("/budget");
        setBudget(response.data);
        setFilteredBudget(response.data);
      } catch (error) {
        toast.error("Failed to fetch budgets");
      }
      setLoading(false);
    };
    fetchBudget();
  }, []);

  const handleModalOpenClick = () => {
    setOpenModal(true);
  };

  // Handler for closing the view user dialog
  const handleModalClose = () => {
    setOpenModal(false);
  };

  // Handlers for search input changes
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    const filtered = budget.filter((budget) => {
      const matchesSearch = budget.budgetName
        ? budget.budgetName.toLowerCase().includes(searchQuery.toLowerCase())
        : true;
      return matchesSearch ;
    });

    setFilteredBudget(filtered);
  }, [searchQuery, budget]);
  return (
    <>
      <div className="flex justify-between">
        <div className="text-[18px] font-semibold">Budget</div>
        <div className="flex gap-4">
          <div>
            <input
              type="text"
              placeholder="Search budget"
              name="searchQueryName"
              value={searchQuery}
              onChange={handleSearchChange}
              className="rounded-lg border-2 border-gray-500 p-2 text-[14px] focus:border-gray-500 focus:outline-none focus:ring-0"
            />
          </div>
          <div>
            <button  onClick={() => handleModalOpenClick()} className="py-2 px-4 bg-[#179113] text-white font-medium text-[15px] rounded-full">Add Budget</button>
          </div>
        </div>
      </div>
      <AddBudget  
      isOpen={openModal}
      onClose={handleModalClose}
      />
    </>
  );
};

export default Budget;
