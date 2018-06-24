// STRINGIFY EXAMPLE: console.log(`${JSON.stringify(this)} words`);
///////////////////////////////////////
console.log("hello javascript");


class AlienShip {
	constructor() {
	    this.hull = Math.floor(Math.random() * (6 - 3) + 3);
	    this.firePower = Math.floor(Math.random() * (4 - 2) + 2);
	  	this.accuracy = Math.random() * (.8 - .6) + .6;
	}
};

// LOOP  TO CREATE AN ARRAY OF NEW OBJECTS
// THIS IS BASICALLY MAGIC
///////////////////////////////////////////////
//             CREATE OUR ALIEN SHIPS       //
//                  (this is magic)         //
//////////////////////////////////////////////
let AlienEnemies = [];

for(let i = 0; i < 6; i++) {
  livingAlienEnemies = new AlienShip
  AlienEnemies.push(livingAlienEnemies);
}
///////////////////////////////////////

 const playerShip = {
	hull: 20,
	firePower: 5,
	accuracy: .7,
};

///////////////////////////////////////

game = {
	AlienEnemies,
	deadAlienShips: [],
	userIput: "",
	alienHitOrMiss() {
		if (Math.random() < this.AlienEnemies[0].accuracy) {
			playerShip.hull -= this.AlienEnemies[0].firePower;
      			console.log(`Alien Ship hit the USS Assembly for ${this.AlienEnemies[0].firePower}`);

		} else {
			console.log("LUCKY DAY! The aliens MISSED the USS Assembly");
		}
	},
	ussAssemblyHitOrMiss() {
		if (Math.random() < playerShip.accuracy) {
			this.AlienEnemies[0].hull-= playerShip.firePower;
			console.log(`You hit the alien ship for ${playerShip.firePower}`);

				if (this.AlienEnemies[0].hull <= 0) {
							console.log(`YOU KILLED ONE SHIP! HAVE A DRINK`);
				}
		} else {
			console.log("Miss, the USS Assembly missed the target! :( )");
		}
	},
	continueGameOrRetreat() {
	      userInput = prompt(`The USS Assembly has destroyed an alienship... do you want to keep playing or retreat (end the game)? if you misspell retreat you'll fight another round :)`);
				return userInput;
	},
  gameEnd() {
    console.log('the game is over there are no more moves to be made');
  },

	nextRound() {
		if (userInput === "retreat" || null) {
      console.log(`Game over..the USS ASSEMBLY has retreated!`);

		} else if (this.AlienEnemies.length == null) {
      console.log(`There are no more alien ships to destroy! The USS Assembly wins!`);
      this.gameEnd();

		} else if (playerShip.hull <= 0) {
      console.log(`Game over... the USS ASSEMBLY has broken their hull ${playerShip.hull}`)
      this.gameEnd();
    } else {

      // the magic of keeping the array of enemy ships in order of game play
			this.deadAlienShips.push(this.AlienEnemies[0]);
			this.AlienEnemies.splice(0,1);


			this.combat();
		}

	},
	combat() {
    console.log(`BATTLE STARTING`);
		console.log(`There are  # ${JSON.stringify(game.deadAlienShips.length)} dead alien ships.`);
		console.log(`There are  # ${JSON.stringify(game.AlienEnemies.length)} live alien ships.`);
		console.log(`The USS ASSEMBLY has ${playerShip.hull} hitpoints.`);


// check to see if we should end the game at the BEGINNING of the combat
		if (this.AlienEnemies.length <= 0) {
			this.gameEnd();
			return false;
		}

// loop that will run while there are enemy ships AND player ships with hulls greater than 0
		while (this.AlienEnemies[0].hull > 0 && playerShip.hull > 0) {

			this.ussAssemblyHitOrMiss();

			if ( this.AlienEnemies[0].hull <= 0) {

      console.log(`Do you want to bail ? Type 'retreat'`);

			 this.continueGameOrRetreat();
			}
			this.alienHitOrMiss();
			console.log(`The hull of the USS Assembly is at ${playerShip.hull}`);

			}
			this.nextRound();
		},
  }

// call it!
game.combat();
