


import img1 from "../../Asesst/website1-736x736.jpg"
import img2 from "../../Asesst/marketing-736x736.jpg"
import img3 from "../../Asesst/webdevelopment-736x736.jpg"
import "./project.css"
const Project = () => {
    return ( 
        <>
        <div className="container">
            <div className="selected">
               <h1> Selected Projects </h1>
            </div>
            <div className="case">
                Case Studies
                <span> <p className="started btn">View ALL </p></span>
            </div>
                     
                
        </div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4">
                    <img src={img1} className="img-fluid" />
                    <div className="img-overlay">
                       <div className="image-title"><h1>Website Design</h1></div>
                       <div className="image-discription">Personal and Commercial</div> 
                    </div>
                </div>
                <div className="col-md-4">
                    <img src={img2} className="img-fluid" />
                    <div className="img-overlay">
                       <div className="image-title"><h1>Website Design</h1></div>
                       <div className="image-discription">Personal and Commercial</div> 
                    </div>
                </div>
                <div className="col-md-4">
                    <img src={img3} className="img-fluid" />
                    <div className="img-overlay">
                       <div className="image-title"><h1>Website Design</h1></div>
                       <div className="image-discription">Personal and Commercial</div> 
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Project ;