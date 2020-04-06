//https://www.codewars.com/kata/555eded1ad94b00403000071/train/javascript


function SeriesSum(n)
{
    let sum = 1 , g = 4 ;
    // Happy Coding ^_^
    if (!n ) return '0.00';

    for (let i = 1 ;i < n; i++){
        sum += 1 / g;
        g+=3;

    }
    return sum.toFixed(2);
}




