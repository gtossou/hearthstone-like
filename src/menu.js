var menuState={

	create: function(){
		game.add.image(0, 0, 'backg');

		//var sprite = game.add.sprite(0, 0, 'dragon_sprite');
    	//sprite.animations.add('walk');
    	//sprite.animations.play('walk', 10, true);

        var startBtn=game.add.button(game.world.centerX-35, game.world.centerY, 'play_btn', this.ClickMe);
        
        //startBtn.on("pointerdown", function (ev) {
        //    //game.state.start("play");
        },
    ClickMe: function(){
		game.state.start("heroes");        
	}
	
};