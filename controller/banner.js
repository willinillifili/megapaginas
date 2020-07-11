 $(document).ready(function() {
	template = $('banner').html();
	output = Mustache.render(template, banner);
	$('banner').html(output);
   }); 