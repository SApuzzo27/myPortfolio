import Projects from "../models/projects";
import ProjectCard from "../components/ProjectCard";


function Portfolio () {
    return (    
        <div className="container-fluid conport">
            <div id="maintitle" className="row">
                <div className="col-sm-12">
                    <h3>- the works  -</h3>
                    <div className="row portrow">
                    {Projects.map((proj) => (
                        < ProjectCard project={proj} />
                        ))
                    }
                </div>
                </div>
            </div>
        <hr></hr>
        </div>
    )
};

export default Portfolio; 

