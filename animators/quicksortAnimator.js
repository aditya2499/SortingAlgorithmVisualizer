 speed = 10;
var j
 animation=[];
 function quickSortAnimator(animator){
   j=animator.length;
   //console.log(j);
   animation=animator.slice();
   quickSortAnimatorHelper();
 }

 function quickSortAnimatorHelper(){

   return new Promise(resolve => {
      if (j===0) {
         resolve();
         return;
      } 
      j--;
       quickSortAnimatorHelper().then(()=>{
          setTimeout(()=>{
            if(animation[0][3] === 'no_swap'){
               if(animation[0][2] === true){
                  const id1 = animation[0][0];
                  const id2 = animation[0][1];
                  const v1=document.getElementById(id1);
                  const v2=document.getElementById(id2);
                  v1.style.color= 'rgb(255,0,0)';
                  v1.style.backgroundColor='rgb(255,0,0)'
                  v2.style.color= 'rgb(255,0,0)';
                  v2.style.backgroundColor='rgb(255,0,0)';
               }
               else{
                  const v1=document.getElementById(animation[0][0]);
                  const v2=document.getElementById(animation[0][1]);
                  v1.style.color= 'rgb(0,204,204)';
                  v1.style.backgroundColor= 'rgb(0,204,204)'
                  v2.style.color='rgb(0,204,204)'
                  v2.style.backgroundColor= 'rgb(0,204,204)';
               }
            }
            else if(animation[0][3]==='swap'){
               if(animation[0][2] === true){
                  const id1 = animation[0][0];
                  const id2 = animation[0][1];
                  const v1=document.getElementById(id1);
                  const v2=document.getElementById(id2);
                  v1.style.color= 'rgb(25,40,250)';
                  v1.style.backgroundColor='rgb(25,40,250)'
                  v2.style.color= 'rgb(25,40,250)';
                  v2.style.backgroundColor='rgb(25,40,250)';
               }
               else{
                  const id1 = animation[0][0];
                  const id2 = animation[0][1];
                  const v1=document.getElementById(id1);
                  const v2=document.getElementById(id2);
                  v1.style.color= 'rgb(0,204,204)';
                  v1.style.backgroundColor='rgb(0,204,204)'
                  v2.style.color= 'rgb(0,204,204)';
                  v2.style.backgroundColor='rgb(0,204,204)';
               }
            }
            else if(animation[0][3]==='finished'){
               const id1 = animation[0][0];
                  const id2 = animation[0][1];
                  const v1=document.getElementById(id1);
                  const v2=document.getElementById(id2);
                  v1.style.color= 'rgb(0,204,204)';
                  v1.style.backgroundColor='rgb(0,204,204)'
                  v2.style.color= 'rgb(0,255,0)';
                  v2.style.backgroundColor='rgb(0,255,0)';
            }
            else{
               const id1 = animation[0][0];
                  const id2 = animation[0][2];
                  const v1=document.getElementById(id1);
                  const v2=document.getElementById(id2);
                  v1.style.width= `${animation[0][1]}%`
                  v2.style.width=`${animation[0][3]}%`
            }
            animation=animation.slice(1)
            resolve();
          },speed)
       })
      })
 }
 