import { useEffect, useState } from 'react';  
import './style.css';  
import Comp from './component.jsx';  
import Grid from './grid.jsx';
import './mincost.jsx';
function App() {  
    const [row, setRow] = useState(0);  
    const [col, setCol] = useState(0);  
    const [mat, setMat] = useState([]); 
    const [visited,setvis]=useState([]);
    const [cost,setcost]=useState();
    const [start,setstart]=useState([]);
    let [fg,fgset]=useState(false);
    function setr() {  
        let r = document.getElementById('row').value;  
        setRow(Number(r));  
         
    }  

    function setc() {  
        let c = document.getElementById('col').value;  
        setCol(Number(c));  
         
    }  

    function generate() {  
        if(isNaN(row)||isNaN(col)||(row<=0||col<=0)){
            window.alert("Enter a Valid row and column number");
        }
        
        else
        {let m = Array.from({ length: row }, () => new Array(col).fill(0));  
        let p = Array.from({ length: row }, () => new Array(col).fill(0)); 

        document.getElementById('row').value="";  
        document.getElementById('col').value="";  
        for(let i=0;i<row;i++){
            for(let j=0;j<col;j++){
                if(i==0&&j==0)
                p[i][j]=1;
               else p[i][j]=0;
                m[i][j]=Math.floor(Math.random()*100);
            }
        }
        setvis(p);  
        setMat(m);
        fgset(fg=true); 
        setcost(m[0][0]);
    
       }
    }  
    if(!fg){
    return (  
        <> 
            <div className='outer'>  
        <div><h1>THE MINIMUM COST GAME</h1></div>

           <div className ="done">
            <h2>Enter No. of rows </h2>  
           <input type="text" id='row' onChange={setr} />  
           </div>

                <div>  
                    <h2>Enter No. of columns </h2>  
                    <input type="text" id='col' onChange={setc} />  
                </div> 
     
                <button  onClick={generate} style={{margin:"10px"}}><b>Generate matrix</b></button>
              
            </div>  
        </>  
    );}
    else{
        return (
            <Grid grid={mat} row={row} col={col} visited={visited} setvis={setvis} cost={cost} setcost={setcost}></Grid>
        );
    }
    
}  

export default App;