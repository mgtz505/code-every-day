console.log("You\'re connected")
//Write a function called countTheBits that accepts a single numeric argument 
//that will be an integer.

//The function should return the number of bits 
//set to 1 in the number's binary representation.

function countTheBits(num){

    let bits = num.toString(2)
    let counter = 0;
    // console.log(bits)
    for(i=0;i<=bits.length-1;i++){
        if(bits[i] == 1){
            counter++
        }
    }
    console.log("The number of bits w/ value of 1 is " + counter)
}

// countTheBits(65535)


//Write a function called addChecker that accepts two arguments.
//The first argument is an array containing at least two integers.
//The integers in the array have been pre-sorted in ascending order.
//The second argument is an integer.
//The addChecker function should return true if there are two integers in the array of integers (first argument) that,
// when added together, equals the integer passed in as the second argument
//If there are no two integers in the array with a sum equal to the second argument,
// addChecker should return false.

//An efficient solution can leverage the fact
// that the integers in the array come sorted for you.


function addChecker(array, num){
console.log(array, num)
    for(i=0;i<=array.length-1;i++){
        for(k=0;k<=array.length-1;k++){
            if(array[i] + array[k] == num){
                return true;
            } else {
                return false;
            }
        }
    }
}

addChecker([10,15,16,22], 32)