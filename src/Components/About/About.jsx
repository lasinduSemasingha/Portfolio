import React from "react"
import './about.scss'

const About = () => {
  return (
    <>
        <div className="about">
            <h2>About me</h2>
            <div className="cage">
              <div className="para">
                <p>I am a software engineering undergraduate and over 1-year hands on experience in full stack web development with Php and Mysql. Skilled in Java and MVC architecture for web-based applications. Proficient in front-end development using React. Strong knowledge in design patterns and object-oriented concepts. Basic knowledge of Agile and waterfall software development methodologies along with the proficient understanding of git version control system. With Strong analytical and problem-solving skills. Eager to leverage my technical skills and passion for coding to deliver high quality solutions </p>
                <h3>My Skills</h3>
                <div className="skills">
                  <ul>
                    <span>Java <img src="./java.png" alt="Java" /></span>
                    <span>PHP <img src="./php.png" alt="" /></span>
                    <span>C++ <img src="./cpp.png" alt="" /></span>
                    <span>C <img src="./c.png" alt="" /></span>
                    <span>JavaScript <img src="./js.png" alt="" /></span>
                  </ul>
                  <ul>
                    <span>HTML5 <img src="./html.png" alt="" /></span>
                    <span>CSS3 <img src="./css.png" alt="" /></span>
                    <span>React <img src="./react.png" alt="Java" /></span>
                    <span>MySql <img src="./mysql.png" alt="Java" /></span>
                    <span>Git Version Control <img src="./git.png" alt="Java" /></span>
                  </ul>
                  <ul className="other">
                    <span>Windows <img src="./windows.png" alt="Java" /></span>
                    <span>Linux <img src="./linux.png" alt="Java" /></span>
                    <span>VS Studio <img src="./vsstudio.png" alt="Java" /></span>
                    <span>VS Code <img src="./vscode.png" alt="Java" /></span>
                    <span>Eclipse <img src="./eclipse.png" alt="Java" /></span>
                    <span>PhotoShop <img src="./photoshop.png" alt="Java" /></span>
                  </ul>

                </div>
              </div>
              <img className="shadow-pop-br" src="/my.jpg" alt="" />
            </div>
            
        </div>
    </>
  )
};

export default About;
