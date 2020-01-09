function uniqueInOrder(arr){
let test= [];
//let check = arr.split('');
for (let i = 0; i < arr.length; i++){
  if (arr[i]!=arr[i+1]){
    test.push(arr[i])
    } 
  }
return test ;
}