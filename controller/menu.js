$(document).ready(function() {
	template = $('#menu').html();
	output = Mustache.render(template, menu);
	$('#menu').html(output);

  //sticky navbar
  var bannerPos = $(".mp-banner").offset().top;
  $(document).scroll(function() {
    if ($(this).scrollTop() >= bannerPos - 75) {
      $(".navbar").addClass("fill-navbar");
    }
    else {
      $(".navbar").removeClass("fill-navbar");
    }
  });

  //menu item hover
  $(".nav-item").hover(
    function(){
      $(this).children(".dropdown").css("display", "flex");
    },
    function(){
      $(this).children(".dropdown").css("display", "none");
    }
  );

  //mobile menu toggle
  $(".toggle").click(function(e) {
    e.stopPropagation();
    let menu = $("#nav-items");
    let show = menu.attr("class");
    if (show === "") {
      menu.css("display", "flex");
      menu.attr("class", "nav-items");
      //menu.addClass("mobile-menu");
    }
    else {
      menu.css("display", "none");
      menu.attr("class", "");
    }
  })
});
