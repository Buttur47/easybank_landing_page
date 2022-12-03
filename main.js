document.addEventListener("DOMContentLoaded", function(event){

  var drp_butt = document.getElementById("dropdown_button");

  drp_butt.onclick = function() {
    var drp = document.getElementById("dropdown_menu");
    var shadow = document.getElementById("light_room")
    drp.classList.toggle('hidden');
    shadow.classList.toggle('hidden');
    document.html.style.overflow = "hidden";
  };

})





