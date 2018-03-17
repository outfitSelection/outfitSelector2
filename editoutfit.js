$(document).ready(function(){
	$(".suggestion").click(function(){
		var x = this.id;
		var s = '#' + x + ' img';
		var i = $(s).attr('src');

		document.getElementById("preview-image-container").innerHTML = "<img src=" + i + ">";

		$('.scrollmenu').children('div').each(function () {
			if($(this).hasClass('selected')){
				$(this).removeClass('selected');
			}
		})
		$(this).addClass('selected');
		swal("Great choice!", {
			icon: "success",
		});
	});

	// $(".wear_btn").click(function(){
	// 	var x = 'preview-image-container';
	// 	var s = '#' + x + ' img';
	// 	var i = $(s).attr('src');
	// 	console.log(i);
	// 	swal({
	// 		title: "Wear this outfit for the day?",
	// 		icon: i,
	// 		button: true,
	// 	})
	// 	.then((value) => {
	// 		if (value) {
	// 			$('.scrollmenu').children('div').each(function () {
	// 				if($(this).hasClass('selected')){
	// 					$(this).removeClass('selected');
	// 				}
	// 			})
	// 			$(this).addClass('selected');
	// 			swal("Great choice!", {
	// 				icon: "success",
	// 			});
	// 		}
	// 	})
	// });
});
