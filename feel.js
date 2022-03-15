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

function modelloaded(){
    console.log("model loaded");
}
function idek(){
    img=document.getElementById("helen");
    classifier.classify(img,gotresult);
}
function gotresult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("emoji_name").innerHTML=results[0].label;
        if(results[0].label=="ok"){
            document.getElementById("emoji").innerHTML="&#128076;";
        }
        if(results[0].label=="peace"){
            document.getElementById("emoji").innerHTML="&#9996;";
        }
        if(results[0].label=="bye"){
            document.getElementById("emoji").innerHTML="&#128400;";
        }
    }
}
function speak(){
    var synth =window.speechSynthesis;
    sd1="First prediction is"+p1;
    sd2="Second prediction is"+p2;
    //there is a problem... i don't know what to put in the variable//
}