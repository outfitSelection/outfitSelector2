function addtag(clicked_id) {

	var tag;
	tag = document.getElementById(clicked_id).innerHTML;
	document.getElementById("tags").innerHTML = tag;

    
}

function list() {

  var inputs = document.querySelectorAll('#myInput');
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('focus', function(){
        this.parentNode.appendChild(document.querySelector('#myUL'));
    });
  } 
}

function searchClothes() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('button');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
