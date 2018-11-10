var config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600
        //canvasStyle: "gameDiv"
        //scene: {
        //    preload: preload,
        //    create: create
        //}
    };
var game = new Phaser.Game(config);

game.global = {
    initWidthAi : 60,
    initHeightAi : 170,
    ai_health : 25,
    hero_health : 25
};

game.state.add("boot",bootState);
game.state.add("load",loadState);
game.state.add("menu",menuState);
game.state.add("heroes",heroesState);
game.state.add("play",playState);

game.state.start("boot");

    /*function preload ()
    {
        game.load.image('backg', 'assets/backg.jpg');
        this.load.image('logo', 'assets/Phaser-2D.png');
        this.load.image('red', 'assets/red.png');
        this.load.image('play_btn', 'assets/play_button.png');
    }*/

    /*function create ()
    {
        this.add.image(400, 300, 'sky');
        var startBtn=this.add.image(400, 300, 'play_btn').setInteractive();
        startBtn.on("pointerdown", function (ev) {
            alert ("LET'S PLAY");
        });
        //this.startBtn.on('pointerdown', alert("Let's PLAY"));
        //var particles = this.add.particles('red');
        //var emitter = particles.createEmitter({
        //    speed: 100,
        //    scale: { start: 1, end: 0 },
        //    blendMode: 'ADD'
        //});
        //var logo = this.physics.add.image(400, 100, 'play');
        //logo.setVelocity(100, 200);
        //logo.setBounce(1, 1);
        //logo.setCollideWorldBounds(true);
        //emitter.startFollow(logo);
    }*/