 $(document).ready(function() {
	template = $('header').html();
	output = Mustache.render(template, header);
	$('header').html(output);
   }); 