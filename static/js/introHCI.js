'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("j/k it's actually Sophie's page!");
		$('#testjs').text("Ahhh, you clicked me!");
		$(".jumbotron p").toggleClass("active");
	});

	$("a.thumbnail").click(projectClick);

	$("#submitBtn").click(adjustProject);
}

function adjustProject() {
	var projectID = $("#project").val();
	var newWidth = $("#width").val();
	var newDesc = $("#description").val();

	var projectToChange = $(projectID);
	var descToChange = $(projectToChange).find(".project-description");

	projectToChange.width(newWidth);
	descToChange.text(newDesc);
}

function projectClick(e) {
	// Cancel the default action, which prevents the page from reloading
    e.preventDefault();

    // In an event listener, $(this) is the element that fired the event
    var projectTitle = $(this).find("p").text();
    var jumbotronHeader = $(".jumbotron h1");
    jumbotronHeader.text(projectTitle);

    var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    var image = $(containingProject).find(".img");

    if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p>This project has a placeholder description for now. Go ahead and change it at the bottom of the page!</p></div>");
    } else {
    	if (description.is(":visible")) {
	    	description.fadeOut();
	    	image.fadeOut();
	    } else {
	       description.fadeIn();
	       image.fadeIn();
	    }
	}
}