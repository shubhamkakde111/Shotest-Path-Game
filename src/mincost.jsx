
 

class cell
{
    constructor(x, y, distance)
    {
        this.x = x;
        this.y = y;
        this.distance = distance;
    }
};
 
 

function isInsideGrid(i, j,row,col)
{
    return (i >= 0 && i < row && j >= 0 && j < col);
}
 

export default function shortest(grid, row, col)
{
    var dis = Array.from(Array(row), ()=>Array(col).fill(0));
 
    
    for (var i = 0; i < row; i++)
        for (var j = 0; j < col; j++)
            dis[i][j] = 1000000000;
 
    var dx = [-1, 0, 1, 0];
    var dy = [0, 1, 0, -1];
 
    var st = [];
 
    
    st.push(new cell(0, 0, 0));
 
  
    dis[0][0] = grid[0][0];
 
   
    while (st.length!=0)
    {
        
        var k = st[0];
        st.shift();
 
        
        for (var i = 0; i < 4; i++)
        {
            var x = k.x + dx[i];
            var y = k.y + dy[i];
 
            
            if (!isInsideGrid(x, y,row,col))
                continue;
 
           
            if (dis[x][y] > dis[k.x][k.y] + grid[x][y])
            {
               
                dis[x][y] = dis[k.x][k.y] + grid[x][y];
                st.push(new cell(x, y, dis[x][y]));
            }
        }
        st.sort((a,b)=>{
            if (a.distance == b.distance)
    {
        if (a.x != b.x)
            return (a.x - b.x);
        else
            return (a.y - b.y);
    }
    return (a.distance - b.distance);
        });
    }
 
   
    return dis[row - 1][col - 1];
}
 

