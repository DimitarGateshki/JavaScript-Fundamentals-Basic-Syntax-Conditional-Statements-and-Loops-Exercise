function Vacation(group,type,day){

    let total=0.00;
    let price=0.00;
    let discount=0.00;

    if(type==='Students' && day==='Friday'){
        price=8.45;
        total=group*price;
    }else if (type==='Students' && day==='Saturday') {
        price=9.80;
        total=group*price;

    }else if (type==='Students' && day==='Sunday') {  
             price=10.46;
             total=group*price;

    }else if(type==='Business' && day==='Friday'){
        price=10.90;
        total=group*price;

    }else if (type==='Business' && day==='Saturday') {
        price=15.60;
        total=group*price;
        
    }else if (type==='Business' && day==='Sunday') {
        price=16;
        total=group*price;
        
    }else if(type==='Regular' && day==='Friday'){
        price=15;
        total=group*price;

    }else if (type==='Regular' && day==='Saturday') {
        price=20;
        total=group*price;
        
    }else if (type==='Regular' && day==='Sunday') {
        price=22.50;
        total=group*price;
        
    }

    if (type==='Students' && group>=30) {
        total=total*0.85;
    }

    if (type==='Business' && group>=100) {
        total=total-(price*10);
    }

    if (type==='Regular' && group>=10 && group<=20 ) {
        total=total*0.95;
    }

    total=total.toFixed(2);

    console.log(`Total price: ${total}`);

}
