function startClassification() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/mJjBiIMjX/model.json", modelReady);
}

function modelReady() {
    classifier.classify(getResults);
}

function getResults(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255 + 1);
        random_number_g = Math.floor(Math.random() * 255 + 1);
        random_number_b = Math.floor(Math.random() * 255 + 1);

        document.getElementById("soundIdentified").innerHTML = results[0].label;
        document.getElementById("span_accuracy").innerHTML = (results[0].confidence * 100).toFixed(2) + "%";

        document.getElementById("soundIdentified").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
        document.getElementById("span_accuracy").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";

        if (results[0].label == "Bark") {
            document.getElementById("img_dog").src = "dog_gif.gif";
            document.getElementById("img_cat").src = "cat_img.jpg";
            document.getElementById("img_cow").src = "cow_img.webp";
            document.getElementById("img_lion").src = "lion_img.jpg";
        } else if (results[0].label == "Meow") {
            document.getElementById("img_dog").src = "dog_img.png";
            document.getElementById("img_cat").src = "cat_gif.gif";
            document.getElementById("img_cow").src = "cow_img.webp";
            document.getElementById("img_lion").src = "lion_img.jpg";
        } else if (results[0].label == "Moo") {
            document.getElementById("img_dog").src = "dog_img.png";
            document.getElementById("img_cat").src = "cat_img.jpg";
            document.getElementById("img_cow").src = "cow_gif.gif";
            document.getElementById("img_lion").src = "lion_img.jpg";
        } else if (results[0].label == "Roar") {
            document.getElementById("img_dog").src = "dog_img.png";
            document.getElementById("img_cat").src = "cat_img.jpg";
            document.getElementById("img_cow").src = "cow_img.webp";
            document.getElementById("img_lion").src = "lion_gif.gif";
        } else {
            document.getElementById("img_dog").src = "dog_img.png";
            document.getElementById("img_cat").src = "cat_img.jpg";
            document.getElementById("img_cow").src = "cow_img.webp";
            document.getElementById("img_lion").src = "lion_img.jpg";
        }
    }

}