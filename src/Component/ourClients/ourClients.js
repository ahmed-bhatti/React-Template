
import "./ourClients.css";
import img1 from "../../Asesst/office-3.jpg"

const OurClients = () => {
//     const counters = document.getElementById('#counter');
  

//    let count = 1
//     setTimeout(() => {
//      if (count <1000) {
//          count++;
//          counters.innerText=count
//      }
   
//     },2)








        
    
  
    return (
        <>
      <div className="container-fluid hum">
          <div className="row">
              <div className="col-md-4 space">
                  <div className="heading-1">
                      <h1>The Best solution of <br/>our Clients</h1>
                  </div>
                  <div className="paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget lectus eu ex ornare porta euismod a libero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, necessitatibus!
                     <br/>
                    
                     <br />
                  Phasellus vehicula placerat enim at egestas. Aliquam suscipit felis in massa hendrerit tristique. In augue diam, pellentesque nec pulvinar in, sagittis ac nulla.

                  </div>
                  <div className="but">
                      <p className="started btn"> Read our Story</p>
                  </div>
              </div>
              <div className="col-md-6 space-1">
                  <img src={img1} className="size"></img>
                  <a href="https://www.youtube.com/channel/UCwR5y7lyv0FdZBjZ7D08Hxg"><i className="far fa-play-circle  big"></i></a>
          </div>
      </div>
      <div className="container">
          <div className="row">
              <div className="col-md-6">
          <div className="heading-2">
              <h1> WHAT WE DO</h1>
          </div>
          <div className="Text">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dui enim, pharetra at auctor vitae, mollis nec risus. Phasellus sagittis lectus at suscipit pulvinar</p>
          </div>
          </div>
          <div className="col-md-2 color ">
              <h1 className="counter"data-taget="499" >390</h1>
              <p>IDEAS</p>
          </div>
          <div className="col-md-2  color">
              <h1 className="counter"   data-taget="279">783</h1>
              <p>PROJECTS</p>
          </div>
          <div className="col-md-2 color " >
              <h1 className="counter" data-taget="490" >879</h1>
              <p>USERS</p>
          </div>
          </div>

      </div>
      </div>
      
        </>
      );
}
 
export default OurClients;