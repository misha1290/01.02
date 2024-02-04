/* let numberFirst = 1000
while(numberFirst > 0){
    console.log(numberFirst)
    numberFirst -= 7
} */

/* let numberRoom = 100
let room = 63
while(numberRoom >= room){
    console.log(numberRoom)
    numberRoom -=1
} */

/* let password = ''
do{
    password = prompt("Введіть пароль не меньше 5 символів")
}while(password.length < 5)
console.log(password) */

/* let number = 15
for(let i = 0; i < number; i++){
    console.log(i)
} */

/* let num = 27
for(let i = 0; i < num; i++){
    if(i === 13) {
        break
    }
    console.log(i)
} */

/* let num = 27
for(let i = 0; i < num; i++){
    if(i === 13) {
        continue
    }
    console.log(i)
} */

/* let employees = 10
let totalSalary = 0
for (let i = 0; i < employees; i++) {
    let salary = Math.floor(Math.random() * (5000 - 500 + 1)) + 500
    totalSalary += salary
    console.log("Загальна сума ЗП працівників: " + totalSalary)
} */




console.log("Задание №1")
let numberFirst = 1
while(numberFirst <= 10){
    console.log(numberFirst)
    numberFirst += 1
}
console.log("Задание №2")
let numberSecond = 22
for(let i = 2; i < numberSecond; i++){
    if(i % 2 !== 0) {
        continue
    }
    console.log(i)
}
console.log("Задание №3")
let numberThird = 71
for(let i = 2; i < numberThird; i++){
    if(i % 7 !== 0) {
        continue
    }
    console.log(i)
}
console.log("Задание №4")
let numberFor = 5
numberFirst = 1
while(numberFirst <= numberFor){
    console.log(numberFirst)
    numberFirst += 1
}
console.log("Задание №5")
let numberFive = 11
for(let i = 1; i < numberFive; i++){
    if(i === 7) {
        break
    }
    console.log(i)
}
console.log("Задание №6")
let n = prompt("Введіть число")
for(let i = 1; i < n; i++){
    if(i === n) {
        break
    }
    console.log(i)
}
console.log("Задание №7")
numberFirst = 1
while(numberFirst <= 20){
    if(numberFirst % 3 == 0) {
        numberFirst += 1
        continue
    }
    console.log(numberFirst)
    numberFirst += 1
}
