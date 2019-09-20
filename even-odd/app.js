
function evenOdd () {
    for (i=4; i < 100; i++){
        if (i % 2 ===0){
            return true
        } else if (i% 2 != 0){
            return false
        }
    }
}


console.log(evenOdd(3))

const oddEven = () => {
    for(var i = 990; i < 1000; i++){
        // console.log(i)
    }
}

oddEven()

let favoriteThings = ["Raindrops on roses", "Whiskers on kittens", "Bright copper kettles", "Warm woollen mittens"]

const favoriteFunction = () => {
    for (let i = 0; i < favoriteThings.length; i++){
        console.log(favoriteThings[i])
    }
}

favoriteFunction()

var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]


const officeLoop = () => {
    var count = 0
    for (let i = 0; i < officeItems.length; i++ ){
        if (officeItems[i] === "computer"){
            count++
        }
    }
    return count
}

console.log(officeLoop())

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 

  const seeMadMax = () => {
      for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
          if (this.age < 18){
              return this.name + 'is not old enough'
          } else if (this.age >= 18){
              return this.name + 'is old enough'
          }
      }
  }

  console.log(seeMadMax(peopleWhoWantToSeeMadMaxFuryRoad[0]))