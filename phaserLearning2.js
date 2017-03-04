$( document ).ready(()=>{
	console.log('hi')
	var game = new Phaser.Game(1024, 698, Phaser.AUTO, $('#canvasLocation'), { preload: preload, create: create, update: update })

	// built in phaser function which allows us to load in assets we will use  

	// declare global variables
	var goblin; 
	function preload(){
		
		//let's bring in a background
		game.load.image('background', 'background-image/2dbackground.jpg')

		game.load.spritesheet('goblin', 'Spritesheets/Characters/Goblin/Small/goblin_running_spritesheet.png', 116, 113);
	}

	// built in phaser function which allows us to create items 
	function create(){
		// bring in physics 
		game.physics.startSystem(Phaser.Physics.ARCADE);

		game.add.sprite(0,0, 'background')
		goblin = game.add.sprite(32, 538, 'goblin')
		// let's enable physics for the goblin
		game.physics.arcade.enable(goblin)
		goblin.body.gravity.y = 400;
		goblin.body.bounce.y = .2;
		goblin.body.collideWorldBounds = true;

	}

	// built in phaser function which allows us to update items which in turn will demonstrate changing gameplay
	function update(){

	}


})

