'use strict';

let OffsetX;
let OffsetY;

const imgContainer = document.getElementById('container');

const imgs = imgContainer.getElementsByTagName('img');

for(let i = imgs.length-1; i > -1; i--) {
	const initialLeft = imgs[i].offsetLeft;
	const initialTop = imgs[i].offsetTop;
	imgs[i].style.position = 'absolute';
	imgs[i].style.left = initialLeft + 'px';
	imgs[i].style.top = initialTop + 'px';
	imgs[i].addEventListener('mousedown', OnMouseDown, false);
}

function OnMouseDown(event) {
	const EO = event || window.event;
	EO.preventDefault();
	const target = EO.target;

	const mouseX = EO.pageX;
	const mouseY = EO.pageY;

	OffsetX = mouseX - target.offsetLeft;
	OffsetY = mouseY - target.offsetTop;

	window.addEventListener('mousemove', OnMouseMove, false);
	window.addEventListener('mouseup', OnMouseUp, false);
	window.addEventListener('mouseout', OnMouseUp, false);
}

function OnMouseMove(event) {
	const EO = event || window.event;
	EO.preventDefault();
	const target = EO.target;

	target.style.zIndex = 999;

	target.style.left = EO.pageX - OffsetX + 'px';
	target.style.top = EO.pageY - OffsetY + 'px';
}

function OnMouseUp(event) {
	const EO = event || window.event;
	EO.preventDefault();
	const target = EO.target;

	target.style.zIndex = 1;	

	window.removeEventListener('mousemove', OnMouseMove, false);
	window.removeEventListener('mouseup', OnMouseUp, false);
	window.removeEventListener('mouseout', OnMouseUp, false);
}