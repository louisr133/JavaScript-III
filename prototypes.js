function GameObject(attributes){
	this.createdAt = attributes.createdAt;
	this.name = attributes.name;
	this.dimensions = attributes.dimensions;
	this.x = attributes.x;
	this.y = attributes.y;
	this.show = attributes.show;
	this.alive = attributes.alive;
	
}

GameObject.prototype.destroy = function() {
	if(this.healthPoints <= 0){
		this.show = false;
	}
}

GameObject.prototype.display = function() {
	if(this.show == true){
		
		
		//circle(this.x + (this.dimensions.width)/2,this.y  - 25 ,this.dimensions.width * .9);
		noStroke();
		if(this.healthPoints <= 1){
			fill(color(255,0,0));
			circle(this.x + (this.dimensions.width)/2,this.y  - 25 ,this.dimensions.width * .9);
			rect(this.x,this.y,this.dimensions.width,this.healthPoints * 10);
		} else {
			circle(this.x + (this.dimensions.width)/2,this.y  - 25 ,this.dimensions.width * .9);
			rect(this.x,this.y,this.dimensions.width,this.healthPoints * 10);
		}
		
		
		
		fill(color(0));
		circle(this.x + 10,this.y-20,10);
		circle(this.x + 40,this.y-20,10);
	} 
}

GameObject.prototype.gravity = function() {
	if(this.y < (400 - this.dimensions.height) ){
		this.y += 2;
	} else {
		
	}
}



CharacterStats.prototype = Object.create(GameObject.prototype);


function CharacterStats(status) {
	GameObject.call(this, status);
	
	this.healthPoints = status.healthPoints;
}

CharacterStats.prototype.takeDamage = function() {
	if(this.healthPoints > 0){
		this.healthPoints -= 1
	}
}


Humanoid.prototype = Object.create(CharacterStats.prototype);

function Humanoid(character) {
	
	
	CharacterStats.call(this,character);
	
	this.team = character.team;
	this.weapons = character.weapons;
	this.language = character.language;
	
}

Humanoid.prototype.greet = function() {
	return `${this.name} offers a greeting in ${this.language}`
}




// Test you work by un-commenting these 3 objects and the list of console logs below:


  var mage = new Humanoid({
    createdAt: new Date(),
    show: true,
    x: 400,
    y: 100,
    dimensions: {
      length: 7,
      width: 50,
      height: 100,
    },
    healthPoints: 10,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  var swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 40,
      height: 150,
    },
    show: true,
    x: 240,
    y: 100,
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  var archer = new Humanoid({
    createdAt: new Date(),
    show: true,
    dimensions: {
      length: 1,
      width: 55,
      height: 120,
    },
    x: 70,
    y: 300,
    healthPoints: 12,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });
  

  