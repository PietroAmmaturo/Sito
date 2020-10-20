window.onscroll = function() {stickyNav()};

var vnavon = false;
var onavon = true;
var stickyonavon = false;
var onavbar = document.getElementById("onavbar");
var vnavbar = document.getElementById("vnavbar");
var onavtop = onavbar.offsetTop;
var vnavtop = vnavbar.offsetTop - convertRem(3.1);

function stickyNav() {
	stickyonavon = true;
	stickyOnav();
  stickyVnav();
}
function stickyOnav() {
  if (window.pageYOffset >= onavtop) {
		stickyonavon = true;
		document.getElementById("blocktoggleonav").style.display = "inline-block";
    onavbar.classList.add("sticky");
		if (!onavon){hideOnav();};
  }
	else {
		stickyonavon = false;
		showOnav();
		document.getElementById("blocktoggleonav").style.display = "none";
    onavbar.classList.remove("sticky");
  }
}
function stickyVnav() {
  if (window.pageYOffset >= vnavtop) {
    vnavbar.classList.add("sticky");
  } else {
    vnavbar.classList.remove("sticky");
  }
}

function toggleVnav(){
	if (vnavon){hideVnav();}
	else {showVnav();}
}
function hideVnav(){
	if(onavon || !stickyonavon){vnavon = false;}
	document.getElementById("vnavbar").style.width = "0em";
	document.getElementById("main").style.left = "0em";
	document.getElementById("main").style.width = "100%";
	document.getElementById("blocktogglevnav").classList.remove("active");

}
function showVnav(){
	vnavon = true;
	document.getElementById("vnavbar").style.width = "5em";
	document.getElementById("blocktogglevnav").classList.add("active");
	if(window.innerWidth > 900){
		document.getElementById("main").style.left = "10em";
		document.getElementById("main").style.width = "calc(100% - 10em)";
	}
}

function toggleOnav(){
	if (onavon){hideOnav();}
	else {showOnav();
	}
}
function hideOnav(){
	onavon = false;
	if (stickyonavon){
	hideVnav();
	document.getElementById("onavbar").style.width = "3.5em";
	document.getElementById("onavbar").style.right = "0px";
	document.getElementById("toggleonav").innerHTML = "keyboard_arrow_left";
	}
}
function showOnav(){
	if (stickyonavon){onavon = true;}
	if (vnavon){showVnav();}
	document.getElementById("onavbar").style.width = "100%";
	document.getElementById("toggleonav").innerHTML = "keyboard_arrow_right";
}

window.onresize = function() {
		toggleVnav();
		toggleVnav();
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
function convertRem(value) {
  return value * getRootElementFontSize();
}
