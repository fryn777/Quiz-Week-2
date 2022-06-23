

const arr = [3,8,9,7,6]

function rotateArray(array,k){

    for(let i = 1; i <= k; i++){
        array.unshift(array.pop());
        console.log(array);
    }
 
}

console.log(rotateArray(arr,3)); 