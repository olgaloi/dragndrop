let elem = document.querySelector('div');

elem.onmousedown = function(event) {
	console.log(event.target, 'mousedown');
}