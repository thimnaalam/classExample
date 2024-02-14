class Person{
    static count = 0
    // you need a constructor to assign a a default value
    constructor(){
        this.firstName = 'Please provide your first name'
        this.lastName = 'Please provide your last name'
        this.age = 0
        // static value   /   to not access it via object but via class    /create an object to access class
        Person.count += 1
    }
    // update
    set FirstName(value){
        this.firstName = value
    }
    // retrieve
    get FirstName(){
        return this.firstName
    }
    set Age (value){
        this.age = value
    }
    get Age (){
        return this.age 
    }
    // display method
    display(){
        console.log(`
        ==========Person ID: ${this.count}==============
        First name:${this.firstName}
        Last name:${this.lastName}
        Age ${this.Age}
        ================================================
        
        `)
    }
}
export{
    Person
}