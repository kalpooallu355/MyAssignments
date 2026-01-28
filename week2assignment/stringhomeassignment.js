function isPalindrome(str) {
    let reversedstr = ""
    
    for (let i = str.length - 1; i >= 0; i--) {
        reversedstr = reversedstr + str.charAt(i)
    }
    
    console.log("Reversed string is: " + reversedstr)
    
    if (str === reversedstr) {
        return true
    } else {
        return false
    }
}

// Test the function
const originalstr = "hello"
console.log("Is Palindrome(hello):", isPalindrome(originalstr))
