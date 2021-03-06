
import Person from './Person.js'
// import {Gender} from './Person.js'
import {person_test} from './Person.js'
import Document from './Document.js'

export default class Book extends Document {
    isbn: number 
    edition: number 
    volume: number

    constructor (isbn: number, edition: number, volume:number, title: string, subtitle: string, publishedAt: Date, author: Person) {

        super (title, subtitle, publishedAt, author)

        this.isbn = isbn 
        this.edition = edition
        this.volume = volume 
    }
    
}
const book1 = new Book (13579, 3, 5, 'TypeScript(dnv)', 'Secrets(dnv)', new Date(2020-8-11), person_test)

console.log(book1)
