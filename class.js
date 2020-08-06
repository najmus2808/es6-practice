class Student{
    constructor(sId,sName){
        // this.id = 1;
        // this.name = 'Sakib';

        this.id = sId;
        this.name = sName;
        this.schoool = "Hamidpur jigatala";
    }
}

const student1 = new Student(12,'Sakib');
const student2 = new Student(22,"jubair");
const student3 = new Student(5,"Bappi");
console.log(student1,student2,student3);