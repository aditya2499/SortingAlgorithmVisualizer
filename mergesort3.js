function v(sizeArr){
   arr=sizeArr;
console.log(arr);
mergesort(0,sizeArr.length-1);
console.log(arr);
console.log(width);
console.log(id);
i=width.length;
changewidth();
}
 var arr=[];
 var width=[];
 var id=[];
 var i;

 function merge(left,mid,right) {
   k=left;
   var leftArr =[];
   leftArr= arr.slice(left,mid+1);
   rightArr= arr.slice(mid+1,right+1);
    k=left;
     while (leftArr.length && rightArr.length) {
       if (leftArr[0] <= rightArr[0]) {
         arr[k]=leftArr[0];
         width.push(arr[k]);
         id.push(k);
         leftArr = leftArr.slice(1);
      } else {
         arr[k]=rightArr[0];
         width.push(arr[k]);
         id.push(k);
         rightArr = rightArr.slice(1);
        }
        k++;
      }
     while (leftArr.length)
       {
         arr[k]=leftArr[0];
         width.push(arr[k]);
         id.push(k);
         leftArr = leftArr.slice(1);
         k++;
       }
     while (rightArr.length)
       {arr[k]=rightArr[0];
         width.push(arr[k]);
         id.push(k);
         rightArr = rightArr.slice(1);
         k++;
      }
   }
 function mergesort(left,right) {
   if (left<right) {
     var midpoint = Math.floor(((left+right) / 2));
     mergesort(left,midpoint);
     mergesort(midpoint+1,right);
     merge(left,midpoint,right );
   }
 }
 
 function changewidth()
 {       return new Promise(resolve => {
         if (i===0) {
            resolve();
            return;
         }
         i--;
         changewidth().then( ()=>
         setTimeout( () => {
         let idd= `${id[0]}`;
         const vv=document.getElementById(idd);
         vv.style.color = 'rgb(255,0,0)'
         vv.style.backgroundColor = 'rgb(255,0,0)';
         setTimeout(() => {
         vv.style.width= `${width[0]}%` ;
         vv.style.color = 'rgb(0,204,204)'
         vv.style.backgroundColor = 'rgb(0,204,204)';
         console.log(width[0], id[0]);
         width=width.slice(1);
         id= id.slice(1);
         resolve();
         },100)
      },50)
         );
      })
 }