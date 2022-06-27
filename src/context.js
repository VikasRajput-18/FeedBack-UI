import React, { createContext, useState, useContext, useEffect } from "react";
import { feedbackData } from "./data/data";
import { v4 as uuidv4 } from "uuid";

const FeedBackContext = createContext();

const FeedBackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(feedbackData);
  const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false });

  
  // add feedback
    const addFeedback = (newFeedback) => {
      newFeedback.id = uuidv4();
      setFeedback([ newFeedback , ...feedback]);
    };


    // delete feedback
  const deleteItem = (id) => {
    if (window.confirm("Are you sure you want to deleteItem")) {
      let newFeedBack = feedback.filter((item) => {
        return item.id !== id;
      });
      setFeedback(newFeedBack);
    }
  };
  //edit feedback
  const editFeedback = (item) => {
    setFeedbackEdit({ item, edit: true });
  }

  // update Feedback
  const updateFeedback = (id , updItem) => {
    setFeedback(feedback.map((item)=> item.id == id ? {...item , ...updItem} :item));
  }
  return (
    <FeedBackContext.Provider
      value={{
        addFeedback,
        deleteItem,
        feedback,
        setFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
      }}
    >
      {children}
    </FeedBackContext.Provider>
  );
};

const useGlobalFeedBack = () => {
  return useContext(FeedBackContext);
};

export { FeedBackProvider, useGlobalFeedBack };
