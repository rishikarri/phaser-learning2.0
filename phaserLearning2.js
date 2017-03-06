$( document ).ready(()=>{
	console.log('hi')
	var game = new Phaser.Game(1024, 698, Phaser.AUTO, $('#canvasLocation'), { preload: preload, create: create, update: update })

	// built in phaser function which allows us to load in assets we will use  

	// declare global variables
	var goblin, cursors; 
	function preload(){
		
		//let's bring in a background
		game.load.image('background', 'background-image/2dbackground.jpg')

		game.load.spritesheet('goblin', 'Spritesheets/Characters/Goblin/Small/goblin_run_chill_attack_spritesheet.png', 116, 123, 60);
		
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
		goblin.body.bounce.y = .5;
		goblin.body.collideWorldBounds = true;


		// let's add some animations so our goblin  looks fly when he is running around 

		// 0 - 19 is right, 20 - 39 is left, 40 - 59 is chill, 60 - 79 is attack
		goblin.animations.add('right', [0, 1, 2, 3, 4, 5, 6, 7, 8 , 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], 30, true);

		// goblin.animations.add('chill', [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43], 20, true)
		// goblin.animations.add('attack', [44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59], 10, true)
    	// player.animations.add('right', [5, 6, 7, 8], 10, true);
	 	// let's pull in cursors so that we can actually move the goblin around 
	 	cursors = game.input.keyboard.createCursorKeys();


	}

	// built in phaser function which allows us to update items which in turn will demonstrate changing gameplay
	function update(){
		//  Reset the players velocity (movement)
    goblin.body.velocity.x = 0;

	    if (cursors.left.isDown)
	    {
	        //  Move to the left
	        goblin.body.velocity.x = 0;

	        goblin.animations.play('chill');
	    }
	    else if (cursors.right.isDown)
	    {
	        //  Move to the right
	        goblin.body.velocity.x = 200;

	        goblin.animations.play('right');
	    }

	    else if (cursors.up.isDown)
	    {
	        //  Move to the right
	        goblin.body.velocity.y = -100;

	        goblin.animations.play('right');
	    }
	    else if (cursors.down.isDown)
	    {
	        //  Move to the right
	        goblin.body.velocity.y = 0;

	        goblin.animations.play('attack');
	    }
	    else
	    {
	        //  Stand still
	        goblin.animations.stop();

	        goblin.frame = 2;


	    }

	    //  Allow the goblin to jump if they are touching the ground.
	    // if (cursors.up.isDown && goblin.body.touching.down && hitPlatform)
	    // {
	    //     goblin.body.velocity.y = -450;
	    // }
	}


})

