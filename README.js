class LibraryItem{
    constructor(title,id,isAvailable){
    this.title = title;
    this.id = id;
    this.isAvailable = isAvailable;
    }

    checkOut(){
        if (this.isAvailable){
            this.isAvailable = false;
            console.log(`${this.title} has been checked out to you.`);
        } else {
            console.log(`${this.title} is unavailable for check out.`);
        }
    }

    returnItem(){
        this.isAvailable = true;
        console.log(`${this.title} with ID: ${this.id} has been returned.`);
    }
}

class Book extends LibraryItem {
    constructor(title,id,isAvailable,author,genre){
        super(title,id,isAvailable);
        this.author = author;
        this.genre = genre;
    }
        displayBook(){
            console.log(`${this.title} is a ${this.genre} book written by ${this.author} that is ${this.isAvailable ? "available" : "not available"} with ID: ${this.id}.`);
            }
}


class DVD extends LibraryItem{
    constructor(title,id,isAvailable,director,duration){
        super(title,id,isAvailable);
        this.director = director;
        this.duration = duration;
    }
        displayDVD(){
            console.log(`${this.title} ID: ${this.id} was directed by ${this.director}. The duration of the movie is ${this.duration} minutes. It is ${this.isAvailable ? "available" : "not available"}.`);
        }
}

class Magazine extends LibraryItem{
    constructor(title,id,isAvailable,issueNumber,publisher){
        super(title,id,isAvailable);
        this.issueNumber = issueNumber;
        this.publisher = publisher;
    }
        displayMagazine(){
            console.log(`${this.title} | Issue Number: ${this.issueNumber} | ID: ${this.id} was published by ${this.publisher} is ${this.isAvailable ? "available" : "not available"}.`)
        }
}

const book1 = new Book("Lord of the Rings",123,true,"Tolkien","Fantasy");
const book2 = new Book("Dune",444,false,"Frank Herbert","Fantasy");

const dvd1 = new DVD("The Twilight Saga",777,false,"Stephenie Meyer",120);
const dvd2 = new DVD("Pulp Fiction",789,true,"Tarantino",180);

const mag1 = new Magazine("Times Magazine",555,true,184,"Time Inc");
const mag2 = new Magazine("Vogue",543,false,546,"Conde Nast");


book1.displayBook();
book1.checkOut();
book1.returnItem();

console.log("\n");
book2.displayBook();
book2.checkOut();
book2.returnItem();

console.log("\n");
dvd1.displayDVD();
dvd1.checkOut();
dvd1.returnItem();

console.log("\n");
dvd2.displayDVD();
dvd2.checkOut();
dvd2.returnItem();

console.log("\n");
mag1.displayMagazine();
mag1.checkOut();
mag1.returnItem();

console.log("\n");
mag2.displayMagazine();
mag2.checkOut();
mag2.returnItem();