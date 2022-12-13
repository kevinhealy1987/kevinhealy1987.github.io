function showSlideshowWindow(x) {
    if (x == 1) {
        document.getElementById("gallery-slideshow-1").style.display = "flex";
    }

    else if (x == 2) {
        document.getElementById("gallery-slideshow-2").style.display = "flex";
    }

}

function closeSlideshowWindow(x) {
    if (x == 1) {
        document.getElementById("gallery-slideshow-1").style.display = "none";
    }

    else if (x == 2) {
        document.getElementById("gallery-slideshow-2").style.display = "none";
    }
}

function getSlideshowImage1(imgNum) {
    var img = "img-a" + imgNum;
    document.getElementById("slideshow-image-1").src = document.getElementById(img).src;
}

function getSlideshowImage2(imgNum) {
    var img = "img-b" + imgNum;
    document.getElementById("slideshow-image-2").src = document.getElementById(img).src;
}

// strict naming convention required for images for function to work
// function breaks if images are not .jpg, even.jpeg not acceptable
// Needs to be exactly 8 images in folder
// Must be a more robust way of switching images within a slideshow
function galleryPrev(x) {
    if (x == 1) {
        var currentImage = document.getElementById("slideshow-image-1").src;
    }

    else if (x == 2) {
        var currentImage = document.getElementById("slideshow-image-2").src;      
    }

    var srcLength = currentImage.length;

    var newImage = currentImage.substr(0, srcLength - 5);
    var index = currentImage.substr(srcLength - 5, 1); // index of image

    // current image is 1.jpg so clicking Prev needs to load 8.jpg
    if (index == 1) {
        newImage = newImage + "8.jpg";
    }

    // decreasing index by 1 (e.g. current image is 3.jpg, clicking Prev button will load 2.jpg)
    else {
        newImage = newImage + (parseInt(index) - 1) + ".jpg";
    }

    if (x == 1) {
        document.getElementById("slideshow-image-1").src = newImage;
    }

    else if (x == 2) {
        document.getElementById("slideshow-image-2").src = newImage; 
    }
}

function galleryNext(x) {
    if (x == 1) {
        var currentImage = document.getElementById("slideshow-image-1").src;
    }

    else if (x == 2) {
        var currentImage = document.getElementById("slideshow-image-2").src;      
    }

    var srcLength = currentImage.length;

    var newImage = currentImage.substr(0, srcLength - 5);
    var index = currentImage.substr(srcLength - 5, 1); // index of image

    // current image is 8.jpg so clicking Next needs to load 1.jpg
    if (index == 8) {
        newImage = newImage + "1.jpg";
    }

    // increasing index by 1
    else {
        newImage = newImage + (parseInt(index) + 1) + ".jpg";
    }

    if (x == 1) {
        document.getElementById("slideshow-image-1").src = newImage;
    }

    else if (x == 2) {
        document.getElementById("slideshow-image-2").src = newImage; 
    }
}

function contactUs() {
    // looks like emails can't be sent using JavaScript as it's a server side issue???
	var firstName = document.getElementById("first-name").value;
	var surname = document.getElementById("surname").value;
	var email = document.getElementById("email").value;
	var message = document.getElementById("message").value;

    alert("Dear " + firstName + " " + surname + "\n\nThank you for your message, we will endeavour to get in touch with you at " + email + " as soon as we can.\n\nRegards,\nBaldoyle Forum\n\n\nFor reference, contents of received message:\n\n" + message);
}