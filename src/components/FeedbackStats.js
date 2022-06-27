import React from 'react'

import PropTypes from 'prop-types'
import { useGlobalFeedBack } from '../context';

const FeedbackStats = ({ reverse }) => {
  const {feedback} = useGlobalFeedBack();
  let average =
    feedback.reduce((acc, item) => {
      return (acc += item.rating);
    }, 0) / feedback.length;

  return (
    <div className={`feedback-stats ${reverse && "reverse"}`}>
      <h3 className="feedback-length">{feedback.length} Reviews</h3>
      <h3 className="average-rating">
        Average Rating :{" "}
        {isNaN(average) ? 0 : average.toFixed(1).replace(/[.,]0$/, "")}
      </h3>
    </div>
  );
};

FeedbackStats.defaultProps = { reverse: true };

// FeedbackStats.prototype = {
//     feedback:PropTypes.array.isRequired
// }

export default FeedbackStats