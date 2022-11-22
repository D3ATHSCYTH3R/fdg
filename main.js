confidence="";

status="";
objects=[];
video="";

function preload(){
    video=createVideo('video.mp4');
    video.hide();
}
function setup(){
    canvas=createCanvas(350,279);
    canvas.center();
    
    
}
function draw(){
    image(video, 0, 0, 350, 279);

    if(status != ""){
        c.detect(video, gotResults);
        for(i=0; i < objects.length; i++){
            document.getElementById("status").innerHTML="STATUS = DETECTED";
            document.getElementById("idk").innerHTML="Number of objects detected = "+objects.length;

            fill("red");
            confidence=floor(objects[i].confidence*100);
            label=objects[i].label;
            text(label + " " + confidence + "%",objects[i].x+15,objects[i].y+15);
            noFill();
            stroke("green");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);

        }
    }
}
function b(){
    c=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Object : Detecting";
}
function modelLoaded(){
    console.log("model is loaded");
    status = true;
    video.loop();
    video.volume(0);
    video.speed(1);
}
function gotResults(error, results){
    if(error){
        console.error(error);
    }
    console.log(results);
    objects=results;
}