$( document ).ready(()=>{
	console.log('hi')

	// built in phaser function which allows us to load in assets we will use  
	function preload(){
		game.load.spritesheet('goblin', 'Spritesheets/Characters/Goblin/Small/goblin_running_spritesheet.png', 116, 113);
	}

	// built in phaser function which allows us to create items 
	function create(){

	}

	// built in phaser function which allows us to update items which in turn will demonstrate changing gameplay
	function update(){

	}
})

