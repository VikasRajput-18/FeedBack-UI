import React from "react";
import FeedBackItem from "./FeedBackItem";
import PropTypes from "prop-types";
import { useGlobalFeedBack } from "../context";

const FeedbackList = () => {
  const { feedback } = useGlobalFeedBack();

  if (!feedback || feedback.length === 0) {
    return <p className="empty">Feedback is Empty</p>;
  } else {
    return (
      <div className="cont">
        {feedback.map((item) => {
          return (
            <FeedBackItem
              key={item.id}
              item={item}
            />
          );
        })}
      </div>
    );
  }
};

export default FeedbackList;
