//import { mergeSortAnimator } from "./animators/mergesortAnimator";

function v(sizeArr){
   arr=sizeArr;
mergesort(0,sizeArr.length-1);
console.log(animation);
 i=animation.length;
mergeSortAnimator(animation);
}

 var arr=[];
 animation=[];
var obj;
 //var i;
 var auxillary=[];
 let back1 ,back2;
 function merge(left,mid,right) {
   
   auxillary =arr.slice();
   var k=left;
   var i=left;
   var j=mid+1;
   var kpair=-1;
   if(left === 0 && right === arr.length-1)
         kpair=1;
     while (i<=mid && j<=right) {
       if (auxillary[i] <= auxillary[j]) {
         animation.push([i,j,true]);
         
         arr[k]=auxillary[i];
         //obj= new pair(k,kpair);
         animation.push([k,true]);
         //obj= new pair(k,arr[k]);
         animation.push([k,arr[k]]);
         //obj= new pair(k,kpair);
         animation.push([k,false]);
         animation.push([i,j,false]);
         i++;
      } else {
         //obj= new pair(i,j);
         animation.push([i,j,true]);
         
         arr[k]=auxillary[j];
         //obj= new pair(k,kpair);
         animation.push([k,true]);
         //obj= new pair(k,arr[k]);
         animation.push([k,arr[k]]);
         //obj= new pair(k,kpair);
         animation.push([k,false]);
         animation.push([i,j,false]);
         j++;
        }
        k++;
      }
     while (i<=mid)
       {
         //obj= new pair(i,i);
         animation.push([i,i,true]);
         
         arr[k]=auxillary[i];
         //obj= new pair(k,kpair);
         animation.push([k,true]);
         //obj= new pair(k,arr[k]);
         animation.push([k,arr[k]]);
         //obj= new pair(k,kpair);
         animation.push([k,false]);
         animation.push([i,i,false]);
         i++;
         k++;
       }
     while (j<=right)
       { //obj= new pair(j,j);
         animation.push([j,j,true]);
         
         arr[k]=auxillary[j];
         animation.push([k,true]);
         animation.push([k,arr[k]]);
         animation.push([k,false]);
         animation.push([j,j,false]);
         j++;
         k++;
      }
   }
 function mergesort(left,right) {
   if (left<right) {
     var midpoint = Math.floor(((left+right) / 2));
     mergesort(left,midpoint);
     mergesort(midpoint+1,right);
     merge(left,midpoint,right);
   }
 }

