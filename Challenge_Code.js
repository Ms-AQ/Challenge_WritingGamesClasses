let quantityHeroes = prompt("Tell the number of Heroes you want to check their attack: ")

for (let i = 0; i < quantityHeroes; i++) {
    let name = prompt("Say the name of your Hero: ");
    let age = prompt("Say the age of your Hero: ");
    let type = prompt("Choose the class of your Hero:\n" + "1. Mage\n" + "2. Warrior\n" + "3. Monk\n" + "4. Ninka");

    heroClass(type)

    let heroSpefied = new heroClass(name, age, type);
    let heroAttack = heroSpefied.attack();

    console.log(heroAttack);
};

function heroClass(type) {
    if (type === 1) {type = "Mage";}
    else if (type === 2) {type = "Warrior";}
    else if (type === 3) {type = "Monk";}
    else if (type === 4) {type = "Ninka";}
    
    return type
}

class heroProperties {
    constructor (name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    attack () {
        if (this.type === "mage") {
            console.log("The " + this.type + " " + this.name + " attcked using magic.");
        }
        else if (this.type === "warrior") {
            console.log("The " + this.type + " " + this.name + " attcked using the sword.");
        }
        else if (this.type === "monk") {
            console.log("The " + this.type + " " + this.name + " attcked using martial arts.");
        }
        else if (this.type === "ninja") {
            console.log("The " + this.type + " " + this.name + " attcked using the shuriken.");
        }
    }   
};
