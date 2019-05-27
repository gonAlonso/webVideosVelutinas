/*
$( document ).ready(function() {
    $("#upload-button").click(function(){
        document.getElementById("video-element").src =
        	document.getElementById("file-input").files[0].name;
        console.log("Hola");
    });
});
*/


/*
$(document).ready(function () {

    $('#myImg').draggable();

    $('#getPos').on('click', function(){

        var xRes = $('#xRes span'),
            yRes = $('#yRes span'),

            image = $('img#myImg');

        xRes.html(image.offset().top);
        yRes.html(image.offset().left);
    });
});
*/


function handleFileSelect(evt) {

    var files = evt.target.files; // FileList object

    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files[i]; i++) {

      // Only process video files.
      if (!f.type.match('video.*')) {
      	console.log( "No es video");
        continue;
      }

      var reader = new FileReader();

      // Closure to capture the file information.
      reader.onload = (function(theFile) {
        return function(e) {
          // Render thumbnail.
          var li = document.createElement('li');
          var miDiv = document.createElement('div');
          var miInput = document.createElement('input');
          miInput.type = ''
          li.innerHTML = ['<span>', escape(theFile.name), '</span>'].join('');
          document.getElementById('video-list-ul').insertBefore(li, null);
        };
      })(f);

      // Read in the image file as a data URL.
      reader.readAsDataURL(f);
    }
  }

$(document).ready(function(){
  document.getElementById('file-input').addEventListener('change', handleFileSelect, false);
});

