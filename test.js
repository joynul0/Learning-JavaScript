
// Object 

    const Joy = {
        name: "Joy",
        age: 25,
        greet: function() {
        console.log("Hello, my name is Joynul Abedin ");
        console.log("I am " + this.age + " years old");
            }   
        }

    Joy.greet(); 
    console.log(Joy.name);
    console.log(Joy["age"]);