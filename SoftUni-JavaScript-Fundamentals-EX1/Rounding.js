function round(n1 ,n2){

    if(n2>15){
        n2=15;
    }

 const endSum= n1.toFixed(n2);

 const final=parseFloat(endSum);
   console.log(final);

}