var punch;

function setup() {
	createCanvas(600, 400);
	soundFormats('mp3', 'ogg');
	punch = loadSound('sounds/PUNCH.mp3');

}

function draw(){
	
	background(51);
	

	textSize(16);

	fill(color(255,50,220));
	if(archer.show == true){
		text(`^ Archer HP: ${archer.healthPoints}`, 30, 30);
	} else {
		text(`Archer HP: DEAD`, 30, 30);
	}
	archer.display();
	
	fill(color(253,200,20));
	
	if(swordsman.show == true){
		text(`< Swordsman HP: ${swordsman.healthPoints}`, 200, 30);
	} else {
		text(`Swordsman HP: DEAD`, 200, 30);
	}

	swordsman.display();
	
	fill(color(23,230,20));
	

	if(mage.show == true){
		text(`> Mage HP: ${mage.healthPoints}`, 430, 30);
	} else {
		text(`Mage HP: DEAD`, 430, 30);
	}
	
	mage.display();
	
	archer.gravity();
	swordsman.gravity();
	mage.gravity();
	
	archer.destroy();
	swordsman.destroy();
	mage.destroy();
	
	if(mage.show == false && archer.show == false && swordsman.show == false){
		background(255,0,0);

		text(`THEY DEAD`, 250, 200);
	} 
	
	
}

function keyPressed(){

	if(archer.show == true && keyCode == UP_ARROW){
		archer.takeDamage();
		punch.play();
	}	 

	if(swordsman.show == true && keyCode == LEFT_ARROW){
		swordsman.takeDamage();
		punch.play();
	}	 


	if(mage.show == true && keyCode == RIGHT_ARROW){
		mage.takeDamage();
		punch.play();
	}  

}
