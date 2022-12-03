document.addEventListener("DOMContentLoaded", function(event){

  var drp_butt = document.getElementById("dropdown_button");

  drp_butt.onclick = function() {
    var drp = document.getElementById("dropdown_menu");
    //debugger
    //console.log("drp.style.display ", drp.style.display);
    drp.classList.toggle('hidden');
  };

})





