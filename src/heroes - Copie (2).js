var heroesState={

	create: function(){
		//game.add.image(0, 0, 'board');
		backBtn = game.add.button(5, 5, 'back_btn', this.GoBack);
		choiceText = game.add.bitmapText(150, 50, 'desyrel', 'Welcome warrior, Choose your Hero', 35);

		//var heroCardStyle = { fill: "#00ff00" };

		var initWidth = 60;
		var initHeight = 150;

      	var heroesFiles=["obatala.jpg","obba.jpg","olokun.jpg","orunmila.jpg","oshun.jpg",
      	"oxosi.jpg","oya.jpg","ozain.jpg","shango.jpg","yemoja.jpg"];	
		var heroesLength = heroesFiles.length;
		var heroCard;
		//revoir ces deux fonctions
		for (var i = 0; i < heroesLength; i++) {
			//longueur de chaque élément dans heroes
			if(i==5){
				initWidth = 60;
				initHeight = 350;
				}
			if(i>5){
				initHeight = 350;
				}
			var ln=heroesFiles[i].length;
			heroCard=game.add.button(initWidth, initHeight, heroesFiles[i].substring(0,ln-4),this.ChooseHero);
    		heroCard.scale.setTo(0.5,0.5);
    		heroCard.alpha=1;
    		initWidth=initWidth+150;

        }; 
        //heroCard.onInputOver.add(over, this); 

        },
    GoBack: function(){
		game.state.start("menu");        
	},

	over: function(){
		heroCard.tint=0xffffff;        
	},

	update: function(){
		heroCard.tint=0xffffff;        
	},

    ChooseHero: function(){
		//game.state.start("menu");
		chosenHero = this.key; 
		alert(this.key);
		game.state.start("play",true,false,chosenHero);
	}	
};

