
import "./testimonial..css"
import { useState } from "react";
import dataInfo from "./testimonialcard";
const Testimonial = () => {

   const [initialCard,setinitialCard]= useState(dataInfo)
   console.log(initialCard)
    return (
    <>


    <div className="container-fluid top">
        <h5 className="center">TESTIMONIALS</h5>
        <div className="Trusting ">
            <h1> Our Trusting Clients</h1>
        </div>
        <div className="container">
            <div className="row">

                {
                    initialCard.map((curEl) =>{
                        return(
                            <>
              <div className="col-md-4  ">
                    <div className="card pt-5 color-1 me-3 ">
                    <div className="Icon ">
                        <span ><i class="fas fa-star-half-alt"></i></span>
                        <span ><i class="fas fa-star-half-alt"></i></span>
                        <span ><i class="fas fa-star-half-alt"></i></span>
                        <span ><i class="fas fa-star-half-alt"></i></span>
                        <span ><i class="fas fa-star-half-alt"></i></span>
                    </div>
                    <div className="text-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ullamcorper elementum 
                    </div>
                    <div className="d-flex pad">
                    <div className="image-2">
                    <img src={curEl.Image} className="radius"/>
                    </div>
                    <div className="mx-3 ben">
                        <h4>{curEl.author}</h4>
                        <p> Clients</p></div> 
                        </div>                  
                </div>
                </div>
                            </>
                        )
                    })
                }
      
              

            </div>
        </div>
         
    </div>
    </>
      );
}
 
export default Testimonial;