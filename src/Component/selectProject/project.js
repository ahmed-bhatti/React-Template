


import "./project.css"
import CardApi from "./cardApi";
import { useState } from "react";
const Project = () => {

              const[ApiData,setApidata ]=useState(CardApi)
              console.log(ApiData)
    return ( 
        <>
        <div className="container">
            <div className="selected">
               <h1> Selected Projects </h1>
            </div>
            <div className="case">
               <p> Case Studies</p>
                <span> <p className="started btn">View ALL </p></span>
            </div>
                     
                
        </div>
        <div className="container-fluid">
            <div className="row">
                {
                    ApiData.map((ind) =>{
                        return(
                            <>
                                    <div className="col-md-4 marg" key={ind.id}>
                   <div className="img-area">
                       <img src={ind.Image} className="img-fluid"></img>
                       <div className="img-text">
                           <h3>{ind.work}</h3>
                           <h5> {ind.discrition}</h5>
                       </div>

                     
                  
            </div>
            </div> 
                            </>
                        )
                    })
                }
               
        </div>
        </div>
        </>
     );
}
 
export default Project ;