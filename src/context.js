import React, { createContext, useState, useContext, useEffect } from "react";
import { feedbackData } from "./data/data";
import { v4 as uuidv4 } from "uuid";

const FeedBackContext = createContext();

const FeedBackProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false });

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        "/feedback?_sort=id&_order=desc"
      );
      const data = await res.json();
      setFeedback(data);
      setLoading(false);

    } catch (error) {
      console.log(error);
    }

  };
  useEffect(() => {
    fetchData();
  }, []);

  // add feedback
  const addFeedback = async (newFeedback) => {
    const res = await fetch('/feedback' , {
      method : "POST",
      headers : {
        'Content-Type' : 'application/json',
      },
      body : JSON.stringify(newFeedback),
    }
    );
    const data = await res.json()
    setFeedback([data, ...feedback]);
  };

  // delete feedback
  const deleteItem = async (id) => {
    if (window.confirm("Are you sure you want to deleteItem")) {
      await fetch(`/feedback/${id}` , {method : "DELETE"})  
      let newFeedBack = feedback.filter((item) => {
        return item.id !== id;
      });
      setFeedback(newFeedBack);
    }
  };
  //edit feedback
  const editFeedback = (item) => {
    setFeedbackEdit({ item, edit: true });
  };

  // update Feedback
  const updateFeedback = async (id, updItem) => {
    const res = await fetch(`/feedback/${id}` , {
      method : "PUT" ,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updItem)
  }
    )
    const data = await res.json();     
    setFeedback(
      feedback.map((item) => (item.id == id ? { ...item, ...data } : item))
    );
  };
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
        loading
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
