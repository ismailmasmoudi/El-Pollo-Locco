let canvas;
let ctx;
let keyboard = new Keyboard();



function init() {
    canvas = document.getElementById("canvas");
    world = new World(canvas , keyboard);

    ctx = canvas.getContext('2d');
    console.log('My Chracter is ', world.character);
}

window.addEventListener('keydown', (e) => {
    if(e.keyCode == 39){
        keyboard.RIGHT=true;
    }
    if(e.keyCode == 37){
        keyboard.LEFT=true;
    }
    if(e.keyCode == 32){
        keyboard.SPACE=true;
    }
    if(e.keyCode == 38){
        keyboard.UP=true;
    }
    if(e.keyCode == 40){
        keyboard.DOWN=true;
    }
    
    console.log(e);
});

window.addEventListener('keyup', (e) => {
    if(e.keyCode == 39){
        keyboard.RIGHT=false;
    }
    if(e.keyCode == 37){
        keyboard.LEFT=false;
    }
    if(e.keyCode == 32){
        keyboard.SPACE=false;
    }
    if(e.keyCode == 38){
        keyboard.UP=false;
    }
    if(e.keyCode == 40){
        keyboard.DOWN=false;
    }

});