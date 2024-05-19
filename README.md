# js-for-react-native-11116803
#11116803

#TASK 1
The processArray Function takes an array of numbers and returns a new array where:
Each even number is squared and each odd number is tripled.
It Uses the map method to iterate through the array and apply the appropriate transformation based on whether the number is even or odd.

#TASK 2
The formatArrayStrings Function takes two arrays (one of strings and one of numbers processed by processArray) and returns a new array of strings where each string is capitalized if the corresponding number is even as well as each string is converted to lowercase if the corresponding number is odd.
It uses the map method to iterate through the string array and modifies each string based on the corresponding number in the number array.

#TASK 3
The createUserProfiles Function takes two arrays (one of original names and one of modified names) and returns an array of objects. Each object represents a user profile containing id: An auto-incremented identifier starting from 1,originalName: The original name from the first array and modifiedName: The modified name from the second array.
It checks if both input arrays have the same length; if not, throws an error,uses the map method to iterate through the originalNames array.For each name, creates an object with id, originalName, and modifiedName.
The id is assigned by the index plus one (to start from 1).