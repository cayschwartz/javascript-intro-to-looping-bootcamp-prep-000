function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}

function forLoop(array){
  for (let i = 0; i<25; i++){
    array.push("I am ${i} strange loops.")
  }
  return array
}

function whileLoop(number){
  while(number>0){
    console.log(--number)
  }
  return "done"
}

function doWhileLoop(array){
  do{
    array.pop()
  }
  while (array.length >0 && maybeTrue())
  return array
}
