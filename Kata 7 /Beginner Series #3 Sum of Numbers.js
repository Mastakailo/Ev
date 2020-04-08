//https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript



function getSum( a,b )
{
    let x = 0 ;

    if ( a === b ){
        return a ;
    }

    if ( a < b ) {
        for(let i = a ; i <= b ; i++){
            x+=i;
        }
        return x ;
    }
    if (a > b ){
        for (let i = b ; i <=a ; i++ ){
            x += i;
        }
        return x ;
    }
}

