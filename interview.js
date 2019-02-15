var maxSubArray = function(nums) {
    var prev = 0;
    var max = nums[0];

    for (var i = 0; i < nums.length; i++){
        prev = Math.max(prev + nums[i], nums[i]);
        max = Math.max(max, prev);
    }
    return max;
};


var map = {
    "(": ")",
    "[": "]",
    "{": "}"
}
var isValid = function(s) {
    var stack = [];
    for (var i = 0; i < s.length; i++) {
        var el = s[i];
        if (map[el]){
            stack.push(map[el]);
        } else {
            if (el !== stack.pop()) {
                return false;
            }
        }
    }}

var climbStairs = function(n) {
    let arr=[1,2,3];
    for(let i = 3;i<n;i++){
        arr[i]=arr[i-1] + arr[i-2];
    }
    return arr[n-1];
};

function fibonacci(num) {
    if (num <= 1) return 1;

    return fibonacci(num - 1) + fibonacci(num - 2);
}

function insertionSort(array){
    for (var i = 1; i < array.length; i++) {
        var key = array[i];
        var j = i - 1;
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = key;
    }
    return array;
}

// Quick Sort

function quickSort(arr, left, right){
    var len = arr.length,
        pivot,
        partitionIndex;


    if(left < right){
        pivot = right;
        partitionIndex = partition(arr, pivot, left, right);

        //sort left and right
        quickSort(arr, left, partitionIndex-1)
        quickSort(arr, partitionIndex + 1, right);
    }
    return arr;
}
function partition(arr, pivot, left, right){
    var pivotValue = arr[pivot],
        partitionIndex = left;

    for(var i = left; i < right; i++){
        if(arr[i] < pivotValue){
            swap(arr, i, partitionIndex);
            partitionIndex++;
        }
    }
    swap(arr, right, partitionIndex);
    return partitionIndex;
}

function swap(arr, i, j){
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
