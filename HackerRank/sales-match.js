function sockMerchant(n, ar) {
    // Write your code here
    let numMatch = 0;
    let numSocks;
    let search = [];
    
    for(let i = 0; i<n; i++){
        numSocks = 0;
        if(search.includes(ar[i])){
            continue;
        } else{
            for(let a = 0; a<n; a++){
                if(ar[i]===ar[a]){
                    numSocks++;
                    search.push(ar[i]);
                }
            }
        }
        numMatch += Math.floor(numSocks/2);
    }
    return numMatch;
}
let num = sockMerchant(15, [6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5]);
console.log(num);