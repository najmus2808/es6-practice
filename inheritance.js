class Parent{
    constructor(){
        this.fatherName = "Nazrul";
    }
}


class Child extends Parent{
    constructor(name){
        super();
        this.name = name;    
    }

    getFullName(){
        return this.name +" "+ this.fatherName;
    }
}

const baby = new Child("Sakib");
const baby2 = new Child("Rakib");
console.log(baby.getFullName());
console.log(baby2);