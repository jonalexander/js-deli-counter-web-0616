function takeANumber(line, name) {
 line.push(name)
 return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
 if (line.length > 1) {
  return `Currently serving ${line.shift()}.`
 } else {
  return "There is nobody waiting to be served!"
 }
}

function currentLine(line) {
 if (line.length < 1) {
  return "The line is currently empty."
 }//

 const arr = []
 for (i = 0; i < line.length; i++) {
  arr.push(`${i + 1}. ${line[i]}`)
 }

 return `The line is currently: ${arr.join(', ')}`

} //func


 // const arr = []
 // for (let i = 0; i < line.length; i++) {
 //  arr.push(`${i + 1}. ${arr[i]}`)
 //  return 'The line is currently: ${arr}`;
 // } //for
