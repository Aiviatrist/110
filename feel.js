Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:100
});
camera=document.getElementById("camera");

Webcam.attach(camera);

function something(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='helen' src='"+data_uri+"'>";
    });
}
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/BAnlpepwF/model.json",modelloaded);
}

function modelloaded(){
    console.log("model loaded");
}