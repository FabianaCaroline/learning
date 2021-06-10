function sockMerchant(n, ar) {
    // Write your code here
    let numMatch = 0;
    let numSocks = 0;
    let search = [ar[0]];
    
    for(let i = 0; i<n; i++){
        numMatch = 0;
        for(let j = 0; j<search.length; j++){
            if(ar[i]===search[j]){
                numMatch++;
                numSocks++;
            }
        }
        if(numMatch===0){
            search.push(ar[i]);
        }
    }
    if((numSocks%2)===1){
        return((numSocks-1)/2);
    } else if(numSocks===0){
        return numSocks;
    } else{
        return numSocks/2;
    }
}
let num = sockMerchant(15, [6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5]);
console.log(num);