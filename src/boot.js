var bootState = {
	create: function(){
		//Launch the ARCADE physics system (simple relative to others) 
		game.physics.startSystem(Phaser.Physics.ARCADE);

		//calling the load state
		game.state.start("load");

	}
};