import { useState } from 'react'
import './style.css'
function Comp(prop){
    console.log(prop.cost,prop.mini);
    if(prop.cost===prop.mini)
        
   { return (<>
     
     <div>
        <h1 style={{color:"white", backgroundColor:"green"}}>WOW! YOU HAVE SELECTED THE CORRECT PATH</h1>
     </div>
    </>);}
    else{
        return (<>
     
            <div>
               <h1 style={{color:"white" ,backgroundColor:"red"}}>WRONG PATH SELECTED TRY AGAIN</h1>
            </div>
           </>);
    }
}
export default Comp;