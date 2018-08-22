'use strict'
//分治法 在数组中寻找最大值
let a=[10,160,44,28,18,78,89,34];
function bin(a,max,left,right) {
    // let max=0;
    
    if(a instanceof Array&&a.length>0)
    {
     if(right-left<=1)
     {
     if(a[left]>=a[right])
     {
       max=a[left];
     }else{
       max=a[right];
     }
     }else{
        // 当目标数组的长度大于2
      let m1=0,m2=0,middle=Math.ceil((right-left)/2)+left;
      m1=bin(a, m1, left, middle);
      m2=bin(a, m2, middle+1, right);
        if(m2>m1)
        {
          max=m2;
        }else{
          max=m1;
        }
     }
     console.log(max)
     return max;
    }
    return  0;
  }
  //分钟算法 求解最大值
  function getMin(a,left,right,min)
  {
    if(a instanceof Array&&a.length>0)
    {
     if(right-left<=1){
      if(a[left]>a[right])
      {
        min=a[right];
      }else
      {
        min=a[left];
      }
     }else{
       let [m1,m2,middle]=[0,0,Math.ceil((right-left)/2)+left];
       m1=getMin(a, left, middle, m1);
       m2=getMin(a, middle+1, right, m2);
       if(m1<m2)
       {
         min=m1;
       }else{
         min=m2;
       }
     }
     return min;
    }
    return 0;
  }
  document.writeln(100000/24/360);
  document.writeln(getMin(a, 0, a.length-1, 0));
 

