const body=document.querySelector(".lines");
let sizeArr=[];
const mergeSortbutton=document.querySelector(".mergeSort")
mergeSortbutton.addEventListener('click',mergeLines);
const quickSortbutton =document.querySelector(".quickSort")
quickSortbutton.addEventListener('click',quickLines);
const randomarraybutton=document.querySelector(".randomArray")
randomarraybutton.addEventListener('click',randomArray);
function createHorizontalLine()
{  sizeArr=sizeArr.slice(sizeArr.length);
   let i=0;
   let hl;
   for(i=0;i<120;i++)
   {
      let width=Math.floor(Math.random() * (100 - 5) )+ 5;
      sizeArr.push(width);
       hl += `<hr style="height:2.5px;color:rgb(0, 204, 204);background-color:rgb(0, 204, 204); width: ${width}%; margin : 1.5px;  " align="left" id= ${i} />`  
      
   }
   body.innerHTML=hl;
   console.log(sizeArr);
  // v(sizeArr);
}

function mergeLines(){
   disablebutton();
   v(sizeArr);
}
function quickLines()
{   disablebutton();
    quick(sizeArr);
}
function randomArray()
{  
   createHorizontalLine();
}
//console.log(body.offsetHeight);
createHorizontalLine();
function disablebutton()
{
  mergeSortbutton.disablebutton=true;
  quickSortbutton.disablebutton=true;
  randomarraybutton.disablebutton=true;
}
//console.log(sizeArr);