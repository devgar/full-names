const rand = require('./rand.js')
const MALE_NAMES = require('../data/names.male.es.json')
const FEMALE_NAMES = require('../data/names.female.es.json')
const SURNAMES = require('../data/surnames.es.json')

class Person {
  constructor ({name, surname, male}) {
    this.name =  typeof name == 'string' ? name.split(' ') : name
    this.surname =  typeof surname == 'string' ? [surname]: surname
    this.ismale = !!male
  }
  get firstname () {return this.name[0]}
  get lastname () {return this.surname.join(' ')}
  get fullname () { return `${this.name.join(' ')} ${this.surname.join(' ')}`}
  get male () { return this.ismale }
  get female () { return !this.ismale }
  
  toJSON () {
    return {firstname: this.firstname, lastname: this.lastname}
  }

  static random() {
    let isMale = rand()
    return new Person({
      name: rand(isMale ? MALE_NAMES : FEMALE_NAMES),
      surname: [rand(SURNAMES), rand(SURNAMES)],
      male: isMale
    })
  }
}

module.exports = Person

if (require.main === module) {
  let male = true
  let person = new Person({name:'Edgar', surname:'Albalate Ibañez', male})
  console.log(person)
  console.log(person.fullname)
  console.log(Person.random().toJSON())
}
