// console.log(Math.floor(100000 + (Math.random() * 900000)));

// function sum(a){
//     return function(b){
//         if(!b){
//             return a;
//         }
//         return sum(a+b)
//     }
// };

// console.log(sum(2)(3)(6)())

// function sum(...numbers){
//    let total =  numbers.reduce((accum, value) => accum + value ,0);
//    return total;
// };
// console.log(sum(3,4,5));

// const obj1 = {
//     test: "value1"
// };
// const obj2 = {...obj1};
// obj2.test = "value2";
// console.log(obj1)
// console.log(obj2)

// let arr = [1,2,3,4,5,4,3];
// let removeElemnt = arr.filter((item,index) => arr.indexOf(item) !== index);

// console.log(removeElemnt)

// let str = "MyNameIsAwais";

// let newStr = str.split(/(?=[A-Z])/).join(" ");
// console.log(newStr)

// console.log("greater" > "elephant");

// let arry = [1,2,3,4,5];
// let newArray = arry.forEach((item) => item * 2);
// console.log(newArray)
// console.log(arry)

// function helperFibonacci(n) {
//     let number1 = 0;
//     let number2 = 1;

//     for (i = 0; i < n; i++) {
//       let current = number1 + number2;
//       number1 = number2;
//       number2 = current;
//       console.log(current);
//     }
//   }

//   helperFibonacci(10);

// function helperFibonacci(n){
//     let num1 = 0;
//     let num2 = 1
//     for(let i = 0; i < n; i++){
//         let current = num1 + num2;
//             num1 = num2;
//             num2 = current
//             console.log(current)
//     }
// }

// helperFibonacci(5)

// let arr = [1,2,3,4,5,4,3]
// let newArr = arr.filter((item, index) => arr.indexOf(item) !== index);
// console.log(newArr)

// let arr = [1,2,3,4,5];
// let result = arr.reduce((accum, current) => {
//    return accum < current;
// })
// console.log(result)
// var num = 200;
// function fun(){
//     console.log(num)
//     var num = 100;
// };
// fun()

// function abc(){
//     return function(){
//         console.log("Some")
//     }
// }
// let result = abc();
// result()

// let arr = [1,2,3,4,5];
// arr.length = 0
// arr.splice(0,arr.length)
// console.log(arr)

// const c = {name:"Awais"};
// let d;
// d=c;
// c.name = "H"
// console.log(d.name)
// console.log(c.name)

// abc.xyz = 300;
// function abc(){
//     console.log(abc.xyz)
// }
// abc();
// abc.xyz = 300;
// abc()

// let numbers = [1,2,3,4,5]
// numbers[100] = 500;
// console.log(numbers)

// let arr = [..."Awais"]
// let [a,b] = arr
// console.log(a,b)

// let arr = [1,2]
// let result = arr.map(num => {
//     if(num > 0) return;
//     return num * 2;
// })
// console.log(result)

// function abc(a,b){
//     "use strict"
//     a=5;
//     b=5;
//     console.log(a+b)
//     return arguments[0] + arguments[1];
// }
// console.log
// (abc(5,10))

// let arr = [1,2,3,4,5,6,7,8];
// let result = arr.find((num) => num > 4);
// console.log(result)

// class CreateUser {
//   constructor(name, age, gender) {
//     (this.name = name), (this.age = age), (this.gender = gender);
//   }
//   fullName() {
//     console.log(this.name, this.age, this.gender);
//   }
//   get is18(){
//     return this.age >= 18;
//   }
// }
// const user1 = new CreateUser("Awais", 35, "Male");
// console.log(user1.is18)

// function curried(a){
//     return function(b){
//         return function(c){
//             return a+b+c
//         }
//     }
// }

// function curried(a){
//     return function(b){
//        return function(c){
//             return a+b+c
//        }
//     }
// }

// let result = curried(5)(6)(7);
// console.log(result);

