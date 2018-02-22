function addtag(clicked_id) {

    document.getElementById(clicked_id).addEventListener("click", function(){
    document.getElementById("#tags").innerHTML = "Hello World";
});

}

function list() {

  var inputs = document.querySelectorAll('#myInput');
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('focus', function(){
        this.parentNode.appendChild(document.querySelector('#myUL'));
    });
  } 
}