function quick(sizeArr){
   arr=sizeArr;
console.log(arr);
// let a = 5, b = 6;
// [a, b] = [b, a];
// console.log(`${a} ${b}`);
quicksort(0,sizeArr.length-1);
console.log(arr);
//console.log(width);
//console.log(id);
h=width.length;
changeWidth();

}
 var arr=[];
 var width=[];
 var id=[];
 var i;

 function partition(left, right)
 {
    var pivot= arr[right];
    var i= left-1;
    //var j= left;

    for(var j=left;j<right;j++)
    {
       if(arr[j]<pivot)
       {  i++;
         if(i!==j)
           {width.push(arr[j]);
           id.push(i);
           width.push(arr[i]);
           id.push(j);
           }
           [arr[i],arr[j]]=[arr[j], arr[i]];
       }
    }
    i++;
    if(i!==right)
           {width.push(arr[right]);
           id.push(i);
           width.push(arr[i]);
           id.push(right);
           }
       [arr[i],arr[right]]=[arr[right], arr[i]];
       //console.log(arr);
       return i;

 }
 function quicksort(left,right)
 {  
    if(left<right)
    {  //console.log("left is " +left +"right is" +right);
       var pivot= partition(left,right);
    quicksort(left,pivot-1);
    quicksort(pivot+1,right);}

 }

 function changeWidth()
 {       return new Promise(resolve => {
         if (h===0) {
            resolve();
            return;
         }
         h-=2;
         changeWidth().then( ()=>
         setTimeout( () => {
         let idd= `${id[0]}`;
         const vv1=document.getElementById(idd);
         vv1.style.color = 'rgb(255,0,0)'
         vv1.style.backgroundColor = 'rgb(255,0,0)';
         id= id.slice(1);
         idd= `${id[0]}`;
         const vv2=document.getElementById(idd);
         vv2.style.color = 'rgb(255,0,0)'
         vv2.style.backgroundColor = 'rgb(255,0,0)';
         id= id.slice(1);
         setTimeout(() => {
         vv1.style.width= `${width[0]}%` ;
         vv1.style.color = 'rgb(0,204,204)'
         vv1.style.backgroundColor = 'rgb(0,204,204)';
         width=width.slice(1);
         vv2.style.width= `${width[0]}%` ;
         vv2.style.color = 'rgb(0,204,204)'
         vv2.style.backgroundColor = 'rgb(0,204,204)';
         width=width.slice(1);
         console.log(width[0], id[0]);
         resolve();
         },10)
      },50)
         );
      })
 }