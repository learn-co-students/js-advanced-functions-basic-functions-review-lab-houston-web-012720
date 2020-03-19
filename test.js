arr = [2,4,8,16,50]
// arr.map(n => console.log("Number is: " + n))

cubed_arr = arr.reduce((acc, n) => acc + Math.pow(n, 4), [])
console.log(cubed_arr)
