https://www.codewars.com/kata/5828713ed04efde70e000346/train/javascript

    function countLanguages(list) {
        let arr = {};
        for (let i =0; i<list.length;i++){
            if (arr[list[i].language] === undefined){
                arr[list[i].language]=1;
            }else{
                arr[list[i].language]++}
        }
        return arr;
    }