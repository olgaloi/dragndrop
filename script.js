const div = document.querySelector('div');

div.onmousedown = function(event) {
	if(event.target.tagName != 'IMG') return;

	drag(event);
}

function drag(event) {
	let target = event.target;
	target.style.position = 'relative';

	// координаты верхнего угла перетаскиваемого элемента
	let offsetX = target.style.left;
	let offsetY = target.style.top;

	// координаты клика мышки
	let startX = event.pageX;
	let startY = event.pageY;

	target.ondragstart =  function() {
		return false;
	}

	div.onmousemove = function(e) {
		moveAt(e);
	}

	function moveAt(e) {
		target.style.left = offsetX + e.pageX - startX + 'px';
		target.style.top = offsetY + e.pageY - startY + 'px';
	}

	target.onmouseup = function(e) {
		div.onmousemove = null;
		target.onmouseup = null;
		target.ondragstart = null;
		target = null;
	}
}