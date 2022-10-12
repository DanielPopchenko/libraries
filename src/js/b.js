import './c';

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  showName() {
    console.log(this.name);
  }

  showAge() {
    console.log(this.age);
  }
}

const user = new User('Mango', 23);
user.showAge();
user.showName();

const secondUser = new User('Ajax', 33);
console.log(secondUser);
