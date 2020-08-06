const person ={name:'Sakib', age:22, job:'webDev', salary:80000, phone:'01705052808',friends:['Fakhrul','Fahim','Rakib','Sunny','Jahid']};

const age1 = person.age;
console.log(age1);
const {age} = person;
console.log(age);

const{name,job,salary} = person;
console.log(name,job,salary);


const myFriends = ['Fakhrul','Fahim','Rakib','Sunny','Jahid'];
const[anyName,anyName2, ...others] = myFriends;
console.log(anyName,anyName2,others);