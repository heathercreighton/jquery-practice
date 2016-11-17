// Gets the page ready to be safely manipulated by our jquery code.
$(document).ready(function(){

// calls the document object with id = "circle": 
	$('#circle').hover(function(){
			// sends an alert when the user clicks it
			// alert("You clicked the circle!");

			// Changes the text in the 'p' element when the circle is clicked
			// $('p').html("We've changed the text!"); 
 
		 // change the image with a click
		 // $('img').attr('src', 'https://www.yourprops.com/movieprops/default/yp4f5ff9fab02837.76955062/Gremlins-1-1-Gremlin-Replica-2.jpg');

			});


// Call element with class = suare and send an alert
	// $('.square').click(function(){
	// 		alert("You clicked the square!");
	// 		});


//Change color of quare from red to blue when clicked:
$('.square').click(function() {
  $(this).css('background-color', 'blue');
  });

// $('.square').hover(function() {
//   $(this).css('width', '400px');
//   });

$(function() {
  $('#draggable').draggable();
  });

$(function() {
  $('#resizable').resizable();
  });

$(function() {
  $('#sortable').sortable();
  });


});