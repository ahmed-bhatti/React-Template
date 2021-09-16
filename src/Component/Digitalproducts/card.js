import './Digital.css'
const Card = ({Datacard}) => {
    return ( 
        <>
           {Datacard.map((curEl) => {
                  return ( 
                      <>
                              <div className="row space" key={curEl.id}>
                 <div className="col-md-4">
             <div className="cards my-5">
                 <div className="card setting">
                     <div className="icon">
                         <i className={curEl.icon}></i>

                     </div>
                     <div className="Future">
                         <h2 > {curEl.Heading}</h2>
                     </div>
                     <div className="text">
                    {curEl.discription}
                     </div>                     
                 </div>
             </div>
             </div>
             </div>  
                      </>
                  )
           })}
       


        </>
     );
}
 
export default Card;