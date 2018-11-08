var loadState = {
	
	preload: function(){
		//add loading label
		//affecter le loading a un id css
		var loadingLabel = game.add.text(80,150,"LOADING",{font:"30px Courier",fill:"#ffffff"});
		//loading the assets
		game.load.image('backg', 'assets/backg.jpg');
        game.load.image('play_btn', 'assets/play_button.png');
        game.load.image('plateau', 'assets/plateau.jpg');
        game.load.image('back_btn', 'assets/back_btn.png');
        game.load.bitmapFont('desyrel', 'assets/fonts/desyrel.png', 'assets/fonts/desyrel.xml');
        game.load.spritesheet('dragon_sprite', 'assets/spritesheets/dragon_sprites.png', 700, 500);

        //tableau des fichiers image
        var heroesFiles=["obatala.jpg","obba.jpg","olokun.jpg","orunmila.jpg","oshun.jpg",
      	"oxosi.jpg","oya.jpg","ozain.jpg","shango.jpg","yemoja.jpg"];

        //longueur du tableau heroes
        var heroesLength = heroesFiles.length;

        //Boucle
		for (var i = 0; i < heroesLength; i++) {
			//longueur de chaque élément dans heroes
			var ln=heroesFiles[i].length;
			//utilisation de substring avec indice de début et fin pour recuperer la partie avant jpg
    		game.load.image(heroesFiles[i].substring(0,ln-4),"assets/heroes/"+heroesFiles[i]);
        }; 

	},

	create: function(){
		game.state.start("menu");
	}
};