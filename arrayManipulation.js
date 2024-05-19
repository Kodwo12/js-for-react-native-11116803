
function processArray(arr) {
    return arr.map(num => {
        if (num % 2 === 0) {
            return num * num; 
        } else {
            return num * 3; 
        }
    });
}


function formatArrayStrings(stringArray, numberArray) {
    if (stringArray.length !== numberArray.length) {
        throw new Error('The two arrays must have the same length');
    }

    return stringArray.map((str, index) => {
        if (numberArray[index] % 2 === 0) {
            return str.toUpperCase(); 
        } else {
            return str.toLowerCase(); 
        }
    });
}


const inputArray = [1, 2, 3, 4, 5];
const processedNumbers = processArray(inputArray);
console.log(processedNumbers); 

const stringArray = ["Hello", "World", "JavaScript", "is", "awesome"];
const formattedStrings = formatArrayStrings(stringArray, processedNumbers);
console.log(formattedStrings); 



 
 
