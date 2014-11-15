// Your Javascript will go here!
$(document).ready(function() {
// jQuery use
//  $("#copyright").click(function(){
//    $(this).css('color','purple');
//  })
// javascript use
  document.getElementById('copyright').onclick = function () {
    this.style.color = 'purple';
  }
});



