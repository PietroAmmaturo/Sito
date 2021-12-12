window.onscroll = function () {
	stickyNav()
};

var onavon = true;
var stickyonavon = false;
var onavbar = document.getElementById("onavbar");
var onavtop = onavbar.offsetTop;

function stickyNav() {
	stickyonavon = true;
	stickyOnav();
}

function stickyOnav() {
	if (window.pageYOffset >= onavtop) {
		stickyonavon = true;
		document.getElementById("blocktoggleonav").style.display = "inline-block";
		onavbar.classList.add("sticky");
		if (!onavon) {
			hideOnav();
		};
	} else {
		stickyonavon = false;
		showOnav();
		document.getElementById("blocktoggleonav").style.display = "none";
		onavbar.classList.remove("sticky");
	}
}

function hideOnav() {
	onavon = false;
	document.getElementById("onavbar").style.width = "3.5em";
	document.getElementById("onavbar").style.right = "0px";
	document.getElementById("toggleonav").innerHTML = "keyboard_arrow_left";
	document.getElementById("blocktoggleonav").classList.add("active");
}

function showOnav() {
	onavon = true;
	document.getElementById("onavbar").style.width = "100%";
	document.getElementById("toggleonav").innerHTML = "keyboard_arrow_right";
	document.getElementById("blocktoggleonav").classList.remove("active");
}


function getRootElementFontSize() {
	// Returns a number
	return parseFloat(
		// of the computed font-size, so in px
		getComputedStyle(
			// for the root <html> element
			document.documentElement
		).fontSize
	);
}


function toggleOnav() {
	if (onavon) {
		hideOnav();
	} else {
		showOnav();
	}
}

function showTextOnav(obj, description) {
	content = document.getElementById(obj.id).innerHTML;
	var htmlDescription = '<div>' + description + '</div>';
	if (!(content.includes(htmlDescription))) {
		document.getElementById(obj.id).innerHTML += (htmlDescription);
	}
}

function hideTextOnav(obj, description) {
	let content = document.getElementById(obj.id).innerHTML;
	var htmlDescription = '<div>' + description + '</div>';
	if ((content.includes(htmlDescription))) {
		content = content.replace(htmlDescription, '');
		document.getElementById(obj.id).innerHTML = content;
	}
}

function convertRem(value) {
	return value * getRootElementFontSize();
}


var sliders = document.getElementsByClassName('carousel');
console.log(sliders)
for (i = 0; i < sliders.length; i++) {
	let slider = sliders[i];
	console.log(slider)
	let isDown = false;
	let startX;
	let scrollLeft;

	slider.addEventListener('mousedown', (e) => {
		isDown = true;
		slider.classList.add('active');
		startX = e.pageX - slider.offsetLeft;
		scrollLeft = slider.scrollLeft;
	});
	slider.addEventListener('mouseleave', () => {
		isDown = false;
		slider.classList.remove('active');
	});
	slider.addEventListener('mouseup', () => {
		isDown = false;
		slider.classList.remove('active');
	});
	slider.addEventListener('mousemove', (e) => {
		if (!isDown) return;
		e.preventDefault();
		const x = e.pageX - slider.offsetLeft;
		const walk = (x - startX) * 3; //scroll-fast
		slider.scrollLeft = scrollLeft - walk;
		console.log(walk);
	});

}


showWebsites();
function showWebsites() {
	if (!document.getElementById("websites_button").classList.contains("active")) {
		document.getElementById("websites_button").classList.add("active");
		document.getElementById("webxr_button").classList.remove("active");
		var els = document.getElementsByClassName("webxr");
		var i;
		for (i = 0; i < els.length; i++) {
			els[i].classList.add("fadeout");
		}
		setTimeout(function () {
			var els = document.getElementsByClassName("webxr");
			var i;
			for (i = 0; i < els.length; i++) {
				els[i].style.display = "none";
				els[i].classList.remove("fadeout");
			}

			var els = document.getElementsByClassName("websites");
			var i;
			for (i = 0; i < els.length; i++) {
				els[i].style.display = "inline-block";
			}
			for (i = 0; i < els.length; i++) {
				els[i].classList.add("fadein");
			}
			setTimeout(function () {
				var els = document.getElementsByClassName("websites");
				var i;
				for (i = 0; i < els.length; i++) {
					els[i].classList.remove("fadein");
				}
			}, 500);
		}, 1000);

	}

}
function showWebxr() {
	if (!document.getElementById("webxr_button").classList.contains("active")) {
		document.getElementById("webxr_button").classList.add("active");
		document.getElementById("websites_button").classList.remove("active");
		var els = document.getElementsByClassName("websites");
		var i;
		for (i = 0; i < els.length; i++) {
			els[i].classList.add("fadeout");
		}
		setTimeout(function () {
			var els = document.getElementsByClassName("websites");
			var i;
			for (i = 0; i < els.length; i++) {
				els[i].style.display = "none";
				els[i].classList.remove("fadeout");
			}

			var els = document.getElementsByClassName("webxr");
			var i;
			for (i = 0; i < els.length; i++) {
				els[i].style.display = "inline-block";
			}
			for (i = 0; i < els.length; i++) {
				els[i].classList.add("fadein");
			}
			setTimeout(function () {
				var els = document.getElementsByClassName("webxr");
				var i;
				for (i = 0; i < els.length; i++) {
					els[i].classList.remove("fadein");
				}
			}, 500);
		}, 1000);
	}
}