document.addEventListener("DOMContentLoaded", function(event){

  var drp_butt = document.getElementById("dropdown_button");

  drp_butt.onclick = function() {
    var drp = document.getElementById("dropdown_menu");
    var shadow = document.getElementById("light_room");
    var menu = document.getElementById("menu");
    var exit = document.getElementById("exit_menu");
    drp.classList.toggle('hidden');
    shadow.classList.toggle('hidden');
    menu.classList.toggle('hidden');
    exit.classList.toggle('shown');
    document.body.classList.toggle("no_scroll");
  };

})





