
import React from 'react';
import Resume from "../assets/samantha_apuzzo_resume.pdf"



function ResumeCard () {
return (
    <section className="container-fluid ">
        <div id="maintitle" className="row">
        <div className="col-sm-12">
            <h3>- Resume -</h3>
        </div>
        </div>
        <div className="row">
        <div id="aboutme" className="col-sm-12">
            <div className="resume">
            <embed src={Resume} width="100%" height="100%" padding-top="5px"/>
            </div>
        </div>
        </div>  
    </section>
)
};

export default ResumeCard;