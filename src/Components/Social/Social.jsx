import React from "react"
import './social.scss'

const Social = () => {
  return (
    <>
        <div className="social">
            <div className="icon">
                <li><a href="https://github.com/lasinduSemasingha" target="_blank"><img className="rotate-center" src="/github.png" alt="GitHub" /></a></li>
                <li><a href="https://www.linkedin.com/in/lasindu-dileepa-05bb21266/" target="_blank"><img className="rotate-center" src="/linkedin.png" alt="LinkedIn" /></a></li>
                <li><a href="https://www.instagram.com/lasindu_ds_/?igsh=MmVlMjlkMTBhMg%3D%3D&utm_source=qr" target="_blank"><img className="rotate-center" src="/instagram.png" alt="" /></a></li>
                <li><a href="" target="_blank"><img className="rotate-center" src="/twitter.png" alt="" /></a></li>
                <div className="vr"></div>
            </div>
        </div>
    </>
  )
};

export default Social;
