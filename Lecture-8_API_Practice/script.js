/*
Fetch API(Application Programming Interface):-
    Provides an interface for feching(send/receive) resources.
    Uses request/Response Objects
    Syntax:-
        let promise = fetch(url,[options]);
            if Options : Not mentioned : request is known as 'Get' request : Used to bring/fetch data only
            

    The response we get is in different formats like AJAX(Asynchronous JS and XML) or Json(JavaScript Object Notation)/AJAJ(Asynchronous Javascript and JSON)

Steps: 1. Fetch the async promise from API using fetch(url,[options]) method
       2. Convert this response from JSON to JS Object format using json() method, which returns async promise(i/p = json, o/p = js object)
       3. Then use data from it.


Request & Response :- 
    HTTP(Hyper Text Transfer Protocol) Verbs/Methods:- 
        Get    : only to retrive some data
        Post   : To send some data 
        Delete : To delete specified data
        Patch  : To update within data 

    Response Status Code:-
        Informational responses (100 – 199)
        Successful responses    (200 – 299)
        Redirection messages    (300 – 399)
        Client error responses  (400 – 499)
        Server error responses  (500 – 599)

    Important Ones:
        400 : Wrong/Bad request (any thing wrong in link)
        404 : Page Not found

*/




const para = document.querySelector("#pokemonSkills");
const div1 = document.querySelector('.div1');


let newElement = document.createElement('h3');
let newbtn = document.createElement('button');
newbtn.setAttribute('type', 'button');
newbtn.setAttribute('class', 'btn');
newbtn.innerText = 'Get Pokemon Skill';

para.prepend(newElement);
div1.prepend(newbtn);


const url = "https://pokeapi.co/api/v2/move";     // Pokemon API

const getPokemonMovesRequest = 
async () =>{
    console.log('fetching the response from API ... '); 
    let promisePokemonResponse = await fetch(url);
    
    console.log(promisePokemonResponse);         // In JSON Format
    console.log(promisePokemonResponse.status);  // 200 for successful request
    
    console.log('Getting the JSON into JS Object format ...');
    let jsObject = await promisePokemonResponse.json(); // From JSON to JS Object
    
    console.log(jsObject);
    console.log(jsObject.results, 'and', jsObject.results.length);     // Array of Responses and its size
    console.log(jsObject.results[0]);     // Accessing Responses
    
    
    newElement.innerText = "Your Pokemon Skill is: " + (jsObject.results[0].name).toUpperCase();

    };
    
// getPokemonMovesRequest();
// newbtn.addEventListener('click', getPokemonMovesRequest);      // Adding a button to get the API data 


let count =0;

// Creating Function to add element
const elemAdd = () =>{
    return new Promise(
        async (resolve, reject) =>{
            if(count === 20) {
            console.log('No More Skill available');
            reject('No More Skill Available');
            }else{
                let promisePokemonResponse = await fetch(url);      // Fetching API
                let jsObject = await promisePokemonResponse.json(); // From JSON to JS Object
                
                let newElement = document.createElement('h3');
                newElement.innerText = "Your Pokemon Skill is: " + (jsObject.results[count].name).toUpperCase();
                para.prepend(newElement);
                count++;
                resolve('Skill Added');
            }
        }
    );
};

// Adding Element function to final call 
const addElement = async () =>{
    elemAdd();
};
// newbtn.addEventListener('click', addElement);      // Adding a button to get the API data each time when clicked


// Another Function 
const addElement1 = async () =>{
    if(count === 20) {
        console.log('No More Skill available');
    }else{
        let promisePokemonResponse = await fetch(url);
        let jsObject = await promisePokemonResponse.json(); // From JSON to JS Object
        
        let newElement = document.createElement('h3');
        newElement.innerText = "Your Pokemon Skill is: " + (jsObject.results[count].name).toUpperCase();
        para.prepend(newElement);
        count++;
    }
};


// newbtn.addEventListener('click', addElement1);      // Adding a button to get the API data each time when clicked



