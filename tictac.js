let count=0;
let tictac=[['x','y','z'],['a','b','c'],['p','q','r']];

function checker()
{

for(let i=0;i<3;i++)
{
if(tictac[i][0]=='X'&&tictac[i][1]=='X'&&tictac[i][2]=='X'||tictac[i][0]=='O'&&tictac[i][1]=='O'&&tictac[i][2]=='O')
{
    return [true,tictac[i][0]]
}
}
for(let i=0;i<3;i++)
{
if(tictac[0][i]=='X'&&tictac[1][i]=='X'&&tictac[2][i]=='X'||tictac[0][i]=='O'&&tictac[1][i]=='O'&&tictac[2][i]=='O')
{
    return [true,tictac[0][i]]
}
}
if(tictac[0][0]=='X'&&tictac[1][1]=='X'&&tictac[2][2]=='X'||tictac[0][0]=='O'&&tictac[1][1]=='O'&&tictac[2][2]=='O')
{
    return [true,tictac[0][0]]
}
if(tictac[0][2]=='X'&&tictac[1][1]=="X"&&tictac[2][0]=="X"||tictac[0][2]=='O'&&tictac[1][1]=="O"&&tictac[2][0]=="O")
{
    return [true,tictac[0][2]]
}
else
{
    return false
}
}




function playGame(current)
{
  if(current.innerHTML==='')
   {
    ++count;
    if(count%2!=0)
    {
        document.getElementById("player").innerHTML="Player 2's turn";
        current.innerHTML='X'
        let [r,c]=current.id.split(" ");
        tictac[r][c]='X'
    }
    else
    {
        document.getElementById("player").innerHTML="Player 1's turn";
        current.innerHTML='O'
        let [r,c]=current.id.split(" ");
        tictac[r][c]='O'
    }
   }
   let found=checker();
   if(count==9&&(found[0]==false||found[0]==undefined))
   {
    document.getElementById("winner").innerHTML="Match draw";
    document.getElementById("player").innerHTML="";
   }
   if(found[0])
   {
    count=0;  
    document.getElementById("player").innerHTML=""; 
    if(found[1]=='X')
    {
        document.getElementById("winner").innerHTML="Player 1 won the game"; 
    }
    else
    {
        document.getElementById("winner").innerHTML="Player 2 won the game"; 
    }
   }
}

function reStart()
{
    count=0; 
    document.getElementById("player").innerHTML="Player 1's turn";
    document.getElementById("winner").innerHTML="";
    let arr=(document.getElementsByClassName("border"));
    for(let i=0;i<arr.length;i++)
    {
        arr[i].innerHTML="";
    }
    tictac=[['x','y','z'],['a','b','c'],['p','q','r']];
}