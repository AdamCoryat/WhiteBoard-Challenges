
// how many times a char comes up in a string
// for loop 
input = [1,2,3,4,5,6]

function oddInt(input){
let odd = []
for(let i = 0; i < input.length; i++){
  let num = input[i]
  if(num == !typeof Number){
    continue
  }
  if(num % 2 != 0){
    odd.push(num)
  }
}
return odd
}


let num = 5
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
do(x - 2){
  while(b == true)
}
}
