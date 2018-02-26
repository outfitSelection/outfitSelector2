function checkmark(){
	var img = document.getElementbyID('box1').src;
	if (img.indexOf('box1')!=-1){
		document.getElementbyID('box1').src = "images/unchecked.png";
	}
	else{
		document.getElementbyID('box1').src = "images/checkbox.png"; 
	}
}

function change() {
	var img1 = document.getElementbyID("images/checkbox.png"),
	img2 = document.getElementbyID("images/unchecked.png");
	var imgElement = document.getElementById('box1');

	imgElement.src = (imgElement.src === img1)? img2 : img1;
}

function changeImage() {
	if ( newsrc == "checkbox.png" ) {
		document.images["box1"].src = "images/checkbox.png";
		newsrc  = "unchecked.png";
	}
	else {
		document.images["box1"].src = "images/unchecked.png";
		newsrc  = "checkbox.png";
	}
}



var image_tracker = "checked";
function lasttry(){
	var image = document.getElementById('box1');
	if(image_tracker=='checked'){
		image.src='images/unchecked.png';
		image_tracker='unchecked';
	}
	else{
		image.src='images/checkbox.png';
		image_tracker='checked';
	}
}


$(document).ready(function(){
    $(".tag").click(function(){
        $(this).toggleClass('active');
    });
});