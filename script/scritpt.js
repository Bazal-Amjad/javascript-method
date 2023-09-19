// class car {
//     constructor(name, year){
//         this.name = name;
//         this.year= year;
//     }
// }

// const myCar1 = new car ("ford", 2014);
// const myCar2 = new car( "Audi", 2019);

// var i = [myCar1,myCar2]
// var text= "";

// console.log(i);

// for (car of i){
//     text  += `Name: ${car.name},year: ${car.year}`;
// }
// console.log(text)
////////////////////////////////

// function Student(name, rollno, age) {
//     this.sname = name;
//     this.srollno = rollno;
//     this.age = age;
// }
// var s1 = new Student("Hamza", 290, 20);
// var s2 = new Student("Ali", 190, 18);
// var s3 = new Student("Ahsan", 180, 22);
// var s4 = new Student("Ahmad", 189, 16);


// console.log("Name:" + s1.sname + "," + "RollNO:" + s1.srollno)

// var i;
// for (i in s1)
// {
//     console.log(i+" :"+s2[i]);
// }i

///////////////////////////////

// forenhite to degree centigrade ( temperature conversion)
/* var input = prompt("enter the temprature in F")
var cel = (input-32) * 5/9
alert("F to C" + cel);

var input1 = prompt("enter the temprature in C")
var cel = (input1*9/5) + 32
alert("C to F" + cel); */

///////////////////////////////////////       1- CLASS INHERITANCE


// class animal {
//     constructor (name, age){
//         this.name = name;
//         this.age = age;
//     }
//     legs(){
//         console.log('hello')
//     }
// }
//     class human extends animal{
//         eats(){
//             console.log("world")
//         }
//     }
//     class umar{
//         eats(){
//             console.log("dfdsdfds")
//         }
//     }


// var hu = human();

// hu.legs();


/////////////////////////////////////                               

// class animal {
//     constructor (name, age){
//         if(this.constructor === animal){
//             throw new Error("abstract class not initialized...")
//         }
//         this.name = name;
//         this.age = age;
//     }
//     legs(){
//         console.log('dfkdfj')
//     }
//     }
//     class umar{
//         eats(){
//             console.log("bannana")
//         }
//     }
// var hu = new animal()



/////////////////// Error handling 
// try {
//     console.log("wor")
// } catch (error) {
//     console.log("Hello")
    
// }
// finally{
//     console.log("good luck")
// }

//////////////////////////// 

// class student {
//     constructor(name){
//         this.name = name
//     }
//     getName(){
//         console.log("hello world "+ this.name + "" +this.age)

//     }
//     setName(name,age){
//         this.name = name
//         this.age = age
//     }
// }
// var hr = new student()
// hr.setName("amad" , 23)
// console.log(hr.getName())

///////////////////////////// 

// class Animal {
//     draw(){
//         console.log("Hello world")
//     }
// }
// class dog extends Animal {
//     draw(){
//         console.log("hello ")
//     }
// }
// var jn = new Animal();
// console.log(jn.draw())

// var ho = new dog();
// console.log(ho.draw())

/////////////////////////////////////// 

// var obj = {
//     name: "shoaib",
//     age: 26
// }
 
// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))


// var aa= [[],[],{}]
// console.log(aa)

//////////////////////////////////////  forms validation

// function setErrors(id, error){
//     element = document.getElementById(id);
//     element.getElementsByClassName("ferror")[0].innerHTML = error;

// }

// function onSubmit(){
//     var rvalue = true;
//     var name =document.form['myform']["fname"].value;

//     if(name.length<5){
//         // console.log("errors")
//         setErrors("name", "your value should be greater than 5")
//         rvalue = false;
//     }
//     if( name.length == 0){
//         setErrors("name", "length name of cannot be zero")
//         rvalue = false;
//     }

//     return rvalue;
    
// }

/////////////////////////// Abstraction

// class employes {
//     constructor(name,age,Basicsalary){
//         this.name = name;
//         this.age=age;
//         this.Basicsalary= Basicsalary;
//     }
//     getemployes(){
//         console.log(this.name+ "is an emplyes and" + this.age +"his/her")
//     }
//     getsalary(){
//         let bonusSalary = 3000;
//         let finalsalary =this.Basicsalary + bonusSalary;
//         console.log(finalsalary)
//     }
// }
// var ab = new employes( "hamza", 25, 2000)

// ab.getemployes();
// ab.getsalary();

///////////////////////////////////////

// function seterror(id, error){
//     element = document.getElementById(id);
//     element.getElementsByClassName('ferror')[0].innerHTML = error;
// }

// function onSubmit(){
//     var rValue = true;
//     // clearErrors();

//     var name = document.forms['myform']["fname"].value;
//     rValue = false;
//     // reset();
//     if (name.length<5){
//         seterror("name", "Length of name is too short");
//     }console.log(name)
//     return rValue;
// }

/////////

// document.getElementById("mybutton").onclick = function(){
//     var name = document.getElementById("user").value;
//     console.log(name)
//     document.getElementById("demo").innerHTML= name;
// }

//////////////

// var set = setInterval(() => {
//     console.log("hello world")
    
// }, 2000);

// function he(){
//     clearTimeout(set)
// }
////////////////////y//

// class student {
//     constructor(){
//         let name;
//     }

//     setName(name, age){
//         this.name= name;
//         this.age = age;
//     }
//     getName(){
//         var fulldata = `${this.name} - :
//         : ${this.age}`
//         // return this.name + this.age;
//         return fulldata;
//     }
// }
// var su = new student()
// su.setName("Hamza", 23)
// console.log(su.getName())
