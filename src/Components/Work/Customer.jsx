import React from "react"
import './work.scss'

const Customer = () => {
  return (
    <div className="work">
      <div className="container">
        <img className="shadow-pop-br" src="/genius.png" alt="Heritage" />
        <div className="info">
        <h4>Featured Project</h4>
          <h3>Online Customer Support System</h3>
          <p>Designed Web pages using CSS.
      Created a visually appealing and responsive frontend using HTML5 and CSS3, prioritizing user 
      experience.
      Implemented backend using PHP and MySQL, ensuring seamless data flow and system functionality.
      Utilized HTML, JavaScript, and CSS for designing, developing, and maintaining a user-friendly web 
      interface.</p>
        </div>
      </div>
      <div className="btn">
        <a href="https://github.com/lasinduSemasingha/Online-Customer-Support-System">See Project</a>
      </div>
    </div>
  )
};

export default Customer;