// const curried = (a) => (b) => (c) => a+b+c
// const ans = curried(2)(3)(4);
// console.log(ans);

// let arr1 = [1,2,3,4];
// let arr2 = [5,6,7,8];
// let newArr = [];

// for (let i = 0; i < Math.max(arr1.length, arr2.length); i++ ){
//     newArr.push(arr1[i],arr2[i])
// }
// console.log(newArr)

// let str = "hello world";
// let newStr = str.split(" ").map((elem) => {
//     return elem.charAt(0).toUpperCase() + elem.slice(1)
// })
// console.log(newStr.join("\n"))

// console.log(a);

// class CreateUser {
//     constructor(name, age, gender) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//         // this.english = "English"
//     }
//     about(){
//         return `${this.name} ${this.age} ${this.gender}`
//     }
// }

// const user1 = new CreateUser("Awais",35,"Male");

// const user1 = {
//     name:"Awais",
//     age:35,
//     gender: "Male"
// }
// const user2 = {
//     about: function(){
//         console.log(this.name)
//     }
// }
// user2.about.call(user1)

// let arr = [[1,2],[3,4],[5,6]];
// let newArr = [];
// for (const element of arr) {
//     let a1 = element[0];
//     let a2 = element[1];
//     newArr.push(a1,a2)
// }
// console.log(newArr)

// const person = {
//     firstName : "John",
//     lastName  : "Doe",
//     age     : 50,
//     eyeColor  : "blue"
//   };

// console.table(person)

// let fruits = ["Apple", "Mango", "Banana"];
// console.table(fruits)

// function addTwoNumbers(num1, num2, callback){

//     if(typeof num1 === "string" && typeof num2 === "string"){
//         callback(num1,num2)
//     }else{
//         console.log("Nothing")
//     }
// }
// const obj = {
//     fname: "Awais",
//     age: 35,
//     about(hobby){
//         console.log(this.fname, this.age, hobby);
//     },
//     is18(){
//         console.log(this.age >= 18);

//     }
// }

// const obj2 = {
//     fname: "Minsa",
//     age: 7
// }
// let res = obj.about.bind(obj2, "Play")
// res()

// if ([]) {
//     console.log("Present")
// } else {
//     console.log("Absent")
// }

// const buttons = document.querySelectorAll("button");
// buttons.forEach((button) => {
//     button.addEventListener("click", (e) => {
//         if(e.target.tagName === "BUTTON"){
//             console.log(e.target.innerHTML + " was clicked")
//         }
//     })
// })

// const obj = {
//     myName : "Anam",
//     age: 18,
//     gender: "Female"
// }

// const {gender,age,myName} = obj;
// console.log(gender);

// let arr = ["Anam", 18, "Female","FrontEnd"];
// let [fname,age,...info] = arr

// console.log(info)

// const q1 = ["Jan", "Feb", "Mar"];
// const q2 = ["Apr", "May", "Jun"];
// const q3 = ["Jul", "Aug", "Sep"];
// const q4 = ["Oct", "Nov", "May"];

// const year = [q1,q2,q3,q4]

// console.log(year[0])

// let sixMonths = [["Jan", "Feb", "Mar"],["Apr", "May", "Jun"],{fname: "Anam"}];
// const [,,obj] = sixMonths

// console.log(obj.fname)

// function abc(){
//     return this
// }

// const formateDate  = (date) => {
//     return new Date(date).toLocaleTimeString("en-US", {
//         hour: "2-digit",
//         minute: "2-digit",
//         hour12: true
//     })
// }

// console.log(Date.now())

// console.log(formateDate(1749621821122))

// const formateData = () => {
//   const date = new Date(); // Local time zone is applied here
//   const day = String(date.getDate()).padStart(2, "0");
//   const month = String(date.getMonth() + 1).padStart(2, "0");
//   const year = date.getFullYear();
//   console.log (`${day}-${month}-${year}`);
// };

// formateData()

// let obj = {
//     a: {
//         b: undefined
//     }
// };

