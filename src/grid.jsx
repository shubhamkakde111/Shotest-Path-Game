import { useEffect, useState } from 'react';
import shortest from './mincost.jsx';
import Comp from './component.jsx';
 function Grid(props){
        const [prev,setcell]=useState([0,0]);
        const [fg,setfg]=useState(false);
        let [minicost,setmin]=useState(0);
          function isValid(newr,newc){
                 let curr=prev[0];
                 let curc=prev[1];
                 if((newr==curr-1&&newc==curc)||(newr==curr+1&&newc==curc)||
                 (newr==curr&&newc==curc-1)||(newr==curr&&newc==curc+1)){
                  return true;
                 }
                 return false;
          }
        function call(e,rowIndex,colIndex){
          if(props.visited[rowIndex][colIndex]===0&&isValid(rowIndex,colIndex)){
            props.setcost(prevp=>props.cost+props.grid[rowIndex][colIndex]);
             if(rowIndex==props.row-1&&colIndex==props.col-1){
                 setmin(minicost=shortest(props.grid,props.row,props.col));
              
                 setfg(true);
             }
             
                       e.target.style.backgroundColor="green";
                       props.setvis([...props.visited],props.visited[rowIndex][colIndex]=1);
                       setcell([rowIndex,colIndex]);
             
          }
        }
     
          

       if(!fg) {
    return (
         <>
        <div className='container'>  
         <div><h1 style={{color:'blue'}}>THE MINCOST GAME</h1></div>
      {props.grid.map((row, rowIndex) => (  
        <div className="grid-row" key={rowIndex}>  
          {row.map((cell, colIndex) => ( 
      
            <div className="inner" key={`${rowIndex}-${colIndex}`} id={`id${rowIndex}${colIndex}`} onClick={(e)=>call(e,rowIndex,colIndex)} style={(rowIndex===0&&colIndex===0)?{backgroundColor:"green"}:{}}>  
            {cell}
            </div>  
          ))}  
        </div>  
      ))} 
       
    </div>
    </>
     
          );
          
}

else{
  return (
    <div className='container'>

      <Comp cost={props.cost} mini={minicost} fg={fg} setfg={setfg}></Comp>
    </div>
  );
}
          
     
 }
 export default Grid;
