import React from "react";
import Card from "../shared/Card";
import {NavLink} from 'react-router-dom'

const About = () => {
  return (
    <div className="about">
      <Card>
        <div className="col">
          <h1>About This Project</h1>
          <p>This is a React App to leave Feedback for Product or Service</p>
          <p>Version 18.2.0</p>
          <NavLink to='/' className='goback'>Go Back</NavLink>
        </div>
      </Card>
    </div>
  );
};

export default About;