// console.log(obj.a?.b?.c?.d??"Awais")
// var abc = 25;
// if (function f(){}) {
//     console.log(typeof f)
// }
// console.log(abc)

// const number = [52,45,77,18,35,175];

// const lowestNumber = Math.max(...number);
// console.log(lowestNumber)

// let grandTotal = number.reduce((accu, curr) => {
//     let total = 0;
//     total += accu + curr;
//     return total;

// },0);

// console.log(grandTotal)

// let str = "https://res.cloudinary.com/dofovybxu/image/upload/v1744122722/mfoioafetsjv51m1ylpa.png"
// console.log(str.split("/")[str.split("/").length-1].split(".")[0] === "mfoioafetsjv51m1ylpa")

// console.log(str.split("/").pop().split(".")[0]);


//strings, arrays, objects, functions

//[0,1,1,2,3,5,8]

// function fibonacci(n){
//     if(n < 2){
//         return n
//     }
//     return fibonacci(n-1) + fibonacci(n-2)
    // const fib = [0,1];
    // for(let i = 2; i <= n; i++){
    //     fib[i] = fib[i-1] + fib[i-2]
    // }
    // return fib
    // let num1 = 0;
    // let num2 = 1;
    // let arr = [0,1];
    // for(let i = 2; i < n; i++){
    //     let current = num1 + num2;
    //     num1 = num2;
    //     num2 = current
    //     arr.push(current)
    // }
    // return arr;
// };

// console.log(fibonacci(10))

// function countdown(n) {
//   if (n === 0) {
//     console.log("Liftoff 🚀");
//     return;
//   }

//   console.log(n);
//   countdown(n - 1); // recursive call
// }

// countdown(5);


// function findIndex(arr,target){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === target){
//             return i
//         }
//     }
//     return -1
// }

// console.log(findIndex([-5,2,4,6,10], 6))

// function addUp(n){
//     let sum = 0;
//  for(let i = 1; i <= n; i++){
//     sum += i;
//  }
//  return sum
// }

// console.log(addUp(5))

// class Queue{
//     constructor(){
//         this.items = {};
//         this.rear = 0;
//         this.front = 0;
//     }
//     enqueue(element){
//         this.items[this.rear] = element;
//         this.rear++
//     }
//     dequeue(){
//         const item = this.items[this.front];
//         delete this.items[this.front];
//         this.front++
//         return item
//     }
//     isEmpty(){
//         return this.rear - this.front === 0;
//     }
//     peak(){
//         return this.items[this.front];
//     }
//     size(){
//         return this.rear - this.front
//     }
//     print(){
//         console.log(this.items)
//     }
// }

// const queue = new Queue();
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// console.log(queue.isEmpty())
// console.log(queue.peak())
// queue.print()



// Linked List

// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null
//     }
// };

// class LinkedList{
//     constructor(){
//         this.head = null;
//         this.size = 0;
//     }

//     isEmpty(){
//         return this.size === 0;
//     }

//     getSize(){
//         return this.size
//     }
// }

// const list = new LinkedList();
// console.log(list);


// const isPalindrome = (x) => {
//     if(typeof x === "number"){
//         return x < 100 ? "Please provide digit greater than 99": x === Number(x.toString().split("").reverse().join("")) 
//     }
//     if(typeof x === "string"){
//         return x === x.split("").reverse().join("")
//     }
// }

// console.log(isPalindrome("mome"))

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// let arr = [2,7,11,15]
// arr.findIndex(11)


// const twoSum = (nums, target)  => {
//     if(nums.length === 0) return "Please enter some valid data";
    
//     for(let i = 0; i < nums.length - 1; i++){
//         for(let j = i + 1; j < nums.length; j++){
//             if(nums[i] + nums[j] === target){
//                 return [i,j]
//             }
//         }
//     }
//     return "No valid pair found";
// };

// console.log(twoSum([10,12,13], 25))



