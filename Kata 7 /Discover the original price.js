https://www.codewars.com/kata/552564a82142d701f5001228


function discoverOriginalPrice(discountedPrice, salePercentage){
    return +((discountedPrice/(100-salePercentage))*100).toFixed(2) ;
}