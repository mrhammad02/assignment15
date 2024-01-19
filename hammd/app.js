// Chapter 31 - 34 (Date & Time)
//1
// var dObj = new Date();
//2
// var a = dObj.toString();
//3
// var d = new Date();

// var day = d.toLocaleDateString('en-US', { weekday: 'long' });

// console.log(day);
//4
// var d = new Date();

// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// var dayIndex = d.getDay();

// alert("Today is " + dayNames[dayIndex] + " (Index: " + dayIndex + ")");

//5
// var later = new Date(2020, 11, 31);

// console.log(later);

//6
// var millisecondsElapsed = new Date(1980, 0, 1).getTime();

// alert("Milliseconds elapsed between the reference date and the beginning of 1980: " + millisecondsElapsed);

//7
// Create a Date object
// var myDate = new Date();

// console.log("Original Date: " + myDate);

// myDate.setFullYear(2022);

// console.log("Updated Date: " + myDate);

//Chapter 35 - 37 (Functions)

//1
// function displayAlert() 

//2
// function a (){
//     var b = prompt("Enter your name");
//     alert("Hello, " + b + "!");
// }
// a();

//Chapter 38 (Local vs. Global Variables)
//1
// function khan(){
//     var pol = "hammad iqbal"
//     console.log(pol);

//     pol = pol.toUpperCase();
//     console.log(pol);
// }
// khan();

// //2
// var ham = "my name";

// function lop(){
//     console.log(ham);
// }
// lop();

// Chapter 39, 40 (Switch Statements)
//1
// var dayOfWeek = "Wednesday";

// switch (dayOfWeek) {
//   case "Monday":
//     console.log("It's the start of the week.");
//     break;
//   case "Wednesday":
//     console.log("It's the middle of the week.");
//     break;
//   case "Friday":
//     console.log("It's almost the weekend!");
//     break;
//   default:
//     console.log("It's another day of the week.");
//     break;
// }

//2
// var cityName = prompt("Enter the city name:");

// cityName = cityName.toLowerCase();

// switch (cityName) {
//   case "new york":
//     alert("Welcome to New York!");
//     break;
//   case "london":
//     alert("Greetings from London!");
//     break;
//   case "tokyo":
//     alert("Konnichiwa from Tokyo!");
//     break;
//   default:
//     alert("Sorry, we don't have a special message for " + cityName + ".");
//     break;
// }
