window.onscroll = function() {stickyNav()};

var vnavon = false;
var onavon = true;
var stickynavon = false;

var onavbar = document.getElementById("onavbar");
var osticky = onavbar.offsetTop;

var vnavbar = document.getElementById("vnavbar");
var vsticky = vnavbar.offsetTop - 54;

function stickyOnav() {
  if (window.pageYOffset >= osticky) {
		stickynavon = true;
		document.getElementById("blocktoggleonav").style.display = "inline-block";
    onavbar.classList.add("osticky");
		if (!onavon){hideOnav();}
  } else {
		stickynavon = false;
		showOnav();
		document.getElementById("blocktoggleonav").style.display = "none";
    onavbar.classList.remove("osticky");
  }
}

function stickyVnav() {
  if (window.pageYOffset >= vsticky) {
    vnavbar.classList.add("vsticky")
  } else {
    vnavbar.classList.remove("vsticky");
  }
}

function stickyNav() {
stickynavon = true;
	stickyOnav();
  stickyVnav();
}

function hideVnav(){
	vnavon = false;
	document.getElementById("vnavbar").style.visibility = "hidden";
	document.getElementById("row").style.position = "static";
	document.getElementById("row").style.width = "100%";
	document.getElementById("togglevnav").innerHTML = "keyboard_arrow_down";

}
function showVnav(){
	vnavon = true;
	document.getElementById("vnavbar").style.visibility = "visible";
	document.getElementById("togglevnav").innerHTML = "keyboard_arrow_up";
	if(window.innerWidth > 900){
		document.getElementById("row").style.position = "relative";
		document.getElementById("row").style.width = "calc(100% - 150px)";
}
}

function toggleOnav(){
	if (onavon){hideOnav();}
	else {showOnav();
	}
}

function hideOnav(){
	onavon = false;
	if (stickynavon){
	document.getElementById("onavbar").style.width = "60px";
	document.getElementById("onavbar").style.right = "0px";
	document.getElementById("toggleonav").innerHTML = "keyboard_arrow_left";
}
}
function showOnav(){
	if (stickynavon){onavon = true;}
	document.getElementById("onavbar").style.width = "100%";
	document.getElementById("toggleonav").innerHTML = "keyboard_arrow_right";
}

function toggleVnav(){
	if (vnavon){hideVnav();}
	else {showVnav();
	}
}


window.onresize = function() {
	toggleVnav();
	toggleVnav();
}
