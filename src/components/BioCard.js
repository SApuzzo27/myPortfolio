import React from 'react';
import headshot from "../assets/biopic.png";


function BioCard () {
    return (
        <section className="container-fluid">
            <div id="maintitle" className="row">
                <div className="col-sm-12">
                    <h3>- about me -</h3>
                </div>
            </div>
            <hr/>
            <div className="row">
            <div id="aboutme" className="col-sm-12">
                <img id="headshot" src={headshot} alt="headshot"/>
                <h3>Hello World <i style={{color: "blue"}} class="fas fa-globe-americas"></i> ! </h3>
                <br></br>
                <p> New coder on the block </p>
                <p style={{fontStyle:"italic" , color: "#d285f5"}}> Here's the Scoop</p>
                <p>I recently completed a Full Stack Web Development Program through Columbia University</p>
                <p>I enjoy all things creative and Im loving front end development yetttt I love having a good problem to solve so throw me in back end and well figure this thing out <i style={{color: "gold"}} class="far fa-smile"></i>! </p> 
                <p>Being a full stack web developer really brings out the Gemini in me .</p>
                <p>I'm excited for this journey and to see where it takes me!!!</p>
                <p>Check out my portfolio page for some of the work I have done... hover over each project to find the live link and the link bringing you straight to the source.</p>   
            
            </div>
            </div>  
        </section>
    )
};

export default BioCard;




