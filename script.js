// ARRAY METHODS
function reverseStr(str){
  return str.split("").reverse().join("")
}
console.log(reverseStr("Let's reverse this string"))

// USING FOR LOOP
function strReversed(txt){
  let str = ""
  for(let i = 0; i < txt.length; i++){
      str = txt[i] + str
  }
  return str
}

console.log(strReversed("Hello Wold"))