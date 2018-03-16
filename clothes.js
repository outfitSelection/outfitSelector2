///////////Filtering/////////////


// function to upload images
function uploadFile(){
    var x = document.getElementById("myFile");
    var txt = "";
    var itemcount = 0;
    if ('files' in x) {
        if (x.files.length == 0) {
            txt = "Select one or more files.";
        } else {
            for (var i = 0; i < x.files.length; i++) {
                txt += "<br><strong>" + (i+1) + ". file</strong><br>";
                var file = x.files[i]; 

                if ('name' in file) {
                    txt += "name: " + file.name + "<br>";
                }
                if ('size' in file) {
                    txt += "size: " + file.size + " bytes <br>";
                }
            }
        }
    } 
    else {
        if (x.value == "") {
            txt += "Select one or more files.";
        } else {
            txt += "The files property is not supported by your browser!";
            txt  += "<br>The path of the selected file: " + x.value; // If the browser does not support the files property, it will return the path of the selected file instead. 
        }
    }
}

$(document).ready(function(){
    $("#submit-button").click(function(){
        var clothingInput, tagsInput; 

        clothingInput = document.forms["add-outfit-form"]["clothing_types"].value;

        if(clothingInput != ""){
          sessionStorage.setItem("itemadded", 1);
          sessionStorage.setItem("itemtype", clothingInput);
          {swal("Success!", "Clothes added!", "success");}
        }
        else{
            {swal("Oh no!", "Please complete all required fields!", "error");}
        }
    })
})

function checkitems(){

  var x = sessionStorage.getItem('itemadded');
  var y = sessionStorage.getItem('itemtype');
  y = y + ".html";

  var path = window.location.pathname;
  var f = path.split("/").pop();

  console.log(y);
  console.log(f);

  if(x == 1 && y == f){
    var i = $('#item0 img').attr('src');
    swal("Success!", "New items were added to your closet!", i);
    $('#item0').removeClass('deleted');
    update();
    sessionStorage.setItem("itemadded", 0);
    sessionStorage.removeItem('itemtype');
  }else{

    $('#item0').addClass('deleted');
    update();
  }

}

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