function selectionSort(arr) {
    
    for(let i = 0; i < arr.length; i++) {
        let currentMin;
        let currentMinIdx;
        for(let j = i; j < arr.length; j++) {
            if(!currentMin) {
                currentMin = arr[j];
                currentMinIdx = j;
            }
            if(arr[j] < currentMin) {
                currentMin = arr[j];
                currentMinIdx = j;
            }
        }
        if(arr[i] > currentMin) {
            let temp = arr[i];
            arr[i] = currentMin;
            arr[currentMinIdx] = temp;
        }
    }
    console.log("arr", arr)
    return arr;
}

module.exports = selectionSort;