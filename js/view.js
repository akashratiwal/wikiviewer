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
    $("#result_container").hide({"duration": "300"});
    $("#container").animate({"margin-top":"150px"});
  });
  $("#text_bar").keypress(function(e) {
    if (e.which == 13) {
      $("#container").animate({"margin-top":"20px"});
      $("#result_container").hide({"duration": "300"});
      $.ajax({
        url: 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=' + $("#text_bar").val(),
        dataType: 'jsonp',
        success: function (val) {
          $("#result_container").html("");
          for (var i in val.query.pages) {
            $("#result_container").append("<a href='" + "https://en.wikipedia.org/?curid=" + val.query.pages[i].pageid + "' target='_blank'><div class='result_items'><span class='title'>" + val.query.pages[i].title +
            "</span><br><br><span class='extract'>" + val.query.pages[i].extract + "</span></div></a>");
          }
          $("#result_container").show({"duration": "300"});
      }
      });
    }
  });
});
