function triangle(lenght){

    for (let index = 1; index <=lenght; index++) {
        let res='';
        for (let index1 = 1; index1 <= index; index1++) {
            res+=`${index} `
        }
        console.log(res);
        
    }
    
}
