// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')

function printObject (parentElement, object) {
    const stringifiedObject = JSON.stringify(object)
    parentElement.append(stringifiedObject)
}

function printKataHeading (parentElement, kataNumber) {
    const kata1Heading = document.createElement('h1')
    kata1Heading.append("KATA" + kataNumber)
    parentElement.append(kata1Heading)
}



printKataHeading(main, 1)
const greenEyes = users
.filter(user => user.eyeColor === "green")
.map(user => user.name)

printObject(main, greenEyes)


// function printKataHeading (parentElement, kataNumber) {
//     const kate1Heading = document.createElement("h1")
//     kate1Heading.append("KATA" + kataNumber)
//     parentElement.append(kate1Heading)
// }

//kata 1 use the .filter method
printKataHeading(main, 2)
const isActive = users
.filter(users => users.isActive === true)
.map(users => users.name)
printObject(main, isActive)

//kata 2 use the .map method
const email = users
.map(users => users.email)

console.log(JSON.stringify(email))
const k2 = document.createElement("h1")
k2.append('.map')
main.append(k2)
main.append(JSON.stringify(email))

//kate 3 use the .some method
printKataHeading(main, 3)
const company = users.some(user => user.company === 'OVATION')

printObject(main, company)

//kata 4 use the .find method 
 const age = users.find(user => user.age === 39 )


console.log(JSON.stringify(age))
const k4 = document.createElement("h1")
k4.append('.find')
main.append(k4)
main.append(JSON.stringify(age))


//kata 5 use the e .filter() and .find() methods


const worth = users
.filter(user => user.isActive === true)
.find(user => user.age === 39)
console.log(JSON.stringify(worth))
const k5 = document.createElement("h1")
k5.append('.filter/find')
main.append(k5)
main.append(JSON.stringify(worth))


//kata 6 Use the .filter() and .map() methods

let balances = users.filter(users => users.company === 'ZENCO')
 .map(users => users.balance)

//.filter(users => users.balance  )


const k6 = document.createElement("h1")
k6.append('.filter/.map')
main.append(k6)
main.append(JSON.stringify(balances))



//kata 7 Use the .filter() method with .includes() and the .map() method


let tag = users
.filter (users => users.tags.includes ('fugiat'))
.map (users => users.age)
let k7 = document.createElement ('h1')
k7.append ('filter-include-map')
main.append (k7)
main.append (JSON.stringify(tag))
