$(document).ready(function() {
  // category data is stored as COMMA SEPARATED text in div#data
  // the following couple of lines parse the data into js-friendly objects

  var parsedCategories = [];
  const services_data = $("#data").text();
  parsedCategories = services_data.replace(/\n/g, '').split(',');

  // the goal is to group the services in alphabetical order.
  // the final structure will be an object 'categories' which contains
  // member objects 'category'. Each 'category' object will contain an 'index'
  // field which stores the first letter of the service's name and a 'services'
  // object whith fields 'name' and 'quantity'.

  let categories = [];
  let currentLetter = 'a';
  let url = window.location.href;
  if (urlHasCountry()) countryCode = getCodeFromURL();
  else countryCode = "PR";  
  let query = "https://megapaginas.com/cgi-bin/mega.cgi?n="+countryCode+"&c=";
  var category = {
    index : currentLetter,
    services : []
  };

  for (let i = 1; i < parsedCategories.length; i++) {
    let firstLetter = parsedCategories[i - 1][0];
    if (firstLetter > currentLetter) {
        categories.push(category);
        var category = {
          index : firstLetter,
          services : []
        };
        currentLetter = firstLetter;
    }
    category.services.push({
      name : parsedCategories[i - 1],
      quantity : parsedCategories[i],
      url : query + parsedCategories[i - 1]
    });
    i++;
  }

  // loop exits before last category can be pushed.
  // need to improve this later.

  categories.push(category);

  let data = { categories : categories };
	template = $('#directory').html();
	output = Mustache.render(template, data);
	$('#directory').html(output);

  const isMobile = $("#device-check").css("display") == "block";

  //click handler for category expansion

  $(".letter-index").click(function() {
    var categoriesContainer = $(this).next();
    var arrow = $(this).children(".category-dropdown-arrow");
    var items = categoriesContainer.children(".category-item");
    var directoryItemHeight = items.outerHeight();
    const expanded = items.hasClass("show-items");
    const categoriesAreExpanded = categoriesContainer.css("display") == "flex";
    if (isMobile) {

      if (!categoriesAreExpanded) {
        arrow.addClass("rotate");
        categoriesContainer.css("display", "flex");
        toggle = 1;
      }

      else {
        arrow.removeClass("rotate");
        categoriesContainer.css("display", "none");
        toggle = 0;
      }

    }

    else {
    	if (items.length > 1 && !isMobile) {
        renderHeight = calculateContainerHeight(categoriesContainer) / 2;
        renderWidth = categoriesContainer.width() / 2;

    	  //if there are an odd number of categories we add extra unit of height
        //to avoid default third column from flex-wrap

    	  if (items.length % 2 == 1) {
            renderHeight = renderHeight + directoryItemHeight;
          }
      }

    	if (items.length == 1 && !isMobile) {
    		renderHeight = directoryItemHeight;
    	}

    	if (!expanded) {
        arrow.addClass("rotate");
    	  categoriesContainer.css("height", ""+renderHeight+"");
        $(".category-item").css("width", ""+renderWidth+"");
    	  categoriesContainer.addClass("show-categories");
    	  items.addClass("show-items");
      }

    	else if (expanded){
    		arrow.removeClass("rotate");
    	  categoriesContainer.css("height", "0px");
    		items.removeClass("show-items");
    		//categoriesContainer.removeClass("show-categories");
    	}

      // We want categories to be displayed as two-column tables.
    	// strategy is to set categoriesContainer height to half of
    	// auto height and let flex wrap do the rest.
    }
  });

  // HELPER FUNCTIONS

  function calculateContainerHeight(container) {
  	var numberOfChildren = container.children().length;
  	var heightOfChildren = container.children().outerHeight();
  	return numberOfChildren * heightOfChildren;
  }

  function urlHasCountry() {
    let URL = window.location.href;
    let pattern = /n=[A-Z][A-Z]/g;
    return pattern.test(URL);
  }

  function getCodeFromURL() {
    let URL = window.location.href;
    return URL.match("n=[A-Z][A-Z]")[0].substring(2);
  }

});
