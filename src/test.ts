import Person from './intities/Person.js'
import {Gender} from './intities/Person.js'
import Document from './intities/Document.js'
import Book from './intities/Book.js'

const person1 = new Person('Lucas', Gender.Male, new Date("2002-6-4")) 
const person2 = new Person('Maria', Gender.Female, new Date("1997-11-27")) 
const person3 = new Person('Luana', Gender.Female, new Date("1810-12-19")) 

let peoples = [person1, person2, person3]
console.log(peoples)

const document1 = new Document('title1', 'subtitle1', new Date("1710-11-28"), person1)
const document2 = new Document('title1', 'subtitle1', new Date("1945-6-8"), person2)
const document3 = new Document('title1', 'subtitle1', new Date("2001-1-2"), person3)

//  Decidi optar por receber person1, 2 e 3 APENAS para reutilizar o código ao invés de fazer um new Person()

let documents = [document1, document2, document3]
console.log(documents)

const book1 = new Book(48752, 7, 4, 'Sweet', 'Emotion', new Date(1120-9-30), person1)
const book2 = new Book(94204, 3, 6, 'Nero', 'Forte', new Date(1620-7-10), person2)
const book3 = new Book(18435, 1, 9, 'Enter', 'Sandman', new Date(1090-4-18), person3)

let books = [book1, book2, book3]
console.log(books)