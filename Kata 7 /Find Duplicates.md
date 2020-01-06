
https://www.codewars.com/kata/find-duplicates/train/javascript

```javascript
function duplicates(arr) {
const dup =  arr.filter((el, i) => i !== arr.indexOf(el) && i === arr.lastIndexOf(el))//arr.filter((el,i) => i !==  arr.indexOf(el));
return dup;
}
```
