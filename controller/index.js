 $(document).ready(function() {
	template = $('index').html();
	output = Mustache.render(template, index);
	$('index').html(output);
}); 
