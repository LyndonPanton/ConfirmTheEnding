"use strict";

window.onload = function(event) {
	document.getElementById("copyright-year").textContent = (new Date()).getFullYear();

	function confirm(string, target) {
		if (string === "" || target === "") {
			return display("???");
		}

		let ending = string.slice(-1 - (target.length - 1));

		if (ending === target) {
			return display(true);
		} else {
			return display(false);
		}
	}

	function display(result) {
		let display = document.getElementById("display");

		if (result === "???") {
			display.classList.remove("display-false");
			display.classList.remove("display-true");
			display.classList.add("display-unknown");
			display.textContent = "???";
		} else if (result) {
			display.classList.remove("display-unknown");
			display.classList.remove("display-false");
			display.classList.add("display-true");
			display.textContent = "true";
		} else {
			display.classList.remove("display-unknown");
			display.classList.remove("display-true");
			display.classList.add("display-false");
			display.textContent = "false";
		}
	}

	let form = document.getElementById("form");
	form.addEventListener("submit", function(event) {
		event.preventDefault();

		confirm(this.children[0].value, this.children[1].value);
	});
};