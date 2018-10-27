var loadState = {
	
	preload: function(){
		//add loading label
		//affecter le loading a un id css
		var loadingLabel = game.add.text(80,150,"LOADING",{font:"30px Courier",fill:"#ffffff"});
		//loading the assets
		game.load.image('backg', 'assets/backg.jpg');
        game.load.image('play_btn', 'assets/play_button.png');
        game.load.image('plateau', 'assets/plateau.jpg');
	},

	create: function(){
		game.state.start("menu");
	}
};