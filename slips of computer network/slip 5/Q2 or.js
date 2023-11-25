/*Write a JavaScript program to print the reverse of a number.  */
        function reverseNumber(originalNumber) {
            // Convert the number to a string to manipulate its characters
            var numberString = originalNumber.toString();

            // Reverse the string
            var reversedString = numberString.split('').reverse().join('');

            // Convert the reversed string back to a number
            var reversedNumber = parseInt(reversedString);

            return reversedNumber;
        }

        // Example usage:
        var inputNumber = 12345;
        var reversedResult = reverseNumber(inputNumber);

        console.log("Original Number: " + inputNumber);
        console.log("Reversed Number: " + reversedResult);
