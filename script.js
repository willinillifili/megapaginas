$(document).ready(function(){
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

  //menu item navigate to corresponding tile
  $(".main-category").click(function(){
    var text = $(this).text().trim();
    var pos = $(".cat-title:contains("+text+")").offset().top;
    $("html, body").animate({
      scrollTop: pos
    });
    $("#nav-items").attr("class", "");
    $("#nav-items").css("display", "none");
  })

  //handle countries menu toggle
  /*$(".country").click(function (e) {
    e.stopPropagation();
    var countriesDropdown = $(".countries-dropdown");
    countriesDropdown.toggle();
    countriesDropdown.addClass("dropdown
  });*/

  $(".country").hover(function(e){
    $(".countries-dropdown").removeClass("pullup-fx");
    $(".countries-dropdown").addClass("dropdown-fx")
  }, function() {
    $(".countries-dropdown").removeClass("dropdown-fx");
    $(".countries-dropdown").addClass("pullup-fx");
  });

  //countries dropdown for mobile
  var toggle = 1;
  $(".mobile-country").click(function(e){
    e.stopPropagation();
    if (toggle === 1) {
      $(".countries-dropdown").removeClass("pullup-fx");
      $(".countries-dropdown").addClass("dropdown-fx")
      toggle = 0;
    }
    else if (toggle === 0) {
      $(".countries-dropdown").removeClass("dropdown-fx");
      $(".countries-dropdown").addClass("pullup-fx");
      toggle = 1;
    }
  });

  //menus hide by clicking anything on the srcreen
  $(document).click(function(){
    $(".nav-items").hide();
    $(".countries-dropdown").addClass("pullup-fx");
    $(".countries-dropdown").removeClass("dropdown-fx");
    $("#nav-items").removeClass("nav-items");
  });

  //yellow pages render directory
  const categories = ["abogados", "aires acondicionados", "alquiler", "auto",
    "auto essentials", "bar", "belleza y salud", "bicicletas","bienes raices",
    "camas", "cerrajero", "contabilidad y consultoria", "contratista", "dealer",
    "detectives", "ebanisteria", "empleo", "empleos", "energia renovable",
    "estimador", "exterminadores", "empleador", "fumigacion", "gatos en venta",
    "generadores electricos", "grua", "inc", "jardineria", "laboratorio clinico",
    "licores y picadera", "limpiezas", "manufactura", "masajes", "mascotas",
    "mecanica", "medico", "maquina de presion", "medicos", "oferta", "pequeno",
    "perro", "piezas de auto", "pintor", "pintura y construccion",
    "plantas y construccion", "plantas electricas", "plomeria", "prendas",
    "real estate", "refrigeracion", "remolque", "reparacion",
    "reparacion de residencias", "salud", "salon de bellezas", "servicios",
    "servicios selado de techos", "suplidor", "sv casa",
    "terminacion y construccion", "textiles", "transportacion", "venderlo",
    "venta de frappe y frituras"];

  currentLetter = 'a';
  for (cat of categories) {
    if (cat[0] > currentLetter) {
      $("<div class='directory-item letter-index flex-column'>"+cat[0]+"</div>")
      .insertBefore("#marker");
      currentLetter = cat[0];
    }
    $("<div class='directory-item flex-column'><a href='./mega-paginas-results.html'>"+cat+"</a></div>")
    .insertBefore("#marker");
  }

  //serve yellowpages ads
  const ads = [
    "elpocillo3.jpg",
    "aguadillapet.jpg",
    "anascoautopaint.jpg",
    "pmextreme.jpg",
    "solano.jpg"];


  for (ad of ads) {
    var width = Math.floor((Math.random() * 50) + 10);
    width = width - width % 10;
    $('<div class="premium-ad" style="width:'+width+'%;">'+
            '<img alt="premium" src="./assets/ads/'+ad+'"/>' +
          '</div>').insertBefore("#premium-ads-insert");
  }

  //yellowpages render results
  const results = [
    {
      title: "Negocio 1",
      keywords: ["eficiencia", "precision"],
      country : "PR",
      city: "San Juan",
      phone: 787676565,
    },
    {
      title: "Negocio 1",
      keywords: ["eficiencia", "precision"],
      country : "PR",
      city: "San Juan",
      phone: 787676565,
    },
    {
      title: "Negocio 1",
      keywords: ["eficiencia", "precision"],
      country : "PR",
      city: "San Juan",
      phone: 787676565,
    },
    {
      title: "Negocio 1",
      keywords: ["eficiencia", "precision"],
      country : "PR",
      city: "San Juan",
      phone: 787676565,
    },
    {
      title: "Negocio 1",
      keywords: ["eficiencia", "precision"],
      country : "PR",
      city: "San Juan",
      phone: 787676565,
    },
    {
      title: "Negocio 1",
      keywords: ["eficiencia", "precision"],
      country : "PR",
      city: "San Juan",
      phone: 787676565,
    },
    {
      title: "Negocio 1",
      keywords: ["eficiencia", "precision"],
      country : "PR",
      city: "San Juan",
      phone: 787676565,
    },
    {
      title: "Negocio 1",
      keywords: ["eficiencia", "precision"],
      country : "PR",
      city: "San Juan",
      phone: 787676565,
    },
    {
      title: "Negocio 1",
      keywords: ["eficiencia", "precision"],
      country : "PR",
      city: "San Juan",
      phone: 787676565,
    },
    {
      title: "Negocio 1",
      keywords: ["eficiencia", "precision"],
      country : "PR",
      city: "San Juan",
      phone: 787676565,
    },
    {
      title: "Negocio 1",
      keywords: ["eficiencia", "precision"],
      country : "PR",
      city: "San Juan",
      phone: 787676565,
    },
  ]
  for (res of results) {
  $('    <div class="result flex-row">'+
          '<div class="result-image">'+
          '<img alt="result" src="./assets/placeholder.jpg"/>'+
          '</div>'+
          '<div class="result-info">'+
            '<div class="result-title"><a href="./megapaginas-anuncio.html">'+res.title+'</a></div>'+
            '<div class="result-keywords"><a href="./megapaginas-anuncio.html">'+res['keywords'][0]+'</a> <a>'+res['keywords'][1]+'</a></div>'+
            '<div class="result-location">'+res.city+', <a href="./megapaginas-anuncio.html">'+res.country+'</a></div>'+
            '<div class="result-phone">'+res.phone+'</div>'+
          '</div>'+
        '</div>'
      ).insertBefore("#results-marker")
    }

    //serve ad-page photo sub-carousel
    var subCarouselPhotoURLs = ["front.jpg", "front1.jpg", "front2.jpg", "front3.jpg"]
    for (img of subCarouselPhotoURLs) {
      $('<div class="sub-carousel-photo"><img alt="" src="./assets/'+img+'"></div>')
      .insertBefore("#sub-carousel-photos-marker");
    }
    //higlight first photo, which is 'current' by default
    $(".sub-carousel-photo").first().addClass("current");

    //higlight most recently clicked photo, and display it on carousel
    $(".sub-carousel-photo").click(function() {
      var clicked = $(this);
      $(".current").removeClass("current"); //unhighlight previously selected photo
      clicked.addClass("current");//voila
      var url = clicked.children().attr("src");//get clicked image url
      $(".photo-carousel").children().attr("src", url)//update photo carousel
    })

    //handle carousel navigation
    $(".photo-carousel-arrow").click(function(){
      let clicked = $(this);
      let arrow = clicked.attr("id"); //determine which arrow was clicked
      let current = $(".current"); //get currently displayed photo from sub-carousel
      let carousel = $(".photo-carousel"); //cache photo carousel
      var next;
      if (arrow == "photo-carousel-arrow-right") next = current.next() //get next photo url
      if (arrow == "photo-carousel-arrow-left") next = current.prev() //get next photo url
      nextURL = next.children().attr("src");
      if (nextURL) {
        current.removeClass("current");
        carousel.children().attr("src", nextURL); //update photo carousel
        next.addClass("current")//highlight
      }
    });

    //serve comments
    const comments = ['comm1', 'comm2', 'comm3', 'comm4', 'comm5'];
    const numOfComments = comments.length;
    $("#num-of-comments").text(numOfComments);
    for (comm of comments) {
      $('<div class="comment flex-row">'+
      '<div class="comment-profile-picture">' +
                '<img alt="profile-pic" src="./assets/profile-icon.png"/>'+
              '</div>'+
              '<div class="comment-box">'+
                '<div class="comment-header">' +
                  '<div class="comment-username">' +
                    'User0'+
                  '</div>' +
                  '<div class="comment-timestamp">' +
                    'Lun 2 de Febrero del 2019' +
                  '</div>' +
                '</div>' +
                '<div class="comment-text">' +
                '<span class="reply">@user1 &nbsp</span>'+
                  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam' +
                  'nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,' +
                '</div>' +
                '<div class="comment-options">' +
                  '<div class="comment-like">Me Gusta' +
                  '</div>' +
                  '<div class="comment-reply">Responder' +
                  '</div>' +
                '</div>' +
              '</div>' +
            '</div>' +
          '</div>').insertBefore("#comments-insert-point");
        }
});
