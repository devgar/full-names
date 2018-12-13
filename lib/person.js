const rand = require('./rand.js')
const MALE_NAMES = require('../data/names.male.es.json')
const FEMALE_NAMES = require('../data/names.female.es.json')
const SURNAMES = require('../data/surnames.es.json')

class Person {
  constructor ({name, surname, male}) {
    this.name =  typeof name == 'string' ? name.split(' ') : name
    this.surname =  typeof surname == 'string' ? surname.split(' ') : surname
    this.ismale = !!male
  }
  get firstname () {return this.name[0]}
  get lastname () {return this.surname.join(' ')}
  get fullname () { return `${this.name.join(' ')} ${this.surname.join(' ')}`}
  get male () { return this.ismale }
  get female () { return !this.ismale }

  toJSON (ops) {
    ops = {firstname: true, lastname: true, male: false, female: false, ...ops}
    let obj = {}
    if (ops.firstname) obj['firstname'] = this.firstname
    if (ops.lastname) obj['lastname'] = this.lastname
    if (ops.male) obj['male'] = this.male
    if (ops.female) obj['female'] = this.female
    return obj
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
