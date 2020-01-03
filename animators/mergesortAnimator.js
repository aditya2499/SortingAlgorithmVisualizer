 speed = 30;
var j
 animation=[];
 function mergeSortAnimator(animator){
   j=animator.length;
   //console.log(j);
   animation=animator.slice();
   mergeSortAnimatorHelper();
 }
 function  mergeSortAnimatorHelper(){ 
   return new Promise(resolve => {
                if (j===0) {
                   resolve();
                   return;
                } 
                j--;
   //console.log("inside");
    mergeSortAnimatorHelper().then(()=>{
    setTimeout(()=>{
       //console.log(animation[0][1]);
     if( typeof animation[0][1] === 'boolean'){
        
        const id = animation[0][0];
        const v=document.getElementById(id);
        if(animation[0][1] === true){ 
           //console.log("true");
        v.style.color = 'rgb(25,40,250)'
        v.style.backgroundColor = 'rgb(25,40,250)';
        }
        else {
         //console.log(animation[i][1]); 
         v.style.color = 'rgb(0,204,204)'
         v.style.backgroundColor = 'rgb(0,204,204)';
        }
     }
     
      else {
         //console.log(animation[0][2]);
        if(typeof animation[0][2] === 'undefined'){
           //console.log('inside');
           const id = animation[0][0];
           
         const v=document.getElementById(id);
         //console.log(v);
         //v.style.width =animation[0][1];
         v.style.width= `${animation[0][1]}%`
        }
        else if(animation[0][2] === true){
         //console.log("2")
         const id1 = animation[0][0];
         const id2 = animation[0][1];
         const v1=document.getElementById(id1);
         const v2=document.getElementById(id2);
         v1.style.color= 'rgb(255,0,0)';
         v1.style.backgroundColor='rgb(255,0,0)'
         v2.style.color= 'rgb(255,0,0)';
         v2.style.backgroundColor='rgb(255,0,0)';
        }

        else //if(animation[0][2] === false)
        { //console.log("3")
         const v1=document.getElementById(animation[0][0]);
         const v2=document.getElementById(animation[0][1]);
         v1.style.color= 'rgb(0,204,204)';
         v1.style.backgroundColor= 'rgb(0,204,204)'
         v2.style.color='rgb(0,204,204)'
         v2.style.backgroundColor= 'rgb(0,204,204)';
        }   
      }
      animation=animation.slice(1);
      resolve();
    },speed);
   })
  })
}
