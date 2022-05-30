//Object Oriented Programming

let person = {
  Name: "Gokul",
  age: 25,
  interest: ["studies", "Games"],
  address: {
    place: "Thoppappatty",
    State: "Tamilnadu",
  },
  student: function () {
    let msg = `My Name is ${this.Name} , i love ${this.interest}`;
    console.log(msg);
  },
};
person.student();
