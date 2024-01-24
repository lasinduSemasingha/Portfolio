import React from "react"
import { Document } from "react-pdf";
import PDF from '/cv.pdf'

const Cv = () => {
  return (
    <>
        <Document file={PDF}></Document>
    </>
    
  )
};

export default Cv;
