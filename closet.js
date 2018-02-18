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

function searchClothes() {



  
}