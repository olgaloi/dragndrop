const div = document.querySelector('div');

div.onmousedown = function(event) {
	if(event.target.tagName != 'IMG') return;

	/*for(let elem of div.children) {
		if(elem != event.target) {
			elem.style.position = 'static';
		}
	}*/

	drag(event);
}

function drag(event) {
	const target = event.target;
	target.style.position = 'relative';

	let coords = getCoords(target);
	let shiftX = event.pageX - coords.left;
	let shiftY = event.pageY - coords.top;

	target.ondragstart =  function() {
		return false;
	}

	div.onmousemove = function(e) {
		moveAt(e);
	}

	function moveAt(e) {
		target.style.left = e.pageX - shiftX + 'px';
		target.style.top = e.pageY - shiftY + 'px';
	}

	target.onmouseup = function(e) {
		div.onmousemove = null;
		target.onmouseup = null
	}

	function getCoords(e) {   // кроме IE8-
		const box = e.getBoundingClientRect();

		return {
			top: box.top + pageYOffset,
			left: box.left + pageXOffset
		};
	}
}