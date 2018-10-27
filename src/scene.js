var config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 200 }
            }
        },
        scene: {
            preload: preload,
            create: create
        }
    };
    var game = new Phaser.Game(config);
    function preload ()
    {
        this.load.image('sky', 'assets/backg.jpg');
        this.load.image('logo', 'assets/Phaser-2D.png');
        this.load.image('red', 'assets/red.png');
        this.load.image('play_btn', 'assets/play_button.png');
    }
    function create ()
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
    }