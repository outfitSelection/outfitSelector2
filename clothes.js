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

///////////Filtering/////////////
$(document).ready(function(){
    $("#delete").click(function(){

        var count = 0;

        $('#clothes').children('div').each(function () {
          if($(this).hasClass("active")){
            count++;
          }
        })

        if(count > 0){
            swal({
              title: "Are you sure?",
              text: "Once deleted, you will not be able to recover these clothes.",
              icon: "warning",
              buttons: true,
                dangerMode: true,
              })
              .then((willDelete) => {
                if (willDelete) {
                  $('#clothes').children('div').each(function () {
                    if($(this).hasClass("active")){
                      $(this).removeClass('active');
                      $(this).toggleClass('deleted');
                    }
                  })
                  update();
                  swal("Poof! Your clothes have been deleted!", {
                    icon: "success",
                  });
                } else {
                  swal("Your clothes are safe!");
                }
          });
        }

      })
  })


function update (){

      var activeButtons = []
      $('.tags').children('button').each(function () {
        if($(this).hasClass("active")){
          activeButtons.push(this.id);
        }
        if(!$(this).hasClass("active")){
          var index = activeButtons.indexOf(this.id);
          if (index > -1) {
            activeButtons.splice(index, 1);
          }
        } 
      });
      
        var toShow = [];
      
        if(activeButtons.length > 0){
  
          $('#clothes').children('div').each(function () {
            var y = this.id;
            var z = 1;
            var classes = $(this).attr('class').split(' ');
            var j;
            for(j = 0; j < activeButtons.length; j++){
              if(($.inArray(activeButtons[j], classes)) == -1){
                z = -1;
              }
            }
            if(z == 1){
              if(!$(this).hasClass("deleted")){
                toShow.push(y);
            }
            }
          });
          
        }
      
        var k;
        $('#clothes').children('div').each(function () {
          document.getElementById(this.id).style.display = 'none';
        });
      
        for(k = 0; k < toShow.length; k++){
            document.getElementById(toShow[k]).style.display = 'inline-block';
          }

        if(toShow.length == 0 && activeButtons.length == 0){
          $('#clothes').children('div').each(function () {
            if(!$(this).hasClass("deleted")){
              document.getElementById(this.id).style.display = 'inline-block';
           }
          });
        }
}


$(document).ready(function(){
    $(".tag").click(function(){
      $(this).toggleClass('active');
        var activeButtons = []
      $('.tags').children('button').each(function () {
        if($(this).hasClass("active")){
          activeButtons.push(this.id);
        }
        if(!$(this).hasClass("active")){
          var index = activeButtons.indexOf(this.id);
          if (index > -1) {
            activeButtons.splice(index, 1);
          }
        } 
      });
      
        var toShow = [];
      
        if(activeButtons.length > 0){
  
          $('#clothes').children('div').each(function () {
            var y = this.id;
            var z = 1;
            var classes = $(this).attr('class').split(' ');
            var j;
            for(j = 0; j < activeButtons.length; j++){
              if(($.inArray(activeButtons[j], classes)) == -1){
                z = -1;
              }
            }
            if(z == 1){
              if(!$(this).hasClass("deleted")){
                toShow.push(y);
            }
            }
          });
          
        }
      
        var k;
        $('#clothes').children('div').each(function () {
          document.getElementById(this.id).style.display = 'none';
        });
      
        for(k = 0; k < toShow.length; k++){
            document.getElementById(toShow[k]).style.display = 'inline-block';
          }

        if(toShow.length == 0 && activeButtons.length == 0){
        	$('#clothes').children('div').each(function () {
            if(!$(this).hasClass("deleted")){
              document.getElementById(this.id).style.display = 'inline-block';
          }
        });
        }
    });
});

$(document).ready(function(){
    $("#clear").click(function(){
        $('.tags').children('button').each(function () {
            $(this).removeClass('active');
        })

        $('#clothes').children('div').each(function () {
          if(!$(this).hasClass("deleted")){
            document.getElementById(this.id).style.display = 'inline-block';
          }
      })
  })
})

$(document).ready(function(){
    $(".article").click(function(){
        $(this).toggleClass('active');
      })
  })

$(document).ready(function(){
    $("#select_all").click(function(){
        $('#clothes').children('div').each(function () {
          if((!$(this).hasClass("active")) && !$(this).hasClass("deleted")){
          $(this).toggleClass('active');
        }
        })
      })
  })

$(document).ready(function(){
    $("#deselect_all").click(function(){
        $('#clothes').children('div').each(function () {
          if($(this).hasClass("active")){
          $(this).toggleClass('active');
        }
        })
      })
  })

