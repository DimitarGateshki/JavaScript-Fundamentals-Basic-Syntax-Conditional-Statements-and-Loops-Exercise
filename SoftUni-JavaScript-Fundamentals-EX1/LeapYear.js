function isLeap(numb){

    if (numb%4==0 && (numb%100!=0 || numb%400==0) ) {
        console.log('yes');
    }else{
        console.log('no');
    }
}
