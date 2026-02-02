export default class User{
    constructor(name, age, active = true){
        this.name = name;
        this.age = age;
        this.active = active;
        this.joined = new Date();
    }

    toggleStatus(){
        this.active = !this.active;
    }

    get statusText(){
        return this.active ? "Active" : "Inactive";
    }
}


