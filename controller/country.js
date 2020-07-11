 $(document).ready(function() {
    // we initialize the countries data with default values for
    // COUNTRY, COUNTRY_CODE, etc. If country data is encoded in the URL,
    // we read it from there. In both cases, we load countries data into 'data'
    // object afterwards

    let COUNTRY_CODE = "PR";
    let COUNTRY = "puerto_rico";
 	  let FLAG = "./assets/images/flags/"+COUNTRY+".gif";
    let URL = window.location.href;

    if ( urlHasCountry() ) {
  		COUNTRY_CODE = URL.match("n=[A-Z][A-Z]")[0].substring(2);
  		COUNTRY = getCountryByCode(COUNTRY_CODE, country).name;
  		FLAG = "./assets/images/flags/"+COUNTRY+".gif";
  		if (COUNTRY) {
  			//changeCountry(COUNTRY, FLAG, countries);
  		}
  	}

    let data = {
      currentName : COUNTRY,
      currentURL : FLAG,
      country : country
    };

  	template = $('#country').html();
  	output = Mustache.render(template, data);
  	$('#country').html(output);

    adjustLinksToCountry();

    // handles toggling of countries menu
    let expanded  = 0;
    $(".current-country").click(function() {
      if (!expanded) {
        $(".country-dropdown").css("display", "block");
        expanded = 1;
      }

      else {
        $(".country-dropdown").css("display", "none");
        expanded = 0;
      }
    })

    // handles change of countries when a country is selected from the menu

    $('.country-option').click(function () {
      let countryCode = $(this).attr("id");
      if (urlHasCountry()) newURL = URL.replace(COUNTRY_CODE, countryCode);
      else newURL = URL + "?n=" + countryCode;
      window.location.href = newURL;
    });

    // HELPER FUNCTIONS

    function getCountryByCode( countryCode, DB ) {
      if (countryCode.indexOf(" ") > -1) {
        countryCode = countryCode.replace(" ", "_");
      }
      //now get country from countries array (i.e. local DB)
      matching = DB.filter( obj => {
        return obj.code === countryCode;
      });
      return matching[0];
    }

    function changeCurrentCountry( newCountry ) {
      $('.current-country > .name').text(newCountry);
      $('.current-country > .flag > img')
      .attr("src", "assets/images/flags/" + newCountry + ".gif");
    }

    function urlHasCountry() {
      let URL = window.location.href;
      let pattern = /n=[A-Z][A-Z]/g;
      return pattern.test(URL);
    }

    function getCodeFromURL() {
      let URL = window.location.href;
      return URL.match("n=[A-Z][A-Z]")[0]
    }

    // adjust all hrefs on the page so that they contain
    // the current country code

    function adjustLinksToCountry() {
      let url = window.location.href;
      let hrefs = $('a').attr('href');
    }

  });
