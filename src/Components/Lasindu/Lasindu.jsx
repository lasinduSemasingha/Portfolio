import React from "react"
import './lasindu.scss'

const Lasindu = () => {
  return (
    <>
        <div className="lasindu">
            <div className="hello">
                <h3 className="tracking-in-contract">Hello My Name is</h3>
                <h1 className="tracking-in-contract">Lasindu Semasingha.</h1>
                <h2 className="tracking-in-contract">I build things for the web</h2>
                <p className="tracking-in-contract">I’m a <strong>software engineering</strong> undergraduate specializing in<br /> building (and occasionally designing) exceptional digital<br /> experiences. Currently, I’m focused on Full Stack Web <br />Development.</p>
            </div>
            <div className="btn">
              <a href={`#Work`}>See my Works</a>
            </div>
        </div>
    </>
  )
};

export default Lasindu;
