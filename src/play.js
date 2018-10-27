var playState = {

    init: function() {
    //Called as soon as we enter this state
    },

    preload: function() {
    //Assets to be loaded before create() is called
    },

    create: function() {
        game.add.image(0, 0, 'plateau');
    },

    update: function() {
    //Game logic, collision, movement, etc...
    }
};