function sum(n1,n2){
    let sum=0;
    let cur='';
    for (let index = n1; index <=n2; index++) {
        cur+=`${index} `
        sum=sum+index;
    }

    console.log(cur);
    console.log(`Sum: ${sum}`);
}
