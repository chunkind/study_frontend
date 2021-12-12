//Object Destructuring
const person = {
    name: 'Julia',
    age: 20,
    phone: '0107777777'
};

//bad code
function displayPerson(person){
    displayAvatar(person.name);
    displayName(person.name);
    displayProfile(person.name, person.age);
}

//good code
function displayPerson2(person){
    const {name, age } = person;
    displayAvatar(name);
    displayName(name);
    displayProfile(name, age);
}