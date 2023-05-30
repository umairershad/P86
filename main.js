var canvas = new fabric.Canvas('myCanvas');
var x = document.getElementById("myAudio");
var birthdayimage = "";
function new_image() {
    fabric.Image.fromURL("Birthdayimage.jpg", function (img) {
        birthdayimage = img;
        birthdayimage.scaleToWidth(700);
        birthdayimage.scaleToHeight(510);
        birthdayimage.set({
            top: 0,
            left: 0
        });
        canvas.add(birthdayimage);
    });

}

function playSound() {
x.play();
}