// const createCounter = function(n) {
//     let counter = n
//     return function() {
//         return counter++
//     };
// };

// let  counter = createCounter(10);
// console.log(counter())
// console.log(counter())



// const checkIfInstanceOf = (obj, classFunction) => {
// if (obj === null || obj === undefined) return false;
//   if (typeof obj !== 'object') {
//         return obj.constructor === classFunction || classFunction(obj) instanceof classFunction;
//     }
//     return obj instanceof classFunction
// };


// console.log(checkIfInstanceOf(5, Number))



// const helperFibonacci = (n) => {
//     let fib = [0, 1];
//     for(let i = 2; i < n; i++){
//         fib[i] = fib[i - 1] + fib[i-2]
//     }
//     return fib
// }

// console.log(helperFibonacci(5))
//[0,1,1,2,3,5,8]



//Factorial   1 * 2 * 3 * 4 * 5 = 120

// const factorial = (n) => {
//     if(n === 0) return 1
//     return n * factorial(n- 1) ;
// }

// console.log(factorial(4))


//isPrime Number  1,3,5,7,11,13,17

// const isPrime = (n) => {
//     if (n < 2) return false;
//     for(let i = 2; i < n; i++){
//         if(n % i === 0){
//             return false;
//         }
//     }
//     return true
// }

// console.log(isPrime(2))


//Linear Search

// const linearSearch = (arr, target) => {
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === target){
//             return i
//         }
//     }
//     return -1
// }
// console.log(linearSearch([-5,2,10,4,6],10))
// console.log(linearSearch([-5,2,10,4,6],6))
// console.log(linearSearch([-5,2,10,4,6],20))
















//Binary Search
// const numbers = [4, 10, 12, 26, 34, 39, 42, 39]; 

// const binarySearch = (sortedArray, target) => {
//     let leftIndex = 0;
//     let rightIndex = sortedArray.length - 1;
//     while(leftIndex <= rightIndex){
//         let middleIndex = Math.floor((leftIndex + rightIndex)/2);
//         if(target === sortedArray[middleIndex]){
//             return middleIndex
//         }
//         if(sortedArray[middleIndex] < target){
//             leftIndex = middleIndex + 1
//         }else{
//             rightIndex = middleIndex - 1
//         }
//     }
//     return -1
// }
// console.log(binarySearch(numbers, 42))



// intial value
//let a = 0;
// itration count
//a < 10
// increament
//a++

//2 x 1 = 2

// class Queue{
//     constructor(){
//         this.items = [];
//     }
//     enqueue(element){
//         this.items.push(element)   
//     }
// }


// const queue = new Queue();
// queue.enqueue("Awais")
// console.log(queue)

//Hash Table
// class HashTable{
//     constructor(size){
//         this.table = new Array(size);
//         this.size = size
//     }
//     hash(key){
//         let total = 0;
//         for(let i = 0; i < key.length; i++){
//             total += key.charCodeAt(i)
//         }
//         return total % this.size;
//     }
//     set(key, value){
//         const index = this.hash(key);
//         this.table[index] = value;
//     }
//     get(key){
//         const index = this.hash(key);
//         return this.table[index]
//     }
//     remove(key){
//         const index = this.hash(key);
//         this.table[index] = index;
//     }
//     display(){
//         for(let i = 0; i < this.table.length; i++){
//             if(this.table[i]){
//                 console.log(`${i}:${this.table[i]}`)
//             }
//         }
//     }
// }


// const table1 = new HashTable(50);
// table1.set("name", "Awais");
// table1.set("age", 37);
// table1.display()


//Trees

// class Node{
//     constructor(value){
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// const node1 = new Node(50);
// console.log(node1)



let str = '{"firstName":"Muhammad","lastName":"Awais","email":"awais@test.com","street":"P-173 Block C","city":"Faisalabad","state":"Punjab","zipcode":"38000","country":"Pakistan","phone":"03198566946"}'



let newstr = JSON.parse(str);
console.log(newstr);




