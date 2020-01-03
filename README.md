# Ev
* task 1 
```javascript
const a = 123 ; 
```

```javascript
function squareArea(A){
const l = A * 4; 
const r = l / (2 * Math.PI); 
const s = r * r;
 
return Number(s.toFixed(2));
} 

 
```
```javascript
const hoopCount = n => n < 10 ? "Keep at it until you get it" : "Great, now move on to tricks"; 
   //your code goes here    
```
```javascript
function removeSmallest(numbers) {

let min = numbers[0];
let k = 0;
for ( let i = 0 ; i < numbers.length ; i++) {
if ( numbers[i] < min ){
min=numbers[i];
k=i;
}
}
let newArr = [];
for ( let i = 0 ; i< numbers.length ; i++){
if ( i!=k){
newArr.push(numbers[i]);}

}return newArr;
}
```

