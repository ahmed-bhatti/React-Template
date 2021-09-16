import "./Services.css"
import { useState } from "react"
import dataCard from "./dataServices"
const Services = () => {
    const [serData,setserData] =useState(dataCard)
    console.log(serData)
    return ( 
    
   
        <>
        
        <div className="container margin-1">
            <div className="Ser  ">
                <h1> We are Here to give the best services !</h1>
            </div>
            <div className="row ">
                {serData.map((data)=> {
                    return (
                        <>
               <div className="col-md-3 border-1"   key={data.id}>
                    <div className="card border">
                    <div className="icon">
                        <i className={data.icon}></i>
                    </div>
                    <div className="'Heading">
                       <h4 className="Heading-1"> {data.Heading}</h4>
                    </div>
                    <div className="text">
                        
                    {data.discription}
                    </div>
                </div>
                </div>
                        </>
                    )
                })}
               
            </div>
        </div>
        </>

     );
}
 
export default Services;