// Your code here
let saturdayFun = (activity = 'roller-skate')  => {
  return `This Saturday, I want to ${activity}!`
}

let mondayWork = (activity = 'go to the office') => {
  return `This Monday, I will ${activity}.`
}

let wrapAdjective = (wrap = '*') => {
  return function(adj = 'special') {
    return `You are ${wrap}${adj}${wrap}!`
  }
}

let Calculator = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  },
  multiply: function(a, b) {
    return a * b;
  },
  divide: function(a, b) {
    return a / b;
  }
}

let actionApplyer = (int, array) => {
  // if (array == false) return int
  let result = int

  for (const func of array) {
    result = func(result)
  }

  return result
}