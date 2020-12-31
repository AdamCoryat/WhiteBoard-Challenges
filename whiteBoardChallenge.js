
// how many times a char comes up in a string
// for loop 
input = [1,2,3,4,5,6]

function oddInt(input){
let odds = []
for(let i = 0; i < input.length; i++){
  let num = input[i]
  if(num == !typeof number){
    continue
  }
  if(num % 2 != 0){
    odds.push(num)
  }
}
return odds
}


let num = 7
function asciiArt(num){
let star = ""  
let spaces = ""
  for(let i = 0; i < num; i++){
    for(let c = num / 2; c > 0; c--){
     spaces.concat(" ") 
    }
    star.concat("*")
    console.log(spaces + star)
  }
  for(let b = num - 1; b > 0; b--){
  star.slice(0, num)
  }
}

function doWhile(arr){
  let x = 2
  let b = true

}

let ten = 11


function findTheA(arr){
  let index = 1
  for(let i = 0; i < arr.length; i++){
    let char = arr[i]
    if(char == "a"){
      index = i
    }
  }
  return index
}