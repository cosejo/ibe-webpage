var config =
    {
      apiKey: "AIzaSyCh_EZdj8IFauy5pDAgQiyUkjNx-Fr_Y_0",
      authDomain: "switch-photobooth.firebaseapp.com",
      databaseURL: "https://switch-photobooth.firebaseio.com",
      projectId: "switch-photobooth",
      storageBucket: "switch-photobooth.appspot.com",
    };

firebase.initializeApp(config);
var storage = firebase.storage();
var storageRef = storage.ref();
var currentPhotoIndex = 1
var photoIncrement = 3
var finalPhotoIndex = 1000

loadImages();

$(window).scroll(function(){
     if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      loadImages();
    }
 });

function loadImages(){
  if (currentPhotoIndex < finalPhotoIndex) {
    $("#spinner-container").show();
    retrieveImages();
  }
  else{
    $("#spinner-container").hide();
  }
}

function retrieveImages(){
      for (element = currentPhotoIndex; element < currentPhotoIndex+photoIncrement; element++) {
        var imageRef = storageRef.child('Switch-' + element + '.jpeg');
        imageRef.getDownloadURL().then(function(url) {
          $("#gallery-row").append('<div class="col-sm-6 col-md-4"><a class="lightbox" target="_blank" href="'+ url + '"><img src="' + url +'" alt="photo"></a></div>');
          $("#spinner-container").hide();
        }).catch(function(error) {
           console.log(error);
           $("#spinner-container").hide();
        });
    }
  currentPhotoIndex += photoIncrement;
}