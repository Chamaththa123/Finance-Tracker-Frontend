import React, { useState, useEffect } from "react";
import AddExpense from "./AddExpense";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosClient from "../../../axios-client";
import { useStateContext } from "../../contexts/NavigationContext";
import Swal from "sweetalert2";
import EditExpense from "./EditExpense";

const Expense = () => {
  const { user } = useStateContext();
  const userId = user.id;
  const [openModal, setOpenModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [selectedExpenseId, setSelectedExpenseId] = useState(null);
  const [expense, setExpense] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredExpense, setFilteredExpense] = useState([]);

  const fetchExpense = async () => {
    try {
      const response = await axiosClient.get(`/expense/user/${userId}`);
      setExpense(response.data);
      setFilteredExpense(response.data);
    } catch (error) {
      console.error("Fetch Expense Error:", error.response?.data || error.message);
      toast.error("Failed to fetch Expenses");
    }
  };

  useEffect(() => {
    fetchExpense();
  }, [userId]);

  const handleModalOpenClick = () => {
    setOpenModal(true);
  };

  const handleEditModalOpenClick = (expenseId) => {
    console.log("Edit button clicked for Expense ID:", expenseId);
    setSelectedExpenseId(expenseId);
    setOpenEditModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
    setOpenEditModal(false);
    setSelectedExpenseId(null);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    const filtered = expense.filter((expense) =>
      expense.title?.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredExpense(filtered);
  }, [searchQuery, expense]);

  const handleDelete = async (id) => {
    console.log("Delete button clicked for Expense ID:", id);
    const token = localStorage.getItem('token');
    console.log("Token:", token);

    const result = await Swal.fire({
      title: "Are you sure?",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      try {
        await axiosClient.delete(`/expense/${id}`, {
          headers: { 'x-auth-token': token },
        });
        toast.success("Expense deleted successfully");
        fetchExpense();
      } catch (error) {
        console.error("Delete Error:", error.response?.data || error.message);
        toast.error(`Failed to delete expense: ${error.response?.data.message || error.message}`);
      }
    }
  };

  const totalExpense = expense.reduce((sum, item) => sum + (item.amount || 0), 0);

  return (
    <>
      <div className="flex justify-between">
        <div className="text-[18px] font-semibold">Expense</div>
        <div className="flex gap-4">
          <div>
            <input
              type="text"
              placeholder="Search expense"
              name="searchQueryName"
              value={searchQuery}
              onChange={handleSearchChange}
              className="rounded-lg border-2 border-gray-500 p-2 text-[14px] focus:border-gray-500 focus:outline-none focus:ring-0"
            />
          </div>
          <div>
            <button
              onClick={() => handleModalOpenClick()}
              className="rounded-full bg-[#25C935] px-4 py-2 text-[15px] font-medium text-white"
            >
              Add Expense
            </button>
          </div>
        </div>
      </div>
      <div className="flex my-10">
        <div className="h-auto w-[200px] rounded-lg border-2 border-gray-300 p-4">
          <div className="font-extrabold uppercase">Rs.{totalExpense.toFixed(2)}</div>
          <div className="font-bold uppercase text-gray-600 text-[14px]">Total expense</div>
        </div>
      </div>
      <div className="relative mt-10 overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700 font-extrabold">
            <tr>
              <th scope="col" className="px-6 py-3">Title</th>
              <th scope="col" className="px-6 py-3">Description</th>
              <th scope="col" className="px-6 py-3">Amount</th>
              <th scope="col" className="px-6 py-3">Date</th>
              <th scope="col" className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredExpense.length > 0 ? (
              filteredExpense.map((item) => (
                <tr key={item._id} className="border-b border-gray-200 bg-white text-gray-900">
                  <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium">
                    {item.title}
                  </th>
                  <td className="px-6 py-4">{item.description}</td>
                  <td className="px-6 py-4">Rs. {item.amount?.toFixed(2)}</td>
                  <td className="px-6 py-4">{new Date(item.createdAt).toLocaleString()}</td>
                  <td className="flex gap-4 px-6 py-4">
                    <button
                      onClick={() => handleEditModalOpenClick(item._id)}
                      className="rounded-md bg-black px-2 py-1 font-medium text-white"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="rounded-md bg-red-600 px-2 py-1 font-medium text-white"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="px-6 py-4 text-center">
                  No expenses available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <AddExpense
        isOpen={openModal}
        onClose={handleModalClose}
        fetchExpense={fetchExpense}
      />
      {openEditModal && (
        <EditExpense
          isOpen={openEditModal}
          onClose={handleModalClose}
          fetchExpense={fetchExpense}
          selectedExpenseId={selectedExpenseId}
        />
      )}
      <ToastContainer />
    </>
  );
};

export default Expense;