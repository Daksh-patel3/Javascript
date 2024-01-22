"use strict"  //use newer version of javascript

//alert(8+9)   //this is node js not browser



//DataTypes:

//1.Number: Represents numeric values. It can be integers or floating-point numbers.
let num = 42; // Integer
let pi = 3.14; // Floating-point number

//2.String: Represents sequences of characters enclosed in single or double quotes.
let message = 'Hello, World!';
let name = "John";

//3.Boolean: Represents a logical entity and can have only two values: true or false.
let isTrue = true;
let isFalse = false;

//4.Undefined: Represents the absence of a value or an uninitialized variable.
let undefinedVariable;

//5.Null: Represents the intentional absence of any object value.
let nullValue = null;

//6.Symbol (ES6 and later): Represents a unique identifier. 
       //Symbols are often used as property keys in objects to avoid naming conflicts.
const mySymbol = Symbol('description');
console.log(mySymbol)

//7.Object: Represents a collection of key-value pairs. Objects can hold various data types and functions as properties.
let person = {
    name: 'John',
    age: 30,
    isStudent: false,
    sayHello: function() {
      console.log('Hello!');
    }
  };

//8.BigInt (ES11 and later): Represents integers with arbitrary precision. It is created by appending n or by using the BigInt() constructor.
let bigIntValue = 9007199254740991n;

  

//typeof:
let a=10;
let b="df"

console.log(typeof a)