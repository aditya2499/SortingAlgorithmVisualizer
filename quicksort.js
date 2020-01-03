function quick(sizeArr){
   arr=sizeArr;
console.log(arr);
quicksort(0,sizeArr.length-1);
console.log(arr);
h=width.length;
console.log(animation);
quickSortAnimator(animation);

}
 var arr=[];
  var width=[];
  var id=[];
//  var i;
  animation=[];

 function partition(left, right)
 {
    var pivot= arr[right];
    var i= left-1;
    //var j= left;

    for(var j=left;j<right;j++)
    {  animation.push([j,right,true,'no_swap']);
       if(arr[j]<pivot)
       {  i++;
         if(i!==j)
           {width.push(arr[j]);
           id.push(i);
           width.push(arr[i]);
           id.push(j);
           animation.push([i,j,true,'swap']);
           animation.push([i,arr[j],j,arr[i]]);
           animation.push([i,j,false,'swap']);
           //animation.push[i,j];
           }
           [arr[i],arr[j]]=[arr[j], arr[i]];
       }
       animation.push([j,right,false,'no_swap']);
    }
    i++;
    if(i!==right)
           {width.push(arr[right]);
           id.push(i);
           width.push(arr[i]);
           id.push(right);
           animation.push([i,right,true,'no_swap']);
           animation.push([i,right,true,'swap']);
           animation.push([i,arr[right],right,arr[i]])
           animation.push([right,i,false,'finished']);
           }
           else{
              animation.push([right,right,false,'finished']);
           }
       [arr[i],arr[right]]=[arr[right], arr[i]];
       //console.log(arr);
       return i;

 }
 function quicksort(left,right)
 {  
    
    if(left<=right)
    {  //console.log("left is " +left +"right is" +right);
       var pivot= partition(left,right);
    quicksort(left,pivot-1);
    quicksort(pivot+1,right);}

 }
