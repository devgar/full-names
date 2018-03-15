const Person = require('./lib/person.js')

function generatePeopleJSONArray ( n = 16, options = {}, sortOptions = {}) {
  let array = []
  for (let i = 0; i < n; i++) {
    array.push( Person.random(options).toJSON())
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
  console.log( generatePeopleJSONArray() )
}
