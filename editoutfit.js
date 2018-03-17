$(document).ready(function(){
	$(".suggestion").click(function(){
		var x = this.id;
		var s = '#' + x + ' img';
		var i = $(s).attr('src');
		console.log(i);

		document.getElementById("preview-image-container").innerHTML = "<img src=" + i + ">";
		console.log(document.getElementById("preview-image-container").innerHTML)
	});

	$(".wear_btn").click(function(){
		var x = 'preview-image-container';
		var s = '#' + x + ' img';
		var i = $(s).attr('src');
		console.log(i);
		swal({
			title: "Wear this outfit for the day?",
			icon: i,
			button: true,
		});
	});
});