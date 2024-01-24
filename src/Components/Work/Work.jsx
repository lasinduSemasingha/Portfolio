import React from "react"
import './work.scss'

const Work = () => {
  return (
    <div className="work">
      <h1>Featured Projects</h1>
      <div className="container">
        <img className="shadow-pop-br" src="/blood.png" alt="blood" />
        <div className="info">
        <h4>Featured Project</h4>
          <h3>Blood Bank Management System</h3>
          <p>Developed front-end using HTML, CSS, and JavaScript. Increased mobile responsive using CSS. 
      Developed back-end using php and mysql. 
      Implemented client-side validations using JavaScript. 
      Implemented form validations using JavaScript</p>
        </div>
      </div>
      <div className="btn">
        <a href="https://github.com/lasinduSemasingha/blood-bank-management">See Project</a>
      </div>
    </div>
  )
};

export default Work;
