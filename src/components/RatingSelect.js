import React, { useEffect, useState } from "react";
import { useGlobalFeedBack } from "../context";

const RatingSelect = ({ select }) => {
  const [selected, setSelected] = useState(10);

  const { feedbackEdit } = useGlobalFeedBack();

  useEffect(() => {
    setSelected(feedbackEdit.item.rating);
  }, [feedbackEdit]);

  const handleSubmit = (e) => {
    setSelected(+e.currentTarget.value);
    select(+e.currentTarget.value);
  };
  return (
    <div>
      <ul className="rating-select">
        <li>
          <input
            type="radio"
            name="rating"
            className="hidebox"
            onChange={handleSubmit}
            checked={selected === 1}
            value="1"
            id="num1"
          />
          <label htmlFor="num1">1</label>
        </li>
        <li>
          <input
            type="radio"
            name="rating"
            className="hidebox"
            onChange={handleSubmit}
            checked={selected === 2}
            value="2"
            id="num2"
          />
          <label htmlFor="num2">2</label>
        </li>
        <li>
          <input
            type="radio"
            name="rating"
            className="hidebox"
            onChange={handleSubmit}
            checked={selected === 3}
            value="3"
            id="num3"
          />
          <label htmlFor="num3">3</label>
        </li>
        <li>
          <input
            type="radio"
            name="rating"
            className="hidebox"
            onChange={handleSubmit}
            checked={selected === 4}
            value="4"
            id="num4"
          />
          <label htmlFor="num4">4</label>
        </li>
        <li>
          <input
            type="radio"
            name="rating"
            className="hidebox"
            onChange={handleSubmit}
            checked={selected === 5}
            value="5"
            id="num5"
          />
          <label htmlFor="num5">5</label>
        </li>
        <li>
          <input
            type="radio"
            name="rating"
            className="hidebox"
            onChange={handleSubmit}
            checked={selected === 6}
            value="6"
            id="num6"
          />
          <label htmlFor="num6">6</label>
        </li>
        <li>
          <input
            type="radio"
            name="rating"
            className="hidebox"
            onChange={handleSubmit}
            checked={selected === 7}
            value="7"
            id="num7"
          />
          <label htmlFor="num7">7</label>
        </li>
        <li>
          <input
            type="radio"
            name="rating"
            className="hidebox"
            onChange={handleSubmit}
            checked={selected === 8}
            value="8"
            id="num8"
          />
          <label htmlFor="num8">8</label>
        </li>
        <li>
          <input
            type="radio"
            name="rating"
            className="hidebox"
            onChange={handleSubmit}
            checked={selected === 9}
            value="9"
            id="num9"
          />
          <label htmlFor="num9">9</label>
        </li>
        <li>
          <input
            type="radio"
            name="rating"
            className="hidebox"
            onChange={handleSubmit}
            checked={selected === 10}
            value="10"
            id="num10"
          />
          <label htmlFor="num10">10</label>
        </li>
      </ul>
    </div>
  );
};

export default RatingSelect;
