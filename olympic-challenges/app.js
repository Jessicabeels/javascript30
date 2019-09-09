let hat = {
    color: "Black",
    price: 30,
    size: 'small', 
    isAccessory: true,
    isMesh: true,
}

let waterBottle = {
    color: "Teal",
    price: 32,
    size: 32,
    drink: function() {
        console.log("I am a " + this.color + "waterbottle and I cost " + this.prize + "I am " + this.size + "OZ and you are drinking from me!" );
    }
}


waterBottle.drink()

let charger = { 
    color: "white",
    price: 57,
    charge: function() {
        console.log("I'm charging! ")
    }
}

charger.charge()

let greaties1 = () => {
    if (5 > 3){
        return 'is greater than'
    } 
}

console.log(greaties1())

let prelims2 = () => {
    if ("cat".length  === 3 ){
        return 'is the length'
    } else {
        return 'is not'
    }
}

console.log(prelims2())


let prelims3 = () => {
    if ("cat" != "dog"){
        return 'not the same'
    }
}

console.log(prelims3())

var person = {
    name: "Bobby",
    age: 19
}

let ageLimit = () => {
    if (person.age < 18){
        return "Too Young"
    } else {
        return 'Old Enough'
    }
}

console.log(person.name + " is " + person.age + " and therefore is " + ageLimit() + " to go to the movies")

let bName = () => {
    if(person.name[0] === "B"){
        return true
    } else {
        return false
    }
}

console.log(bName())

let comboFunction = () => {
    if (person.name[0] === "B" && person.age >= 18){
        return true
    } else {
        return false
    }
}

console.log(comboFunction())

////////////Silver/////////////

const silver1 = () => {
    if ("1" === 1){
        return "strict"
    } else if ("1" == 1){
        return "loose"
    } else {
        return "not equal at all"
    }
}

console.log(silver1())

const gold1 = () => {
    let str = "dog"
    if (typeof str === 'string'){
        return true
    } else {
        return false
    }
}

console.log(gold1())

const gold2 = () => {
    let bol = false
    if (typeof bol === 'boolean'){
        return true
    } else {
        return false
    }
}

console.log(gold2())

const gold3 = () => {
    if ( "z" > 12){
        return "s is > than 12"
    } else {
        return "s is < than 12"
    }
}

console.log(gold3())

const extraGold = (  ) => {
    let numVal =  2 % 0 ? 'Yes':"no"
    return numVal
}


console.log(extraGold())


