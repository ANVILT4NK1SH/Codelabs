class Movie {
	#rating;
	constructor(title, year) {
		(this.title = title), (this.year = year);
	}

	setRating(r) {
		this.#rating = r;
	}
	getRating() {
		return this.#rating;
	}

	getDetails() {
    if(!this.title){
      return "Warning: Missing title for this movie!"
    }
    else if(!this.year){
      return "Warning: Missing year for this movie!"
    }else return `${this.title} (${this.year})`;
	}
}

const matrix = new Movie("The Matrix", 1999);

console.log(matrix.getDetails());

const lionKing = new Movie("The Lion King", 1994);

const frozen = new Movie("Frozen");

console.log(lionKing.getDetails(), frozen.getDetails());

class Series extends Movie {
	constructor(title, year, episodes) {
		super(title, year), (this.episodes = episodes);
	}

	getSeriesDetails() {
		return `${this.title} (${this.year}) - ${this.episodes} episodes`;
	}
}

const stangerThings = new Series("Stranger Things", 2016, 25);

console.log(stangerThings.getSeriesDetails());

lionKing.setRating(4.5);

console.log(lionKing.getRating());

const movieArray = [
	new Movie("Spirited Away", "2001"),
	new Movie("UHF", "1989"),
	new Movie("Who Framed Roger Rabbit", "1988"),
];

function getAllDetails() {
	movieArray.forEach((m) => {
		console.log(m.getDetails());
	});
}

getAllDetails();

class Documentary extends Movie {
	constructor(title, year, narrator) {
		super(title, year), (this.narrator = narrator);
	}

	getDetails() {
		return `${this.title} (${this.year}) - Narrated by ${this.narrator}`;
	}
}

const planetEarth = new Documentary("Planet Earth", 2006, "David Attenborough");

console.log(planetEarth.getDetails());

const newMovie = new Movie("Irobot");

console.log(newMovie.getDetails())
