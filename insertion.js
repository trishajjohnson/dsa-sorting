function insertionSort(arr) {

    for(let i=1; i < arr.length; i++) {
        let current = arr[i];
        j = i - 1;

        while(j>=0 && current < arr[j]) {
            arr[j + 1] = arr[j];
            arr[j] = current;
            j--;
        }
    }
    console.log("arr", arr);
    return arr;
}

insertionSort([3, 44, 38, 5])


module.exports = insertionSort;