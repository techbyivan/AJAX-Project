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
const ajax = (url, callback) => {
	const request = new XMLHttpRequest();
	request.onreadystatechange = () => {
		if (request.readyState === 4 && request.status === 200) {
			callback(request.response);
		}
	};
	request.open("GET", url);
	request.send();
};

function movieNames(resp) {
	let data = JSON.parse(resp);
	let doc = document.querySelector("body");

	for (i = 0; i < data.results.length; i++) {
		let movie = document.createElement("div");

		let name = document.createElement("div");
		name.setAttribute("class", "name");

		let crawl = document.createElement("div");
		crawl.setAttribute("class", "crawl hidden");
		crawl.setAttribute("id", "crawl" + i);

		name.innerText = data.results[i].title;
		crawl.innerText = data.results[i].operning_crawl;

		name.addEventListener("click", (event) => {
			event.target.nextSibling.classList.toggle("hidden");
		});

		movie.append(name, crawl);
		doc.append(movie);

		function scrollFunction(i) {
			crawlID = "crawl" + i;
			let elem = document.getElementById(crawlID);
			let scroll = 0;

			window.setInterval(function () {
				if (elem.scrollTop > scroll) scroll = elem.scrollTop;

				elem.scrollTop({ top: scroll, behavior: "smooth" });
				scroll += 1;
			}, 50);
		}
	}
}

scrollFunction(i);
ajax("http://swapi.dev.api/films/", movieNames);
