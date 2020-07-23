// Chapter 38 - 42


// Question 1


// function square() {
//     var a = parseInt(prompt("Input value of a"))
//     var b = parseInt(prompt("Input value of b"))
//     var c
//     c = Math.pow(a, b)
//     alert(c)
// }

// Question 2

// function leapyear() {
//     var year = parseInt(prompt("Input the year"))
//     if (year % 4 === 0||year % 100 === 0||year % 400 === 0){
//         alert(year+" "+"is a leap year")
//     } else{
//         alert(year+" "+"is not a leap year")
//     }
// }

// Question 3

// function data() {
//     var a = parseInt(prompt("Input the side a"))
//     var b = parseInt(prompt("Input the side b"))
//     var c = parseInt(prompt("Input the side c"))
//     var s = (a + b + c) / 2
//     area()

//     function area() {
//         var area = s*(s-a)*(s-b)*(s-c)
//         alert(area)
//     }

// }

// data()


// Question 4


// function data() {
//     var chemistry = parseInt(prompt("Input your chemistry marks"))
//     var physics = parseInt(prompt("Input your physics marks"))
//     var maths = parseInt(prompt("Input your maths marks"))
//     percentage()
//     function percentage() {
//         var percentage = ((chemistry + physics + maths) / 300) * 100
//         alert(percentage + "%")
//         avg()
//     }
//     function avg() {
//         var average = (chemistry + physics + maths) / 3
//         alert(average)
//     }


// }

// data()

// Question 5


// Question 6

// function removeVowels(str){
//     var vowels = "aieuo"
//     var strArr = str.toLowerCase().split("")
//     var newArr = strArr.filter(function(letter){
//         if(vowels.indexOf(letter)  == -1){
//             return letter
//         }
//     })
//     var string = ""
//     newArr.forEach(function(letter){
//         string += letter
//     })
//     return string
// }

// console.log(removeVowels('TIM'))


// Question 7 problem

// function countVowel(str) {
//     var vowelOccurence = ["aa","ae","ai","ao","au","ea","ee","ei","eo","eu","ia","ie","ii","io","iu","oa","oe","oi","oo","ou"]
//     var strArray = str.toLowerCase().split('')




// }

// Question 8

// var input = parseInt(prompt("Please enter the distance in Kilometer"))

// function kmToMeter() {
//     var meter = input * 1000
//     alert("The distance is " + meter + "in meters")
//     kmToFeet()
// }

// function kmToFeet() {
//     var feet = input * 3280
//     alert("The distance is " + feet + "in foot")
//     kmToInch()
// }

// function kmToInch() {
//     var inch = input * 39370
//     alert("The distance is " + inch + "in inches")
//     kmToCenti()
// }

// function kmToCenti() {
//     var cm = input * 100000
//     alert("The distance is " + cm + "in centimeters")
// }

// kmToMeter()


// Question 9

// var workTime = parseInt(prompt("Input the number of hours your woked"))
// if (workTime > 45) {
//     var pay = (workTime - 45) * 12
//     alert("You will get " + pay)
// }else{
//     alert("No overtime pay for you")
// }

// Question 10



// Chapter 43 - 48

// function deletetr() {
//     document.getElementById("table-row").innerHTML=""
// }

// Question 5


// var i = 0
// var c = document.getElementById("counter-screen")

// function increase() {
//     i++
//     c.innerHTML = i
// }

// function decrease() {
//     i--
//     c.innerHTML = i
// }

// Chapter 49 - 52

// function expandpara() {
//     var extended_part = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex corrupti aliquid quos, a debitis quas in reprehenderit recusandae ad adipisci natus illo harum ipsa repellendus fuga similique nesciunt quibusdam neque!"
//     document.getElementById("lorem").innerHTML = extended_part
// }

// Chapter 58 - 67

// Question 1

// var main_content = document.getElementById('main-content')
// var child = document.childNodes[1].lastChild.childNodes[1].childNodes[5]
// var render = document.getElementsByClassName("render")
// document.getElementById('xyz').innerHTML=render
// document.getElementById("first-name").innerHTML = "Alex"
// document.getElementById("last-name").innerHTML = "Bank"
// document.getElementById("email").innerHTML = "alexbank@example.com"

// Question 2

// var nodeType = document.getElementById("form-content").nodeType
// console.log(nodeType)
// var node=document.childNodes[1].lastChild.childNodes[1].childNodes[5].DOCUMENT_TYPE_NODE
// console.log(node)
// var main_content_first = document.childNodes[1].lastChild.childNodes[1].childNodes[5].childNodes[1]
// var main_content_last = document.childNodes[1].lastChild.childNodes[1].childNodes[5].childNodes[9]

// console.log(main_content_last)
