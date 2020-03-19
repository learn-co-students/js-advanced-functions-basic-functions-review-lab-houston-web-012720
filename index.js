// Your code here
const saturdayFun = (activity = "roller-skate") => `This Saturday, I want to ${activity}!`

const mondayWork = (action = "go to the office") => `This Monday, I will ${action}.`

const wrapAdjective = (adj = "*") => 
(string = "special") => `You are ${adj}${string}${adj}!`

const Calculator = {
    add: (num1, num2) => num1 + num2,
    subtract: (num1, num2) => num1 - num2,
    multiply: (num1, num2) => num1 * num2,
    divide: (num1,num2) => num1 / num2
}

const actionApplyer = (number, array) => {
    array.forEach(e_function => {
    number = e_function(number)
    })
    return number
}
