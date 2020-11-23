import Person from './Person.js'
import {person_test} from './Person.js'
// import person1 from './Person.js'
// import birth from './Person.js'


//-- Preferi importar person_test para reutilizar o código usado em Person. Não sei se é a mesma pessoa


export default class Document {
    title: string
    subtitle: string
    publishedAt: Date | number
    author: Person
    
    constructor (title: string, subtitle: string, publishedAt: Date | number, author: Person) {

        this.title = title
        this.subtitle = subtitle
        this.publishedAt = publishedAt
        this.author = author
    }
}

export const doc1 = new Document('Typescript', 'Secrets', new Date("2010-10-10"), person_test)

console.log(doc1)

