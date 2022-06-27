import React, { useState , useEffect} from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import { v4 as uuidv4 } from "uuid";

import { useGlobalFeedBack } from "../context";


const FeedbackForm = () => {

  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisbaaled] = useState(true);
  const [rating, setRating] = useState(10);
  const [message, setMessage] = useState("");

  const { addFeedback, feedbackEdit, updateFeedback } = useGlobalFeedBack()


  
    useEffect(() => {
       if(feedbackEdit.edit === true){
        setBtnDisbaaled(false);
        setText(feedbackEdit.item.text);
        setRating(feedbackEdit.item.rating);
       }
    }, [feedbackEdit]);

  const handleTextChange = (e) => {
    if (text === "") {
      setMessage(null);
      setBtnDisbaaled(true);
    } else if (text !== "" && text.trim().length < 10) {
      setMessage("*Text Should Be Greater Than 10*");
      setBtnDisbaaled(true);
    } else{
      setMessage(null);
      setBtnDisbaaled(false);
    }
    setText(e.target.value);
  };

  const handleSubmit= (e)=> {
    e.preventDefault();
    if (text.trim().length >= 10) {
      const newFeedback = {
        text,
        rating,
      }

      if (feedbackEdit.edit){
           updateFeedback(feedbackEdit.item.id, newFeedback);
      }else{
        addFeedback(newFeedback);
      } 
      setText("");
    }
  }

  return (
    <div className="form-group">
      <Card>
        <form className="form-cont" onSubmit={handleSubmit}>
          <h2>How would you rate your service with us ?</h2>
          <RatingSelect select={(rating) => setRating(rating)} />
          <div className="input-cont">
            <input
              type="text"
              value={text}
              onChange={handleTextChange}
              placeholder="Write a Review"
            />
            <Button type="submit" isDisabled={btnDisabled}>
              Send
            </Button>
          </div>
          {message && <p className="msg">{message}</p>}
        </form>
      </Card>
    </div>
  );
};

export default FeedbackForm;
