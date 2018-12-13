const Person = require('./lib/person.js')

// function generatePeopleJSONArray ( n = 16, options = {}, sortOptions = {}) {
function generatePeopleJSONArray (ops= {}) {
  ops = {n: 16, generator:(p)=> (p.toJSON()), ...ops}
  let array = []
  for (let i = 0; i < ops.n; i++) {
    array.push( ops.generator(Person.random(), i))
  }
  return array.sort( (a, b) => {
    if (a.lastname > b.lastname) return true
    if (a.lastname < b.lastname) return false
    if (a.firstname > b.firstname) return true
    return false
  })
}

module.exports.generatePeopleJSONArray = generatePeopleJSONArray

if (require.main == module) {
  console.log( generatePeopleJSONArray({generator:(p) => ({name: p.fullname})}) )
}
