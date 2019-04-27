// CODE here for your Lambda Classes


class person{
    constructor(props){
       
        this.gender = props.gender
        this.name = props.name
        this.age = props.age
        this.height = props.height
        this.location =props.location
    }

    speak(props){
        console.log(`hello my name is ${this.name} I am from ${this.location}`)
    }
}

class instructor extends person {
    constructor(props){
        super(props)
        this.specialty = props.specialty;
        this.favLanguage = props.favLanguage;
        this.catchPhrase = props.catchPhrase;
    }
    demo(subject){
        console.log(`today we are  learning about ${subject}`);
    }
    grade(subject,student){
        console.log(`${student.name} earned a perfect score on ${subject} `);
    }
}



class student extends person {
    constructor(props){
        super(props)
        this.previousBackground = props.previousBackground;
        this.className = props.className;
        this.favSubjects =  props.favSubjects;  


    }
    listsSubjects(){
       this.favSubjects.forEach(function(el){
         console.log(el)
      })
    }
    PRAssignment(subject){
        return `${this.name} submitted a pr for ${subject} `
    }

    sprintChallenge(subject){
        return `${this.name} has begun a sprint challenge on ${subject}`
    }

    }


    class projectManager extends instructor {
        constructor(props){
            super(props)
            this.gradClassName = props.gradClassName
            this.favInstructor = props.favInstructor

        }

        standUp(slackChannel){
            return `${this.name}: @${slackChannel} it's time for standup  `
        }
        debug(studentName, subject){
            return `${this.name } debugs ${studentName.name}'s code on ${subject} `
        }
    }
    


const fred = new instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  

 const student1 = new student({
    name: 'nathan',
    location: 'Bedrock',
    age: 37,
    favSubjects: ['science', 'math', 'cs']
 })

 const pm = new projectManager({
    name: 'nathan',
    location: 'Bedrock',
    age: 37,
    favSubjects: ['science', 'math', 'cs'],
    gradClassName: 'web pt 6'


   
   
 })

 console.log(pm.debug(student1,'science'))





console.log()

console.log()

console.log()

console.log()

console.log()

console.log()

console.log()

console.log()

console.log()

 

