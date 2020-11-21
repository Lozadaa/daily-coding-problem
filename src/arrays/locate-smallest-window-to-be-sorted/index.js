function getSmallestWindow(arr){
    let result = [];
    for(let i=0; i<arr.length-1; i++){
        let currentValue = arr[i];
        let nextValue = arr[i+1];
        if(currentValue > nextValue || result.length > 0 && arr[result[0]] < nextValue){
            if(result.length <= 1){
                result.push(i);
            }else{
                result[1] = i;
            }
        }
    }
    return result;
}

// examples:
console.log(getSmallestWindow([3, 7, 5, 6, 9]));
console.log(getSmallestWindow([1, 2, 3, 7, 5, 6, 4, 8]));
