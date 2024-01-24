import React from "react"
import './work.scss'

const Lead = () => {
  return (
    <div className="work">
      <div className="container">
        <img className="shadow-pop-br" src="/lead.png" alt="Heritage" />
        <div className="info">
            <h4>Featured Project</h4>
          <h3>Online Customer Support System</h3>
          <p>Implemented JavaScript DOM manipulation.
      Designed interface using CSS.
      Integrated Local Storage to store task data locally on the user's device.
      Ensured a responsive design using JavaScript and CSS, allowing the task manager to adapt seamlessly to various screen sizes and devices.</p>
        </div>
      </div>
      <div className="btn">
        <a href="https://github.com/lasinduSemasingha/Leads-Tracker">See Project</a>
      </div>
    </div>
  )
};

export default Lead;
