
function saturdayFun(activity = "roller-skate") {
  return "This Saturday, I want to " + activity + "!"
}

function mondayWork(activity = "go to the office") {
  return "This Monday, I will " + activity + "."
}

function wrapAdjective(char = "*") {
  return function(string) {
    return `You are ${char}${string}${char}!`
  }
}

const Calculator = {
  add: function(a, b) { return a+b },
  subtract: function(a, b) { return a-b },
  multiply: function(a, b) { return a*b },
  divide: function(a, b) { return a/b }
}

function actionApplyer(num, arr) {
  for (let i = 0; i < arr.length; i++) {
    num = arr[i](num)
  }
  return num
}
