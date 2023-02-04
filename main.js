console.log('hello day 2')
// some more control flow
// switch case statment 
/*  syntax: switch (VARIABLE) {
    case VALU:
        code goes here
        .. more lines if necessary
        break
        case VALUE2:
            ect..
}
*/
const day = new Date().getDay()
console.log(day)
const literalDay = new Date().toString()
console.log(literalDay)

switch (day) {
    case 0:
        console.log('Sunday Funday!')
        break
        case 1:
    case 1:
        console.log('Sunday Funday!')
        break
        case 1:
    case 2:
        console.log('Best day of week')
        break
        case 1:

    case 3:
        console.log('tuesday!')
        break
        
}

//  from Codewar:

var countSheep = function (num){
    let string = ``
    for (let y = 1; y <= num; y = y +1){
      string = string + y + ` sheep...`
    }
    return string 
  }


  function divisibleBy(numbers, divisor){
    let arr = []
     for (let i = 0; i < numbers.length; i +=1){
       if (numbers[i] % divisor == 0){
         arr.push(numbers[i])
       }
     }
     return arr
   }