const div = document.querySelector('div');

div.onmousedown = function(event) {
	if(event.target.tagName != 'IMG') return;

	for(let elem of div.children) {
		if(elem != event.target) {
			elem.style.position = 'static'
		}
	}

	drag(event.target);
}

function drag(target) {
	target.style.position = 'relative';
}