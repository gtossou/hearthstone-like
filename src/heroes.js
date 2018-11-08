var heroesState={

	create: function(){
		//game.add.image(0, 0, 'backg');
		backBtn = game.add.button(5, 5, 'back_btn', this.GoBack);
		choiceText = game.add.bitmapText(150, 50, 'desyrel', 'Welcome warrior, Choose your Hero', 35);

		//var heroCardStyle = { fill: "#00ff00" };

		var initWidth = 60;
		var initHeight = 150;

      	var heroesFiles=["obatala.jpg","obba.jpg","olokun.jpg","orunmila.jpg","oshun.jpg",
      	"oxosi.jpg","oya.jpg","ozain.jpg","shango.jpg","yemoja.jpg"];	
		var heroesLength = heroesFiles.length;

		//revoir ces deux fonctions
		for (var i = 0; i < heroesLength/2; i++) {
			//longueur de chaque élément dans heroes
			var ln=heroesFiles[i].length;
			heroCard=game.add.button(initWidth, initHeight, heroesFiles[i].substring(0,ln-4),this.ChooseHero);
    		heroCard.scale.setTo(0.5,0.5);
    			initWidth=initWidth+150;
        }; 

        var initWidth = 60;
		var initHeight = 350;

        for (var i = heroesLength/2; i < heroesLength; i++) {
			//longueur de chaque élément dans heroes
			var ln=heroesFiles[i].length;
			heroCard=game.add.button(initWidth, initHeight, heroesFiles[i].substring(0,ln-4),this.ChooseHero);
    		heroCard.scale.setTo(0.5,0.5);

    			initWidth=initWidth+150;
    		
        }; 

        },
    GoBack: function(){
		game.state.start("menu");        
	},

    ChooseHero: function(){
		//game.state.start("menu");     
		alert(heroCard.key);
	}
	
};