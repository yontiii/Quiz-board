$(document).ready(function() {
  $("#begin").click(function() {
    $(".form-group").hide();
  });

  $("#start").click(function() {
    $("div.intro").hide();
    $("div.form-group").fadeIn(2000);
  });

  $("#push").click(function() {
    $("div.form-group").hide(2000)
    $("#grades").fadeIn(2000);
  });

  $("#retake").click(function(){
    $("#grades").fadeOut(2000);
    $("div.loginbox").slideDown(3000);
  })

  $("button#test").click(function(){
    $("div.loginbox").slideUp();
    $("div.intro").fadeIn(2000);
  });
  //businesslogic

  $("#blanks form").submit(function(event) {
    event.preventDefault();
    var data = parseInt($("input:radio[name=Q1]:checked").val());
    var debug = parseInt($("input:radio[name=Q2]:checked").val());
    var scope = parseInt($("input:radio[name=Q3]:checked").val());
    var method = parseInt($("input:radio[name=Q4]:checked").val());
    var strings = parseInt($("input:radio[name=Q5]:checked").val());
    var control = parseInt($("input:radio[name=Q6]:checked").val());
    var logic = parseInt($("input:radio[name=Q7]:checked").val());
    var equality = parseInt($("input:radio[name=Q8]:checked").val());
    var total = parseInt((data + debug + scope + method + strings + control + logic + equality) / 80 * 100);
    $("#results").text(" your score is " + total + "%");

    if (total >= 80) {
      document.getElementById("comments").innerHTML = '<img src="https://media.giphy.com/media/d31w24psGYeekCZy/giphy.gif"> <br> YOU HAVE PASSED'
    } else if (total >= 50) {
      document.getElementById("comments").innerHTML = '<img src="https://media1.tenor.com/images/37ed48e935f0ef4cc73b3d1cd7129712/tenor.gif?itemid=4656140"> <br> THIS IS FAIR'
    } else {
      document.getElementById("comments").innerHTML = '<img src="https://i.gifer.com/6udA.gif"> <br> YOU HAVE FAILED.BUT YOU CAN RETAKE THE EXAM'
    }
  });
});
