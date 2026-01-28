function lengthoflastword(s){
    let words = s.trim().split(" ")
    let lastword = words[words.length - 1]
    return lastword.length
}

console.log(lengthoflastword(" hello world" ))
console.log(lengthoflastword(" fly me to the moon  "))

function isAnagram(str1, str2){
    if (str1.length !== str2.length){
        return false

    }

    let sortedstr1 = str1.split("").sort().join("")
    let sortedstr2 = str2.split("").sort().join("")
    return sortedstr1 === sortedstr2
}

console.log(isAnagram("listen", "silent"))
console.log(isAnagram("hello", "world"))