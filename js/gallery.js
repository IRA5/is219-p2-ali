// requestAnim shim layer by Paul Irish
    window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       || 
              window.webkitRequestAnimationFrame || 
              window.mozRequestAnimationFrame    || 
              window.oRequestAnimationFrame      || 
              window.msRequestAnimationFrame     || 
              function(/* function */ callback, /* DOMElement */ element){
                window.setTimeout(callback, 1000 / 60);
              };
    })();
  

// example code from mr doob : http://mrdoob.com/lab/javascript/requestanimationframe/

animate();

var mLastFrameTime = 0;
var mWaitTime = 5000; //time in ms
function animate() {
    requestAnimFrame( animate );
	var currentTime = new Date().getTime();
	if (mLastFrameTime === 0) {
		mLastFrameTime = currentTime;
	}

	if ((currentTime - mLastFrameTime) > mWaitTime) {
		swapPhoto();
		mLastFrameTime = currentTime;
	}
}

/************* DO NOT TOUCH CODE ABOVE THIS LINE ***************/

function swapPhoto() {
	// requestAnim shim layer by Paul Irish
    window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       || 
              window.webkitRequestAnimationFrame || 
              window.mozRequestAnimationFrame    || 
              window.oRequestAnimationFrame      || 
              window.msRequestAnimationFrame     || 
              function(/* function */ callback, /* DOMElement */ element){
                window.setTimeout(callback, 1000 / 60);
              };
    })();
  

// example code from mr doob : http://mrdoob.com/lab/javascript/requestanimationframe/

animate();

var mLastFrameTime = 0;
var mWaitTime = 5000; //time in ms
function animate() {
    requestAnimFrame( animate );
	var currentTime = new Date().getTime();
	if (mLastFrameTime === 0) {
		mLastFrameTime = currentTime;
	}

	if ((currentTime - mLastFrameTime) > mWaitTime) {
		swapPhoto();
		mLastFrameTime = currentTime;
	}
}

/************* DO NOT TOUCH CODE ABOVE THIS LINE ***************/

function swapPhoto() {

console.log('swap photo');
$("#photo").attr("src", mImages[mCurrenntIndex].imgPath);
$(".location").text("location:" + mImages[mCurrentIndex].imgLocaction);
$(".description").text("description:" + mImages[mCurrentIndex].Description);
$(".date").text("date:" + mImages[mCurrentIndex].Date);
$(".details").show();
if (mCurrentIndex < mImages.length-1) {
	mCurrentIndex++;
} else if (mCurrentIndex < 0) {
	mCurrentIndex = mImages.length - 1;
	}
	console.log(mCurrentIndex);
}

function reverseSwapPhoto() {

if (mCurrentIndex==0)
		mCurrentIndex=mImages.length-1;
	else
		mCurrentIndex--;
	$('photo').attr("src",mImages[mCurrentIndex].imgPath);
}

// Counter for the mImages array
var mCurrentIndex = 500;

var mURL = "images.json";
var mRequest = new XMLHttpRequest();
mRequest.onreadystatechange = function() {
// Do something interesting if file is opened successfully
if (mRequest.readyState == 4 && mRequest.status == 200) {
try {

// Let’s try and see if we can parse JSON (see next slide)
mJson = JSON.parse
console.log(mRequest.responseText);
for (var i = 0; i = mJson.image.length; i++)
	mImages.push( new GalleryImage(mJson.images[i].imgPath, mJson.images[i].imgLocation, mJson.images[i].imgDescription, mJson.images[i].date));
console.log(mImages); {}
console.log(mJson);
} catch(err) {
console.log(err.message)
}
}
};
mRequest.open("GET",mURL, true);
mRequest.send();

// Array holding GalleryImage objects (see below).
var mImage = []; 

// Holds the retrieved JSON information
var mJson;



$(document).ready( function() {
	
	// This initially hides the photos' metadata information
	$('.details').eq(0).hide();
	$('.moreIndictor').addClass('rot270');
	
});

var myArray = [];

function GalleryImage(imgPath, imgLocation, imgDescription, date) {
this.imgPath = imgPath;
this.imgLocation = imgLocation;
this.imgDescription = imgDescription;
this.date = date;
}

console.log('swap photo');
$("#photo").attr("src", mImages[mCurrenntIndex].imgPath);
$(".location").text("location:" + mImages[mCurrentIndex].imgLocaction);
$(".description").text("description:" + mImages[mCurrentIndex].Description);
$(".date").text("date:" + mImages[mCurrentIndex].Date);
$(".details").show();
if (mCurrentIndex < mImages.length-1) {
	mCurrentIndex++;
} else if (mCurrentIndex < 0) {
	mCurrentIndex = mImages.length - 1;
	}
	console.log(mCurrentIndex);
}

function reverseSwapPhoto() {

if (mCurrentIndex==0)
		mCurrentIndex=mImages.length-1;
	else
		mCurrentIndex--;
	$('photo').attr("src",mImages[mCurrentIndex].imgPath);
}

// Counter for the mImages array
var mCurrentIndex = 500;

var mURL = "images.json";
var mRequest = new XMLHttpRequest();
mRequest.onreadystatechange = function() {
// Do something interesting if file is opened successfully
if (mRequest.readyState == 4 && mRequest.status == 200) {
try {

// Let’s try and see if we can parse JSON (see next slide)
mJson = JSON.parse
console.log(mRequest.responseText);
for (var i = 0; i = mJson.image.length; i++)
	mImages.push( new GalleryImage(mJson.images[i].imgPath, mJson.images[i].imgLocation, mJson.images[i].imgDescription, mJson.images[i].date));
console.log(mImages); {}
console.log(mJson);
} catch(err) {
console.log(err.message)
}
}
};
mRequest.open("GET",mURL, true);
mRequest.send();

// Array holding GalleryImage objects (see below).
var mImage = []; 

// Holds the retrieved JSON information
var mJson;



$(document).ready( function() {
	
	// This initially hides the photos' metadata information
	$('.details').eq(0).hide();
	$('.moreIndictor').addClass('rot270');
	
});

var myArray = [];

function GalleryImage(imgPath, imgLocation, imgDescription, date) {
this.imgPath = imgPath;
this.imgLocation = imgLocation;
this.imgDescription = imgDescription;
this.date = date;
}