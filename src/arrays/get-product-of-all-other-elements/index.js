function index(arr) {
    let result = [];
    for(let i = 0; i < arr.length; i++){
        let numbersToMultiply = [];
        for(let j = 0; j < arr.length; j++){
            if(j===i){
                continue
            }
            numbersToMultiply.push(arr[j]);
        }
        result.push(multiplyElementsOfArr(numbersToMultiply));
    }
    return result;
}

function multiplyElementsOfArr(numbersToMultiply) {
    let result = numbersToMultiply[0];
    for(let i = 1; i < numbersToMultiply.length; i++){
        result *= numbersToMultiply[i];
    }
    return result;
}

console.log(index([1,2,3,4,5]));
