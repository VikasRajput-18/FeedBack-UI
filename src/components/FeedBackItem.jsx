import React from "react";
import Card from "./shared/Card";
import PropTypes from "prop-types";
import { useGlobalFeedBack } from "../context";
import { FaTimes, FaEdit } from "react-icons/fa";

const FeedBackItem = ({ item  }) => {
  const { deleteItem, editFeedback } = useGlobalFeedBack();

  return (
    <Card>
      <h1 className="display-num">{item.rating}</h1>
      <button className="close" onClick={() => deleteItem(item.id)}>
        <FaTimes />
      </button>
      <button className="edit" onClick={() => editFeedback(item)}>
        <FaEdit />
      </button>
      <div className="display-text">{item.text}</div>
    </Card>
  );
};

FeedBackItem.propTypes = { item: PropTypes.object.isRequired };
export default FeedBackItem;
