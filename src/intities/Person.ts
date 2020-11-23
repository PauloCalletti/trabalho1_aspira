
export enum Gender {
    Female = 'f', 
    Male = 'm',
}

export default class Person {
    name: string
    gender: Gender
    birth: Date

    constructor (name: string, gender: Gender, birth: Date) {
        this.name = name
        this.gender = gender
        this.birth = birth 
    }

} 

export const person_test = new Person('paulo', Gender.Male, new Date("2003-3-24"))

console.log(person_test)


