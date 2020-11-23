export var Gender;
(function (Gender) {
    Gender["Female"] = "f";
    Gender["Male"] = "m";
})(Gender || (Gender = {}));
export default class Person {
    constructor(name, gender, birth) {
        this.name = name;
        this.gender = gender;
        this.birth = birth;
    }
}
export const person_test = new Person('paulo', Gender.Male, new Date("2003-3-24"));
console.log(person_test);
