#!/bin/bash

touch template/$1.html
touch controller/$1.js
printf " \$(document).ready(function() {
	template = \$(\'$1\').html();
	output = Mustache.render(template, $1);
	\$(\'$1\').html(output);
   }); " >> controller/$1.js

touch data/$1.js
