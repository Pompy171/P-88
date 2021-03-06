var canvas = new fabric.Canvas("my_canvas");

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player_object = "";
var block_image_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function (img) {
        player_object = img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);

        player_object.set({ top: player_y, left: player_x });
        canvas.add(player_object);
    });
}

function new_image(get_img) {
    fabric.Image.fromURL(get_img, function (img) {
        block_image_object = img;
        block_image_object.scaleToHeight(30);
        block_image_object.scaleToWidth(30);

        block_image_object.set({ top: player_y, left: player_x });
        canvas.add(block_image_object);

    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    var keypressed = e.keyCode;
    console.log(keypressed);

    if (e.shiftKey == true && keypressed == 80) {
        console.log("Shift & P pressed together");

        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;

        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }

    if (e.shiftKey == true && keypressed == 77) {
        console.log("Shift & m pressed together");

        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;

        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }


    if (keypressed == 70) {

        new_image('ironman_face.png');
        console.log("f");

    }

    if (keypressed == 66) {

        new_image('spiderman_body.png');
        console.log("b");

    }

    if (keypressed == 76) {

        new_image('hulk_legs.png');
        console.log("l");

    }

    if (keypressed == 82) {

        new_image('thor_right_hand.png');
        console.log("r");

    }

    if (keypressed == 72) {

        new_image('captain_america_left_hand.png');
        console.log("h");

    }

    if (keypressed == 38) {
        up();
        console.log("up is pressed");
    }


    if (keypressed == 40) {

        down();
        console.log("down is pressed");

    }

    if (keypressed == 37) {

        left();
        console.log("left is pressed");

    }

    if (keypressed == 39) {

        right();
        console.log("right is pressed");

    }

}

function up(){
    if (player_y>0){
        player_y=player_y-block_image_height;
        console.log("block image height="+block_image_height);
        console.log("up arrow is pressed x= "+player_x+" y= "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down(){
    if (player_y<500){
        player_y=player_y+block_image_height;
        console.log("block image height="+block_image_height);
        console.log("up arrow is pressed x= "+player_x+" y= "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left(){
    if (player_x>0){
        player_x=player_x-block_image_width;
        console.log("block image width="+block_image_width);
        console.log("up arrow is pressed x= "+player_x+" y= "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right(){
    if (player_x<850){
        player_x=player_x+block_image_width;
        console.log("block image width="+block_image_width);
        console.log("up arrow is pressed x= "+player_x+" y= "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
