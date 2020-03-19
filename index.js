function saturdayFun(something = "roller-skate"){
  return `This Saturday, I want to ${something}!`
}

function mondayWork(work = "go to the office"){
  return `This Monday, I will ${work}.`
}

function wrapAdjective(flair = "*"){
  return function(adj = "special"){
    return `You are ${flair}${adj}${flair}!`
  }
}
// the fucntions are invoked when you call them 
// wrapAdjective() will return a function 
// wrapAdjective()() will return a string 

var Calculator = {
  // add: function(){return 1+3}() // will give you 4 on Calculator.add
  add: function(){return 1+3}, // will give you 4 on Calculate.add()
  subtract: function(){return 1-3},
  multiply: function(){return 1*3}, 
  divide: function(){return 10/5}
}

function actionApplyer(num, functions){
  if (functions.length === 0){
    return num
  } else {
    return functions.reduce( (acc, fn) => fn(acc) ,num)
  }
}

function fn1(x){
  return x * 2
}

function fn2(x){
  return x + 1000
}

function fn3(x){
  return x % 7
}