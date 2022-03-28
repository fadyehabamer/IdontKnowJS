// * if left > right --> swap until the end then begin again
// * https://visualgo.net/en/sorting
// *==================================================================

let unordered = [9, 4, 1, 3, 6, 7]
let unordered2 = [9, 4, 1, 3, 6, 7]
let swapped;

function bubbleSort(arr) {
    swapped = false
    let end = arr.length - 1
    for (let i = 0; i < end; i++) {
        if (arr[i] > arr[i + 1]) {
            swapped = true;
            // swap elements 
            let temp = arr[i]
            arr[i] = arr[i + 1]
            arr[i + 1] = temp
        }
    }
    // * because end element is the largest (we dont need it any more)
    end--
}

// * excution
do {
    bubbleSort(unordered)
} while (swapped)

console.log(unordered);



// * same algorithm but not using temp variable

function bubbleSort2(arr) {
    swapped = false
    let end = arr.length - 1
    for (let i = 0, j = 1; i < end; i++, j++) {
        if (arr[i] > arr[j]) {
            swapped = true;
            // * swap elements using array destruction
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }
    // * because end element is the largest (we dont need it any more)
    end--
}
// * excution
do {
    bubbleSort2(unordered)
} while (swapped)

console.log(unordered);