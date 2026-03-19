/*
Prototypes:-
    JS objects is an entity having states and behaviour(properties and methods).
    Objets have a special properties called prototype.

    If prototype is set, the current object methods are priorities


Classes :-
    Template code for creating objects with same variables and behaviours like classes

If child and Parent have same methods, child method will be used.




*/

// Object 1
const personObject = {
    Name : 'Raju',
    Age  : 23,
    // Methods
    sayPersonName : () => {
        console.log(`Name of the person is: ${this.Name}`);        
    },
    sayAge : ()=>{
        console.log(`Age of the person is : ${this.Age}`);
    }
};

// Object 2
const personObject2 = {
    Name : 'Raju',
    Age  : 24,
    // Methods
    sayPersonName : () => {
        console.log(`Name of the person is: ${this.Name}`);        
    },
};


console.log(personObject.__proto__);   // to get and set prototype
personObject2.__proto__ = personObject;    // setting personObject 2's prototype to personObject



// class
class myParentClassName{

    // Variables
    name = 'Amit';


    // Constructor
    constructor(XYZ){
        console.log(`${this.name} creates a constructor : ${XYZ}`);
        this.XYZ = XYZ;
    }

    constructor (){

    }


    // Methods
    sayPersonName = ()=>{
        console.log(`My name is ${this.name}`);
        
    }

}

class childClassName extends myParentClassName{

}

// Object creation with class -
let newObject = new myParentClassName('Maurya');
newObject.sayPersonName;      // return the function
newObject.sayPersonName();    // method accessing


