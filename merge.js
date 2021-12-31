// My solution

function merge(arr1, arr2) {
    let result = [];
    let aPoint = 0;
    let bPoint = 0;

    while(aPoint < arr1.length && bPoint < arr2.length) {
        if(arr1[aPoint] < arr2[bPoint]) {
            result.push(arr1[aPoint]);
            aPoint++;
        } else if(arr1[aPoint] > arr2[bPoint]){
            result.push(arr2[bPoint]);
            bPoint++;
        } else {
            result.push(arr1[aPoint]);
            aPoint++;
            result.push(arr2[bPoint]);
            bPoint++;
        }
    }

    if(arr1.slice(aPoint).length > 0) {
        for(let i=aPoint; i < arr1.length; i++) {
            result.push(arr1[i]);
        }
    } else if(arr2.slice(bPoint).length > 0){
        for(let i=bPoint; i < arr2.length; i++) {
            result.push(arr2[i]);
        }
    }
    return result;
}

// Colt's solution

function merge2(arr1, arr2) {
    const results = [];
    let i = 0;
    let j = 0;
    
    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }

    while(i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }
    return results;
}

function mergeSort(arr) {
    // base case
    if(arr.length <= 1) return arr;

    // normal base
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

module.exports = { merge, mergeSort};
