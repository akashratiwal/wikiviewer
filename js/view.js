$(document).ready(function() {
  $("#search").click(function(){
      $("#search").css("display", "none");
      $("#inside_container").css("display", "inline");
      $("#inside_container").animate({"width" : "300px"});
      $("#search").css("width","0");
  });
  $("#close_button").click(function() {
    $("#text_bar").val("");
    $("#inside_container").animate({"width" : "0px"});
    $("#inside_container").css("display", "none");
    $("#search").css("display","inline");
    $("#search").animate({"width":"60px"});
  });
  $("#text_bar").keypress(function(e) {
    if (e.which == 13) {
      $("#container").css("margin-top", "20px");
    }
  });
});
