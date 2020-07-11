 $(document).ready(function() {
	template = $('footer').html();
	output = Mustache.render(template, footer);
	$('footer').html(output);
   }); 