import React, { useState, useEffect ,useRef} from "react";
import {
  CloseIcon,
} from "../../utils/icons";
import { Dialog, DialogHeader, DialogBody } from "@material-tailwind/react";
import axiosClient from "../../../axios-client";
import { useStateContext } from "../../contexts/NavigationContext";

const AddBudget = ({ isOpen, onClose }) => {
   const { user } = useStateContext();

   const userId= user.id;
   const [budgetName, setBudgetName] = useState("");
     const [price, setPrice] = useState("");
     const [isListening, setIsListening] = useState(false);
     const [step, setStep] = useState(1);
     const [status, setStatus] = useState("");
     const recognitionRef = useRef(null);
   
     useEffect(() => {
       if ("webkitSpeechRecognition" in window) {
         recognitionRef.current = new window.webkitSpeechRecognition();
         recognitionRef.current.continuous = false;
         recognitionRef.current.interimResults = false;
         recognitionRef.current.lang = "en-US";
   
         recognitionRef.current.onstart = () => {
           setStatus("Listening...");
         };
   
         recognitionRef.current.onresult = (event) => {
           const result = event.results[0][0].transcript.trim();
           console.log("Recognized:", result);
   
           if (step === 1) {
            setBudgetName(result);
             setStatus("Processing...");
             setStep(2);
             speak("Now say the price.");
   
             setTimeout(() => {
               setStatus("Waiting for price...");
               recognitionRef.current.start(); // Restart after 6 seconds
             }, 1000);
           } else if (step === 2) {
             setPrice(result);
             setStatus("Processing...");
             setStep(3);
             speak("Do you want to save it? Say yes to confirm.");
   
             setTimeout(() => {
               setStatus("Waiting for confirmation...");
               recognitionRef.current.start();
             }, 1000);
           } else if (step === 3) {
             if (result.toLowerCase().includes("yes")) {
               saveExpense();
             }
             setIsListening(false);
             setStatus("Process completed.");
           }
         };
   
         recognitionRef.current.onend = () => {
           console.log("Recognition ended");
         };
       }
     }, [step, isListening]);
   
     const startListening = () => {
       if (!recognitionRef.current) return;
   
       setIsListening(true);
       setStep(1);
       setStatus("Say the expense name.");
       speak(" Say the expense name.");
       recognitionRef.current.start();
     };
   
     const speak = (message) => {
       const speech = new SpeechSynthesisUtterance(message);
       window.speechSynthesis.speak(speech);
     };
   
     const saveExpense = async () => {
       try {
         setStatus("Saving expense...");
         const response = await fetch("/budget", {
           method: "POST",
           headers: { "Content-Type": "application/json" },
           body: JSON.stringify({ budgetName, price,userId }),
         });
         console.log("Expense saved:", await response.json());
         setStatus("Expense saved successfully.");
       } catch (error) {
         console.error("Error saving expense:", error);
         setStatus("Error saving expense.");
       }
     };
  return (
    <Dialog
      size="sm"
      open={isOpen}
      handler={onClose}
      className="bg-white shadow-none rounded-[10px] overflow-scroll scrollbar-hide font-inter"
    >
      <DialogHeader className="flex justify-between align-center border-b border-[#ececec] pb-3">
        <div className="flex align-center">
          <div>
            <p className="font-poppins text-[18px] font-semibold leading-[28px] text-[#000000]">
             Add New Budget
            </p>
          </div>
        </div>
        <div onClick={onClose} className="cursor-pointer">
          <CloseIcon />
        </div>
      </DialogHeader>
      <DialogBody className="p-5">
      <div className="p-4 flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">Voice Expense Tracker</h2>
      <input
        type="text"
        className="w-96 p-2 border rounded mb-2"
        placeholder="Expense Name"
        value={name}
        readOnly
      />
      <input
        type="text"
        className="w-96 p-2 border rounded mb-2"
        placeholder="Price"
        value={price}
        readOnly
      />
      <button
        onClick={startListening}
        className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
        disabled={isListening}
      >
        Use Voice Command
      </button>
      {status && <p className="mt-4 text-gray-600">{status}</p>}
    </div>
      </DialogBody>
    </Dialog>
  )
}

export default AddBudget
