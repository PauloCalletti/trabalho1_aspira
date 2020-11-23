import Person from './Person.js';
import { Gender } from './Person.js';
import Document from './Document.js';
export default class Periodical extends Document {
    constructor(issn, volume, issue, title, subtitle, publishedAt, author) {
        super(title, subtitle, publishedAt, author);
        this.issn = issn;
        this.volume = volume;
        this.issue = issue;
    }
}
const periodical1 = new Periodical(24680, 6, 10, 'TypeScript(dnv2)', 'Secrets(dnv2)', new Date(2020 - 8 - 11), new Person('Luiz', Gender.Male, new Date("1997-7-1")));
console.log(periodical1);
