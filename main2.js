 img="";
 status="";
 objects=[];

function preload(){
    img=loadImage("Bottle of water..jpg");    
    }
    
    function setup(){
        canvas=createCanvas(600,500);
        canvas.center();
        objectDetector=ml5.objectDetector("cocossd",modelLoaded);
        document.getElementById("Status").innerHTML="Status: Detecting Objects";
    }
  
    function modelLoaded(){
        console.log("m0dElL0AdEd");
        status=true;
    objectDetector.detect(img,gotResult);
    }
    
    function gotResult(error,results){
        if(error){
            console.log(error);
        }
        else{
            console.log(results);
            objects=results;
        }
    }
       

    function draw(){
        image(img,0,0,600,500);
        if(status=="true"){
  
            document.getElementById("Status").innerHTML="Status: Objects Detected";
          for(i=0; i<objects.length; i++){
              fill("#000000");
              percentage=floor(objects[i].confidence*100);
              text(objects[i].label+" "+percentage+"%",objects[i].x+25,objects[i].y+25);
              noFill();
              stroke("#000000");
              rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
          }
    }
}