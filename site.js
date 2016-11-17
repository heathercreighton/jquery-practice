$(document).ready(function(){
	$('#circle').click(function(){

		// alert("You clicked the cirle!");


		$('p').html("We've changed the text!");

		});


		$('.square').click(function(){
			$(this).css("background", "blue");

		});


		$('.square').hover(function(){
			$(this).css("width", "400px");

		});

		$(function(){
	  $('#draggable').draggable();
	  });

});