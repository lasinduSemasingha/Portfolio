import React from "react"
import './work.scss'

const Heritage = () => {
  return (
    <div className="work">
      <div className="container">
        <img className="shadow-pop-br" src="/heritage.png" alt="Heritage" />
        <div className="info">
        <h4>Featured Project</h4>
          <h3>Online Bidding System</h3>
          <p>
Led a team in developing a Java-based web application, implementing client-side validations for data integrity and a better user experience. Utilized MVC architecture, ensuring modularity. Developed the backend with Java and MySQL for efficient data management. Employed HTML, JavaScript, and CSS to design and maintain a user-friendly web interface.</p>
        </div>
      </div>
      <div className="btn">
        <a href="">See Project</a>
      </div>
    </div>
  )
};

export default Heritage;
