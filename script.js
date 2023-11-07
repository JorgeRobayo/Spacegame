//{{IDEA 1}}

//  CREATE A CLASS CALLED SHIPS WITH A SET CONSTRUCTOR (hull, firePwr, accuracy)
//  THEN CREATE A FACTORY OF SPACESHIPS AND CUSTOMIZE THE PARAMETERS
//  FOR ENEMIES AND USS SHIP

//  CREATE METHODS FOR EACH CLASS

//  CREATE A FACTORY TO CREATE ENEMIES AND USS SHIPS


//{{IDEA 2}}

//  CREATE A USS CLASS WITH FIXED PARAMETERS METHODS
//  CREATE A ENEMIES CLASS WITH PARAMETERS AND METHODS



//========CLASSES=======

//USS Assembly

// class UssAssembly {
//     constructor(){ 
//         this.hull = 20
//         this.firePwr = 5
//         this.accuracy = .7
//     }

//     attack(alien){
//         //if math.random is less than accuracy hit else miss
//         if (Math.random() < this.accuracy){
//             //alien hull =- this.firepwr
//             alien.hull -= this.firePwr
//             console.log(`you hit the alien`)
//             console.log(`now alien life is ${alien.hull}`)
//         }
//         else{
//             console.log(`You missed, try again`)
//         }
//     }

//     // damage(){
//     //     if (this.hull =- 'alien Pwr'){}
//     // }

// }


// //==tests==

// // const UssAssembly1 = new UssAssembly
// // UssAssembly1.attack()
// // console.log(UssAssembly1)

// //====ALIENS=======

// //make an array with the ships name inside the class
// //add properties randomly to each ship
// //for random properties use math.floor math.random set min and max

// class Alien {
//     // alienShips = ["alien1"]
//     hull = Math.floor(Math.random() * (6 - 3) + 3); 
//     firePwr = Math.floor(Math.random() * (4 - 2) + 2);
//     accuracy = (Math.random() * (.8 - .6) + .6)


// }


// //==tests==
// const alien11 = new Alien
// console.log(alien11)



// const UssAssembly1 = new UssAssembly
// UssAssembly1.attack(alien11)
// console.log(UssAssembly1)

// //======ACTIONS=====

// //if we press the attack button
// //and the acuracy of the alienship is grater than the accuracy of Uss
// //then console.log 'you got hit'
// //else if the opposite happens then print 'you hit the alien'

// //if any ship gets hit the hull--

// //if hull <= 0 then print 'you died'
// //else if alienship survives then attack ussShip
// //else give option to continue or to retieve


// //add event listeners
// console.log(alien11)


// const attacktest = document.querySelector('.attackBtn')
// attacktest.addEventListener('click', e =>{
//     UssAssembly1.attack(alien11)

// })

class Ships {
    constructor(name, hull, firePwr, accuracy) {
        this.name = name
        this.hull = hull
        this.firePwr = firePwr
        this.accuracy = accuracy
    }

    attack(alien) {
        //if math.random is less than accuracy hit else miss
        if (Math.random() < this.accuracy) {
            //alien hull =- this.firepwr
            alien.hull -= this.firePwr
            // console.log(`Human hit the alien`)
            // batleScreen.textContent = `Human hit the alien`

            screenBattle(`${this.name} hit the alien`)//print mensages

            // console.log(`now alien life is ${alien.hull}`)

            screenBattle(`now alien life is ${alien.hull}`)
            
        }
        else {
            // console.log(`You missed, try again`)
            screenBattle(`You missed, try again`)
        }

    }
}




class Aliens extends Ships {
    constructor(name, hull, firePwr, accuracy) {
        super(name,
            hull = Math.floor(Math.random() * 4) + 3,
            firePwr = Math.floor(Math.random() * 3) + 2,
            accuracy = (Math.floor(Math.random() * 3) + 6) / 10)
    }

