
import "./Digital.css"
import { useState } from "react";
import Dcard from '../../Dcard';
import Card from './card'
const Digital = () => {


       const [Datacard,setDcard] = useState(Dcard)
       
       
    return ( 
        <>
        <div className="container learn">
            <div className="Head-section">
             <h1 className="Digital"> Digital Product For <br />  Buissnes</h1>
             <p className="started btn"> Get Started</p>
             <div className=" display d-flex mr-3">
                 <Card Datacard={Datacard}  /></div>
            </div>
        
           
        </div>
        </>
     );
}
 
export default Digital;