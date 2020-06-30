// 1. Create an app that loads the json file starwars_names.json using ajax and with 
// ul and li make a list on the page of all the names.
// (challange) Make it where you click on a name and it toggles the other details.

// 2. Create an app that loads movie data from the swapi site that will show the name
// and year of every movie in the database.
// https://swapi.dev/api/films/ (use this endpoint)
// (challange) Have a button by each title that when clicked will show the opening_crawl.
// (super challange) have the opening crawl in a small enough box that it has to scroll...
// and make it scroll automatically!


// new object 
const ajax = (url, callback) =>{
    const request = new XMLHttpRequest();
    request.onreadystatechange =() => {
    if(request.readyState === 4 && request.status === 200){
    callback(request.response)
    }
    };
    request.open("GET", url);
    request.send();
    }
    const getPeople = (page = 1) =>{
    ajax(`https://swapi.dev/api/people/?page=${page}`,
    response=>console.log(JSON.parse(response)))
    }
    getPeople()
    getPeople(3)