    attack(human) {
        //if math.random is less than accuracy hit else miss
        if (Math.random() < this.accuracy) {
            //alien hull =- this.firepwr
            human.hull -= this.firePwr
            // console.log(`you hit the human`)

            screenBattle(`alien hit the human, now human life is ${human.hull}`) 

            // console.log(`now human life is ${human.hull}`)
            // batleScreen.textContent = `now human life is ${human.hull}`
        }
        else {
            // console.log(`Alien missed!`)
            screenBattle(`Alien missed!`)
        }

    }
}

//queries

const batleScreen = document.querySelector('.batleScreen')

function screenBattle(newtext) { 
    const text = document.createElement('p')
    text.textContent = newtext
    // batleScreen.textContent = newtext
    batleScreen.appendChild (text)
    
}



//=============={{DOESN'T WORK}}
// let battle = (human, enemy) => {
    //     while (human.hull > 0 && enemy.hull > 0){
        //         human.attack(enemy)
        //         console.log(`you attacked the enemy`)
        //     }
        //     if (human.hull > 0 && human.attack(enemy)){
//         enemy.attack(human)
//         console.log(`the enemy attacked you`)
//     }
//     else if (human.hull <= 0 && enemy.hull > 0){
//         console.log(`You loose`)
//     }
//     else{
//         console.log(`You win!`)
//     }
// }


//==================={{WORKS BUT ALL THE FIGHT HAPPENS AT ONCE, THERE ARE NOT TURNS}}
// let battle = (human, enemy) => {
//     let currentPlayer = human
//     let opponent = enemy
    
//     while (human.hull > 0 && enemy.hull > 0){
//         currentPlayer.attack(opponent)
//         console.log(`you attacked the enemy`)
        
//         if (currentPlayer === human){
//             currentPlayer = enemy
//             enemy = currentPlayer
//             console.log(`the enemy attacked you`)
//         }
//     }
    
//     if (human.hull > 0){
//         console.log(`You win!`)
//     }
//     else{
//         console.log(`You loose :'(`)
//     }
// }

//=======================
// function createAliens (){
    // const alienFleet = [];

    //   for (let i = 0; i < 6; i++) {
//     const alienShip = new Aliens(`Alien Ship ${i + 1}`);
//     alienFleet.push(alienShip);
//   }

// }
function alienFactory(name) {
    let alienFirePwr = Math.floor(Math.random() * 4) + 2;
    let alienHull = Math.floor(Math.random() * 6) + 3;
    let alienAccuracy= Math.random() * (0.8 - 0.6) + 0.6;
    alienAccuracy= alienAccuracy.toFixed(1);
    const newAlien = new Aliens(name, alienHull, alienFirePwr, alienAccuracy);
    return newAlien;
}

let alienFleet = [
    alienFactory('alien1'),
    alienFactory('alien2'),
    alienFactory('alien3'),
    alienFactory('alien4'),
    alienFactory('alien5'),
    alienFactory('alien6'),
];

let count = 0

let battle = (human, enemy) => {
    let currentPlayer = human
    let opponent = enemy
    let gameOver = false
    
    function nextTurn(){
        if (currentPlayer.hull <= 0 || opponent.hull <= 0){
          gameOver = true  
        }
        
    }

    while (human.hull > 0 && enemy.hull > 0 && !gameOver){
        currentPlayer.attack(opponent)
        
        if(opponent.hull <= 0){
            //  console.log(`${currentPlayer.name} won!`)
             screenBattle(`${currentPlayer.name} won!`)
            gameOver = true
            break
        }
        
        currentPlayer = opponent
        opponent = currentPlayer
        
        if (currentPlayer === human) {
            if(opponent.hull <= 0){
                // console.log(`${currentPlayer.name} won!`)
                screenBattle(`${currentPlayer.name} won!`)
                gameOver = true
                break
            }
        }
        if (!gameOver) {
            // console.log(`The battle continues`)
            screenBattle(`The battle continues`)
        }
    
    }
    count++
    nextTurn()
    if (count === 6){
    //    console.log(`battle is finished`)
       screenBattle(`The battle has finished, please restart!`)
       }
}
    
