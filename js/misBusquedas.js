
console.log(buscar());

function buscar (){

const url = 'https://edamam-recipe-search.p.rapidapi.com/search?q=chicken';

console.log(url);

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c42ba26eb2msh377d94bd726419ep18c4e7jsn96e0420e95eb',
		'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

}