import "./professional.css"
import picture from "../../Asesst/team2.jpg"
import picture2 from "../../Asesst/team1.jpg"
import picture3 from "../../Asesst/team4.jpg"

const Professional = () => {
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
                <div className="col-md-4">
                    <div className="image-0">
                        <img src={picture} className="img-fluid big-1"></img>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="image-0">
                        <img src={picture2} className="img-fluid big-1"></img>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="image-0">
                        <img src={picture3} className="img-fluid big-1"></img>
                    </div>
                </div>
            </div>
        </div>
        </>

     );
}
 
export default Professional;