img = "";
status ="";

function preload()
{
    img = loadImage('air.jpg');
}


function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();

    objectDetector  = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting objects";
}


function modelLoaded()
{
    console.log("Cocossd is loaded");
    status = true;
    objectDetector.detect(img, gotResult);
}

function draw()
{
    image(img, 0,0,640, 420);
    fill('#FF0000');
    text("Aeroplane", 45, 75);

    noFill();

    stroke("#FF0000");

    rect(30, 60, 525, 200);
}





function gotResult(error, results)
{
    if(error) {
        console.log(error);
    }

    console.log(results);
}