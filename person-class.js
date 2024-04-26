class person {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  updateAge(newAge) {
    this.age = newAge;
  }

  updateEmail(newEmail) {
    this.email = newEmail;
  }

  getPersonData() {
    return `Name : ${this.name}, Age : ${this.age}, Email : ${this.email}. `;
  }
}

let person1 = new person("Siddiq", 23, "siddiq1@gmail.com");

console.log("Before update : ", person1.getPersonData());

person1.updateAge(24);

person1.updateEmail("siddiq123@gmail.com");

console.log("After update : ", person1.getPersonData());


// O/P:

// Before update :  Name : Siddiq, Age : 23, Email : siddiq1@gmail.com. 
// VM378:29 After update :  Name : Siddiq, Age : 24, Email : siddiq123@gmail.com. 