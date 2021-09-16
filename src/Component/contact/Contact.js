
import "./Contact.css"

const Contact = () => {
    return ( 
        <>
        <div className="container-fluid contact">
        <div className="container ">
            <div className="row">
                <div className="col-md-4">
            <div className="heading-3">

                <h1> Let's Talk</h1>
                <p> WE LOVE TO  HERE WHAT YOU THINK</p>  
                <div className="text-p">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget lectus eu ex ornare porta euismod a libero. Phasellus vehicula placerat enim at egestas. Aliquam suscipit felis in massa hendrerit tristique</p>
               </div>
               <div className="icons">
                   <span><i className="fab fa-facebook"></i></span>
                   <span><i className="fab fa-twitter"></i></span>
                   <span><i className="fab fa-instagram"></i></span>
                   <span><i className="fa fa-youtube"></i></span>
               </div>
            </div>

        </div>
        <div className="col-md-8 chal">

            <div className="form d-inline-block mx-3">
                
                <input  type="text d-block" placeholder="Your Name"></input>
            </div>
            <div className="form d-inline-block mx-3">
                
                <input  type="text d-block" placeholder="Your Email"></input>
            </div>
            <div className="form-8">
                
                <input  type="text d-block" placeholder="Subject"></input>
            </div>
            <div className="form-9">
                <textarea type="message" placeholder="Message"></textarea>
            </div>
            <p className="started-0 btn"> Get Started</p>
        </div>
        </div>
        
        </div>
        </div>
        
        </>
     );
}
 
export default Contact;