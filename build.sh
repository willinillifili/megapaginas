#!/bin/bash

buildPage () {
	# write in the appropriate script
	sed "s/##PAGE##/$1/" template/header.html > $1.html
	cat template/menu.html >> $1.html
	cat template/country.html >> $1.html
	for var in "$@"
	do
		cat template/$var.html >> $1.html
	done
	cat template/footer.html >> $1.html
}

buildScript () {
	cat assets/js/mustache.js > assets/js/script-$1.js
	cat data/menu.js >> assets/js/script-$1.js
	cat data/country.js >> assets/js/script-$1.js
	#cat data/footer.js >> assets/js/script-$1.js
	cat controller/menu.js >> assets/js/script-$1.js
	cat controller/country.js >> assets/js/script-$1.js
	cat controller/directory.js >> assets/js/script-$1.js
	#cat controller/$1.js >> assets/js/script-$1.js
	#cat controller/footer.js >> assets/js/script-$1.js
}

# build index script
: ' cat assets/js/mustache.js > assets/js/script-index.js
cat data/menu.js >> assets/js/script-index.js
cat data/proposals.js >> assets/js/script-index.js
cat data/sub-proposals.js >> assets/js/script-index.js
cat data/footer.js >> assets/js/script-index.js
cat controllers/menu.js >> assets/js/script-index.js
cat controllers/index.js >> assets/js/script-index.js
cat controllers/proposals.js >> assets/js/script-index.js
cat controllers/footer.js >> assets/js/script-index.js
'

# build homepage
buildPage "index" "banner" "directory" "data"
buildScript "index"
