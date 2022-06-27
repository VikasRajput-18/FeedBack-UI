import { NavLink, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import About from "./components/Pages/About";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import { BsQuestionLg } from "react-icons/bs";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <FeedbackForm />
              <FeedbackStats />
              <FeedbackList />
              <NavLink to="/about">
                <BsQuestionLg className="icons" />
              </NavLink>
            </>
          }
        ></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </>
  );
}

export default App;
