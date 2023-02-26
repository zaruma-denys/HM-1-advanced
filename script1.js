let person = new Object ({
    firstName: 'ivan',
    secondName: 'Ivanov',
})

person.showData(console.log(person))


let newPerson = new Object({
  ...person,
  firstName:'Petro',
  secondName:'Petriv',
})

person.showData = function (){
  console.log(this.firstName)
  console.log(this.secondName)
  }
  
  newPerson.showData = person.showData