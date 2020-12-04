function validPassword(arr){
  let correct = 0
  let password = ""
  let min = 0
  let max = 0
  let letter = ""
  for(let i = 0; i < arr.length; i++){
    let pd = arr[i]
     min = pd[0] - 1
     max = pd[1] - 1
     letter = pd[2]
     password = pd[3]
    if(password[min] == letter && password[max] != letter || password[min] != letter && password[max] == letter){
      correct += 1
    }
    }
    return correct
  }

