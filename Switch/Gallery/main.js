var config = {
    apiKey: "AIzaSyA7t47Cn9adb39lPVWuMCRqbBheXct6css",
    authDomain: "switch-09-06-18.firebaseapp.com",
    databaseURL: "https://switch-09-06-18.firebaseio.com",
    projectId: "switch-09-06-18",
    storageBucket: "switch-09-06-18.appspot.com",
    messagingSenderId: "564062165167"
  };

firebase.initializeApp(config);
var storage = firebase.storage();
var storageRef = storage.ref();
var currentPhotoIndex = 1
var photoIncrement = 3
var finalPhotoIndex = 127

loadImages();

$(window).scroll(function(){
     if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      loadImages();
    }
 });

function loadImages(){
  if (currentPhotoIndex < finalPhotoIndex) {
    $(".lds-spinner").show();
    retrieveImages();
  }
  else{
    $(".lds-spinner").hide();
  }
}

function retrieveImages(){
      for (element = currentPhotoIndex; element < currentPhotoIndex+photoIncrement; element++) {
        var imageRef = storageRef.child('Switch-' + element + '.JPG');
        imageRef.getDownloadURL().then(function(url) {
          $("#gallery-row").append('<div class="col-sm-6 col-md-4"><a class="lightbox" target="_blank" href="'+ url + '"><img src="' + url +'" alt="photo"></a></div>');
          $(".lds-spinner").hide();
        }).catch(function(error) {
           console.log(error);
           $(".lds-spinner").hide();
        });
    }
  currentPhotoIndex += photoIncrement;
}