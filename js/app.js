"use strict";

window.onload = function(event) {
	document.getElementById("copyright-year").textContent = (new Date()).getFullYear();

	function confirm(string, target) {
		let ending = string.slice(-1 - (target.length - 1));

		if (ending === target) {
			return display(true);
		} else {
			return display(false);
		}
	}

	function display(result) {
		let display = document.getElementById("display");

		if (result) {
			display.textContent = "true";
		} else {
			display.textContent = "false";
		}
	}

	let form = document.getElementById("form");
	form.addEventListener("submit", function(event) {
		event.preventDefault();

		confirm(this.children[0].value, this.children[1].value);
	});
};