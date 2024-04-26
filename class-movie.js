// Class Movie

// a) Write a constructor for the class Movie, which takes a String 
// representing the title of the movie, a String representing the studio, 
// and a String representing the rating as its arguments, and sets the
//  respective class properties to these values.

class amovie{
    constructor(title,studio,rating)
    {
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
}

const myaMovie=new amovie("Iron Man","Marvel studio","Pg-13");

console.log(`Title : ${myaMovie.title}, Studio : ${myaMovie.studio}, Rating : ${myaMovie.rating}.`);

//o/p:
//Title : Iron Man, Studio : Marvel studio, Rating : Pg-13.

// b) The constructor for the class Movie will set the class property rating to 
//"PG" as default when no rating is provided.

class bmovie{
    constructor(title,studio,rating="PG")
    {
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
}

const mybMovie=new bmovie("Iron Man","Marvel studio");

console.log(`Title : ${mybMovie.title}, Studio : ${mybMovie.studio}, Rating : ${mybMovie.rating}`);

//o/p:

//Title : Iron Man, Studio : Marvel studio, Rating : PG

// c)Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the 
// input array is full of Movie instances. The returned array need not be full.

class cMovie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    
    static getPG(movies) {
        return movies.filter(movie => movie.rating === "PG");
    }
}

const movies = [
    new cMovie("Inception", "Warner Bros.", "PG-13"),
    new cMovie("Toy Story", "Pixar", "PG"),
    new cMovie("The Dark Knight", "Warner Bros.", "PG-13"),
    new cMovie("Finding Nemo", "Pixar", "G"),
    new cMovie("Frozen", "Disney", "PG")
];

const pgMovies = cMovie.getPG(movies);
// Output will be an array of Movie instances with ratings of "PG"
console.log(pgMovies); 

// o/p:
// (2) [cMovie, cMovie]
 
// cMovie {title: 'Toy Story', studio: 'Pixar', rating: 'PG'}

// cMovie {title: 'Frozen', studio: 'Disney', rating: 'PG'}
// length


// d) Write a piece of code that creates an instance of the class Movie with the
//  title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

class dMovie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}

// Creating an instance of the Movie class
const casinoRoyale = new dMovie("Casino Royale", "Eon Productions", "PG-13");

console.log(casinoRoyale);

 // Output will be an object with title: "Casino Royale", studio: "Eon Productions", rating: "PG-13"

