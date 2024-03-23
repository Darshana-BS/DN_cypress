function reversedStr(str){
    let reversed_str = '';
    for (let i = str.length-1; i>=0; i--){
        reversed_str += str[i]
    }
    return reversed_str
}

let originalstr = 'Hi me'
reversed_strvalue = reversedStr(originalstr)
console.log(reversed_strvalue)
