function profile() {
    document.getElementById("dropdown-profile").classList.toggle("showProfile");
}


window.onclick = function(event2) {
  if (!event2.target.matches('.profilebtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-list-profile");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('showProfile')) {
        openDropdown.classList.remove('showProfile');
      }
    }
  }
}

function hamburger() {
    document.getElementById("dropdown-menu").classList.toggle("show");
}


window.onclick = function(event1) {
  if (!event1.target.matches('.dropdownbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-list");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

var inputs = document.querySelectorAll('input');
for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('focus', function(){
        this.parentNode.appendChild(document.querySelector('#myUL'));
    });
}

function searchClothes() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('p');

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