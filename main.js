//https://teachablemachine.withgoogle.com/models/Gaoj25vMb/

function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Gaoj25vMb/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}