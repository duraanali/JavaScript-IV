// CODE here for your Lambda Classes

class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
    }
}

//---------------------INSTRUCTOR EXTENDS---------------------------------

class Instructor extends Person {
    constructor(attributes) {
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }

    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }

}


const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
})

//--------------------STUDENT EXTENDS--------------------------------

class Student extends Person {
    constructor(attributes) {
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
    }
    listsSubjects() {
        console.log(`Today we are learning about ${subject}`);
    }

    PRAssignment () {
        console.log(`${student.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge () {
        console.log(`${student.name} has begun sprint challenge on ${this.attributes.subject}`);
    }

}


const duraan = new Student({
    name: 'Duraan',
    age: 32,
    location: 'Minnesota',
    previousBackground: 'Business Owner',
    className: 'Web 21',
    favSubjects: 'Web Dev',
})

//----------------------------------------------------------

console.log(fred);
fred.demo('web21');
console.log(duraan);
duraan.speak();