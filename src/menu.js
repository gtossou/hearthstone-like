var menuState={

	create: function(){
		game.add.image(0, 0, 'backg');
        var startBtn=game.add.button(340, 300, 'play_btn',this.ClickMe);
        
        //startBtn.on("pointerdown", function (ev) {
        //    //game.state.start("play");
        },
        ClickMe: function(){
			game.state.start("play");        
		}
	
};