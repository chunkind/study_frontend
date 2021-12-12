//Optional Chaining
const bob = {
    name: 'Julia',
    age: 20,
};

const anna = {
    name: 'Julia',
    age: 20,
    job: {
        title: 'Software Engineer',
    },
};

//bad code
function displayJobTitle(person){
    if(person.job && person.job.title){
        console.log(person.job.title);
    }
}

//good code
function displayJobTitle2(person){
    if(person.job?.title){ //job이 비어있으면 false가 됨
        console.log(person.job.title);
    }
}

function displayJobTitle3(person){
    const title = person.job?.title ?? 'No Job Yet';
    console.log(title);
}