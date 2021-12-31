function bubbleSort(arr) {
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;    
            }   
            count++;
        }
    }
    console.log("count", count)
    return arr;
}

bubbleSort([3, 5, 1, 9, 23, 19])
// Optimized version, removing one item from array length each time, in order to shorten
//  # of rounds loop runs through.

function bubbleSort2(arr) {
    let count = 0;

    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length - i; j++) {
            if(arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
            count++;
        }
    }
    console.log("count", count)
    return arr;
}
bubbleSort2([3, 5, 1, 9, 23, 19])

// Optimized further, also adding in to check if swapping has occured. If not, loop ends.

function bubbleSort3(arr) {
    let count = 0;
    
    for(let i = 0; i < arr.length; i++) {
        let swapped = false;
        for(let j = 0; j < arr.length - i; j++) {
            if(arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
            count++;
        }
        if(!swapped) break;
    }
    console.log("count", count)
    return arr;
}
bubbleSort3([3, 5, 1, 9, 23, 19])


module.exports = bubbleSort;
module.exports = bubbleSort2;
module.exports = bubbleSort3;