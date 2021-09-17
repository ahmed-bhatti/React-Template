import "./professional.css"
import dataPro from "./Datapro";
import { useState } from "react";

const Professional = () => {
    const [cardInfor,setcardInfo]=useState(dataPro)
    return ( 
        <>
        <div className="container">
            <div className="heading-a">
                <h1> Our Professional</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
Voluptatibus commodi laudantium</p>
            </div>
        </div>
        <div className="container">
            <div className="row">
                {
                    cardInfor.map((info) =>{
                        return(
                            <>
                           <div className="col-md-4  big-2" key={info.id}>
                    <div className="image-0">
                        <img src={info.image} className="img-fluid big-1"></img>
                        <section>
                        <span className="smith"> {info.name}</span>
                        <p className="  manager">{info.work}</p>
                        <div className="icon-9">
                   <span><i className="fab fa-facebook"></i></span>
                   <span><i className="fab fa-twitter"></i></span>
                   <span><i className="fab fa-instagram"></i></span>
                                        
               </div>
                    </section>
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
 
export default Professional;