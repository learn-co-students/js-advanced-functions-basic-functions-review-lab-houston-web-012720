// Your code here

let saturdayFun = (activity = "roller-skate") => `This Saturday, I want to ${activity}!`

let mondayWork = (task = "go to the office") => `This Monday, I will ${task}.`

let wrapAdjective = (decorator="*") => (phrase) => `You are ${decorator}${phrase}${decorator}!` 

let Calculator = {
  add: (a,b) => a+b,
  subtract: (a,b) => a-b,
  multiply: (a,b) => a*b,
  divide: (a,b) => a/b
}

let actionApplyer = (startingInteger, array) => array.reduce((res, func) => func(res), startingInteger)