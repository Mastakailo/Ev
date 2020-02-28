https://www.codewars.com/kata/58e0bd6a79716b7fcf0013b1/train/javascript

function getAges(sum,difference){
    let yung = ( sum - difference ) / 2;
    let old = sum - yung;
    if (yung < 0 || difference < 0 )return null;
    return [old , yung];
};

