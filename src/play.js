var playState = {

    init: function(chosenHero) {
    //Called as soon as we enter this state
    this.chosenHero=chosenHero;
    },

    preload: function() {
    //Assets to be loaded before create() is called
    },

    create: function() {

        var ai_health_text =game.add.text(0, 0, this.game.global.ai_health, {font: "45px Arial", fill: "#FF0000"});
        var hero_health_text =game.add.text(0, 0, this.game.global.hero_health, {font: "45px Arial", fill: "#FF0000"});

        game.add.image(0,0,'board');
        var tour = game.add.text(760, 0, "ddddddddddddd", {font: "130px Arial", fill: "#FF0000"});
        tour.width=30;
        tour.height=30;
        var ordi = game.add.sprite(game.world.centerX-50,10,'gru');
        ordi.width=100;
        ordi.height=150;
        ordi.addChild(ai_health_text);

        var hero = game.add.sprite(game.world.centerX-50,440,chosenHero);
        hero.width=100;
        hero.height=150;
        hero.addChild(hero_health_text);

        var initWidth = 60;
        var initHeight = 295;
        var crea;
        var atq;
        //revoir ces deux fonctions
        for (var i = 1; i <= 5; i++) {
            //longueur de chaque élément dans heroes

            num_carte=Math.floor(Math.random() * 20)+1
            //var ln=heroesFiles[i].length;
            carte=game.add.button(initWidth, initHeight, num_carte,this.attaquer,this);
            carte.scale.setTo(0.5,0.5);
            carte.width=80;
            carte.height=130;
            carte.alpha=1;
            attaque_p=Math.floor(Math.random() * 10)+1
            attack =game.add.text(0, 0, attaque_p, {font: "130px Arial", fill: "#FF0000"});
            carte.addChild(attack);
            this.attaque_p=attaque_p;
            carte.attaque=this.attaque_p;

            //initWidth=initWidth+150;
            
        }

        looping=game.time.events.loop(Phaser.Timer.SECOND * 4, this.aiAttack, this) ;
        var turns = 0;
    },

    attaquer: function() {
    //Game logic, collision, movement, etc...
        this.game.global.ai_health=this.game.global.ai_health<=0?0:this.game.global.ai_health-this.attaque_p;
        var ordi = game.add.sprite(game.world.centerX-50,10,'gru');
        ordi.width=100;
        ordi.height=150;
        
        ai_health_text =game.add.text(0, 0, this.game.global.ai_health, {font: "45px Arial", fill: "#FF0000"});
        ordi.addChild(ai_health_text);
        
        if (this.game.global.ai_health<=0){
            alert("YOU WIN"); 
        }
    },
    hoho: function () {
        // body...
        alert("ddd");
    },

    aiAttack: function() {
        
        num_carte=Math.floor(Math.random() * 20)+1
            //var ln=heroesFiles[i].length;
        aicrea=game.add.button(this.game.global.initWidthAi, this.game.global.initHeightAi, num_carte);
        aicrea.scale.setTo(0.5,0.5);
        aicrea.width=80;
        aicrea.height=130;
        aicrea.alpha=1;
        attaque_pai=Math.floor(Math.random() * 10)+1
        attackai =game.add.text(0, 0, attaque_pai, {font: "130px Arial", fill: "#FF0000"});
        aicrea.addChild(attackai);
        this.game.global.initWidthAi=this.game.global.initWidthAi+150;
        //turns=turns+1;
        //hero_health_text.setText(this.game.global.hero_health-3); 
        var hero = game.add.sprite(game.world.centerX-50,440,chosenHero);
        hero.width=100;
        hero.height=150;
        this.game.global.hero_health=this.game.global.hero_health<=0?0:this.game.global.hero_health-attaque_pai;
        hero_health_text =game.add.text(0, 0, this.game.global.hero_health, {font: "45px Arial", fill: "#FF0000"});
        hero.addChild(hero_health_text);

        
        if (this.game.global.hero_health<=0){
            alert("YOU LOSE"); 
        }
        //hero.addChild(hero_health_text);


    }
};