function retreat(){
    // console.log(`YOU ARE A LOOSER!!!!`)
    screenBattle(`YOU ARE A LOOSER!!!!`)
    location.reload()
}


const UssAssembly = new Ships('human1', 20, 5, 0.7)
  

const attacktest1 = document.querySelector('.attackBtn')
attacktest1.addEventListener('click', () =>{
   battle(UssAssembly, alienFleet[count])
   if (count === 6){
    attacktest1.setAttribute('disabled', 'true')
   }
//    console.log('clicked')
})


// const attacktest1 = document.querySelector('.attackBtn')
// attacktest1.addEventListener('click', () =>{
//    battle(UssAssembly, alien1)
// })

//==================


//   let battle = (hero, aliens) => {
//     let round = 1;
//     let gameOver = false;
//     let currentPlayer = hero;
//     let currentEnemy = null;
  
//     function nextTurn() {
//       if (hero.hull <= 0 || aliens.length === 0) {
//         gameOver = true;
//       }
//     }
  
//     const attackButton = document.querySelector('.attackBtn');
  
//     attackButton.addEventListener('click', () => {
//       if (!gameOver) {
//         console.log(`Round ${round}`);
  
//         if (currentPlayer === hero) {
//           if (aliens.length > 0) {
//             currentEnemy = aliens[0];
//             currentPlayer.attack(currentEnemy);
//             if (currentEnemy.hull <= 0) {
//               console.log(`${currentEnemy.name} is defeated.`);
//               aliens.shift();
//             }
//             currentPlayer = currentEnemy;
//             currentEnemy = hero;
//           }
//         } else {
//           if (hero.hull > 0) {
//             currentPlayer = hero;
//             currentEnemy = aliens[0];
//             currentEnemy.attack(currentPlayer);
//             if (currentPlayer.hull <= 0) {
//               console.log(`Game over! You have been defeated.`);
//               gameOver = true;
//             }
//           }
//         }
  
//         nextTurn();
//         round++;
//       }
//     });
//   };
  
//   const UssAssembly = new Ships('Hero Ship', 20, 5, 0.7);
//   const alienFleet = [];
  
//   for (let i = 0; i < 6; i++) {
//     const alienShip = new Aliens(`Alien Ship ${i + 1}`);
//     alienFleet.push(alienShip);
//   }
  

// const attacktest1 = document.querySelector('.attackBtn')
// attacktest1.addEventListener('click', () =>{
//    battle(UssAssembly, alienFleet)
// })

//==============================================================================
// I did this note as pseudocode : 
// 1- we creat ship class then an extends class for alienship . //Ussassembly 
// 2- game rounds :ussassembly attack first after each attack the alien attack back .
// 3- ussassembly wins if destroyed all alien ship / it loses if ussassembly hull reaches 0
// 4- we have to manage the game through game class and make an array for aliens
// 5- game functions: we do attack method on game class and check wins after each attack 
// We do while loop until the condition is met ( either all alien ship hull=0 or ussassemvly=0 

//========================================================================================

// class Game {
//     constructor() {
//         humanShips = [
//             new Ships ('human1', 20, 5, 0.7)
//         ]

//         alienShips = [
//             new Aliens ('alien1', 0, 0, 0),
//             // new Aliens ('alien2', 0, 0, 0),
//             // new Aliens ('alien3', 0, 0, 0),
//             // new Aliens ('alien4', 0, 0, 0),
//             // new Aliens ('alien5', 0, 0, 0),
//             // new Aliens ('alien6', 0, 0, 0)
//         ]
        
//         if (alienShips.hull === 0){
//             console.log(`The ${alienShips.name} is destroyed`)
//         }
//       }
// }




//=========BUTTON TESTS============
// const attacktest1 = document.querySelector('.attackBtn')
// attacktest1.addEventListener('click', e =>{
   
// })

// const attacktest2 = document.querySelector('.attackBtn2')
// attacktest2.addEventListener('click', e =>{
  

// })