function removeSmallest(numbers) {
  let min = numbers[0];
  let k = 0;
  for (let i = 0; i < numbers.length;i++){
    if( numbers[i] < min ){
      min=numbers[i];
      k = i;
      }
    }
  let newArr = [];
  for (let i = 0; i < numbers.length;i++){
   if (i!==k){
     newArr.push(numbers[i]);
     }
   }return newArr;