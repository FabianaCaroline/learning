const arrayA = [5, 32, 3, 44, 1];
const arrayB = [57, 4, 21, 2, 13];

for (let index = 0; index < arrayA.length; index++) {
   if (arrayA[index]<arrayB[index]||arrayB===arrayA) {
       console.log(arrayA[index]);
   } else{
       console.log(arrayB[index]);
   }
}
