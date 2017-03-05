$( document ).ready(()=>{
	console.log('hi')
	var game = new Phaser.Game(1024, 698, Phaser.AUTO, $('#canvasLocation'), { preload: preload, create: create, update: update })

	// built in phaser function which allows us to load in assets we will use  

	// declare global variables
	var goblin, cursors; 
	function preload(){
		
		//let's bring in a background
		game.load.image('background', 'background-image/2dbackground.jpg')

		game.load.spritesheet('goblin', 'Spritesheets/Characters/Goblin/Small/goblin_spritesheet_running_v2.png', 116, 113, 20);
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
		goblin.animations.add('right', [0, 1, 2, 3, 4, 5, 6, 7, 8 , 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], 20, true);
		// goblin.animations.add('chill' [])
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
	        goblin.body.velocity.x = -150;

	        goblin.animations.play('left');
	    }
	    else if (cursors.right.isDown)
	    {
	        //  Move to the right
	        goblin.body.velocity.x = 100;

	        goblin.animations.play('right');
	    }

	    else if (cursors.up.isDown)
	    {
	        //  Move to the right
	        goblin.body.velocity.y = -100;

	        goblin.animations.play('right');
	    }
	    else
	    {
	        //  Stand still
	        // goblin.animations.stop();

	        // goblin.frame = 2;


	    }

	    //  Allow the goblin to jump if they are touching the ground.
	    // if (cursors.up.isDown && goblin.body.touching.down && hitPlatform)
	    // {
	    //     goblin.body.velocity.y = -450;
	    // }
	}


})

