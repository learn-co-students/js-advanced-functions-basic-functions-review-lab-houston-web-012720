// Your code here
saturdayFun()


function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = (activity = "go to the office") => `This Monday, I will ${activity}.`
mondayWork()

function wrapAdjective(string = "*") {
    return function(single = "special") { return `You are ${string}${single}${string}!` }
}

const Calculator = {
    add: function add() {
        return 1 + 3
    },
    subtract: function subtract() {
        return 1 - 3
    },
    multiply: function multiply() {
        return 1 * 3
    },
    divide: function divide() {
        return 10 / 5
    }
}



// let actionApplyer = function(start, array) {
//     let a = start

//     for (let i = 0; i < array.length; i++) {
//         a = array[i](a)
//     }

//     return a
// }


let actionApplyer = function(start, array) {
    if (array.length == 0) { return start } else {
        let a = array.reduce(function(acc, fun) {
            return fun(acc)
        }, start)
        return a
    }
}