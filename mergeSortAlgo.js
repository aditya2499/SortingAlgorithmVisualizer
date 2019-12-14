function v(sizeArr){
   arr=sizeArr;
mergesort(0,sizeArr.length-1);
console.log(arr);
 i=animation.length;
changewidth();
}

class pair {
   constructor(id1, id2) {
      this.id1 = id1;
      this.id2 = id2;
   }
}
 var arr=[];
var animation=[];
var obj;
 var i;
 var auxillary=[];

 function merge(left,mid,right) {
   
   auxillary =arr.slice();
   var k=left;
   var i=left;
   var j=mid+1;
     while (i<=mid && j<=right) {
       if (auxillary[i] <= auxillary[j]) {
         obj= new pair(i,j);
         console.log(obj);
         animation.push(obj);
         animation.push(obj);
         arr[k]=auxillary[i];
         obj= new pair(k,arr[k]);
         animation.push(obj);
         i++;
      } else {
         obj= new pair(i,j);
         animation.push(obj);
         animation.push(obj);
         arr[k]=auxillary[j];
         obj= new pair(k,arr[k]);
         animation.push(obj);
         j++;
        }
        k++;
      }
     while (i<=mid)
       {
         obj= new pair(i,i);
         animation.push(obj);
         animation.push(obj);
         arr[k]=auxillary[i];
         obj= new pair(k,arr[k]);
         animation.push(obj);
         i++;
         k++;
       }
     while (j<=right)
       { obj= new pair(j,j);
         animation.push(obj);
         animation.push(obj);
         arr[k]=auxillary[j];
         obj= new pair(k,arr[k]);
         animation.push(obj);
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
 
 function changewidth()
 {       return new Promise(resolve => {
         if (i===0) {
            resolve();
            return;
         }
         i-=3;
         changewidth().then( ()=>
         setTimeout( () => {
            obj = animation[0];
         let id11= `${obj.id1}`;
         let id22=  `${obj.id2}`;
         const v1=document.getElementById(id11);
         v1.style.color = 'rgb(255,0,0)'
         v1.style.backgroundColor = 'rgb(255,0,0)';
         const v2=document.getElementById(id22);
         v2.style.color = 'rgb(255,0,0)'
         v2.style.backgroundColor = 'rgb(255,0,0)';
         setTimeout(() => {
            obj = animation[1];
            let id11= `${obj.id1}`;
            let id22=  `${obj.id2}`;
            const v1=document.getElementById(id11);
            v1.style.color = 'rgb(0,204,204)'
            v1.style.backgroundColor = 'rgb(0,204,204)';
            const v2=document.getElementById(id22);
            v2.style.color = 'rgb(0,204,204)'
            v2.style.backgroundColor = 'rgb(0,204,204)';
         //width=width.slice(1);
         //id= id.slice(1);
         setTimeout(()=>{
            obj= animation[2];
            let id=`${obj.id1}`;
            const v=document.getElementById(id);
            v.style.width= `${obj.id2}%` ;
            v.style.color = 'rgb(0,204,204)'
            v.style.backgroundColor = 'rgb(0,204,204)';
            animation=animation.slice(3);
            resolve();
         },100);
         },100)
      },500)
         );
      })
 }