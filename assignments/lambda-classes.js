// CODE here for your Lambda Classes

class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

//---------------------------STUDENT EXTEND --------------------------

class Student extends Person {
    constructor(attributes) {
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
    }
    listsSubjects() {
        var outSubjects = this.favSubjects.toString();
        return outSubjects;
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }

}


const duraan = new Student({
    name: 'Duraan',
    age: 32,
    location: 'Minnesota',
    previousBackground: 'Business Owner',
    className: 'Web 21',
    favSubjects: ['Javascript', 'Python'],
})

console.log(duraan);
console.log(duraan.listsSubjects());
console.log(duraan.PRAssignment('javascript'));
console.log(duraan.sprintChallenge('javascript'));

//---------------------INSTRUCTOR EXTENDS---------------------------------

class Instructor extends Person {
    constructor(attributes) {
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }

    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }

}


const dan = new Instructor({
    name: 'Dan',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
})

console.log(dan);
console.log(dan.demo('javascript'));
console.log(dan.grade(duraan, 'javascript'));

//---------------------PM EXTENDS---------------------------------

class ProjectManagers extends Instructor {
    constructor(attributes) {
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}`;
    }

    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }

}


const josh = new ProjectManagers({
    name: 'josh',
    location: 'Kansas',
    age: 37,
    gradClassName: 'Web21',
    favInstructor: 'Dan',
    catchPhrase: `Cool Bro`,
    specialty: 'Backend',
    favLanguage: 'Python',

})


console.log(josh);
console.log(josh.standUp('web21_smoot'));
console.log(josh.debugsCode(duraan, 'Javascript'));
    
//--------------------STUDENT EXTENDS--------------------------------





