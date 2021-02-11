window.onscroll = function() {stickyNav()};

var vnavon = false;
var onavon = true;
var stickyonavon = false;
var onavbar = document.getElementById("onavbar");
var vnavbar = document.getElementById("vnavbar");
var onavtop = onavbar.offsetTop;
var vnavtop = vnavbar.offsetTop - convertRem(3.9);

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

/*eccessivamente complicato e delle volte si apre la vnavbar wuando non dovrebbe*/
/*
function hideVnav(){
	if(onavon || !stickyonavon){vnavon = false;}
	document.getElementById("vnavbar").style.width = "0em";
	document.getElementById("main").style.left = "0em";
	document.getElementById("main").style.width = "100%";
	document.getElementById("blocktogglevnav").classList.remove("active");
	console.log("aa");
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
function hideOnav(){
	onavon = false;
	if (stickyonavon){
	hideVnav();
	document.getElementById("onavbar").style.width = "3.5em";
	document.getElementById("onavbar").style.right = "0px";
	document.getElementById("toggleonav").innerHTML = "keyboard_arrow_left";
	document.getElementById("blocktoggleonav").classList.add("active");
	}
}
function showOnav(){
	if (stickyonavon){onavon = true;}
	if (vnavon){showVnav();}
	document.getElementById("onavbar").style.width = "100%";
	document.getElementById("toggleonav").innerHTML = "keyboard_arrow_right";
	document.getElementById("blocktoggleonav").classList.remove("active");
}
*/
function hideVnav(){
	vnavon = false;
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
function hideOnav(){
	onavon = false;
	hideVnav();
	document.getElementById("onavbar").style.width = "3.5em";
	document.getElementById("onavbar").style.right = "0px";
	document.getElementById("toggleonav").innerHTML = "keyboard_arrow_left";
	document.getElementById("blocktoggleonav").classList.add("active");
}
function showOnav(){
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

function toggleVnav(){
	if (vnavon){hideVnav();}
	else {showVnav();}
}
function toggleOnav(){
	if (onavon){hideOnav();}
	else {showOnav();
	}
}

window.onresize = function() {
		toggleVnav();
		toggleVnav();
}
/*eccessivamente complicato, e non funziona bene*/
/*
function showTextOnav(obj, description){
	console.log(obj.parentNode.id);
	content = document.getElementById(obj.parentNode.id).innerHTML;
	var htmlDescription = '<div onmouseleave="hideTextOnav(this, \''
	+ description + '\')">' + description + '</div>';
	console.log(content);
	if(!(content.includes(htmlDescription))){
		console.log("showTextOnav");
		console.log(obj.parentNode.id);
		document.getElementById(obj.parentNode.id).innerHTML += (htmlDescription);
	}
}

function hideTextOnav(obj, description){
	let content = document.getElementById(obj.parentNode.id).innerHTML;
	var htmlDescription = '<div onmouseleave="hideTextOnav(this, \''
	+ description + '\')">' + description + '</div>';
	console.log(content);
	if((content.includes(htmlDescription))){
		console.log("hideTextOnav");
		console.log(obj.parentNode.id);
		console.log(content);
		console.log(htmlDescription);
		content = content.replace(htmlDescription, '');
		document.getElementById(obj.parentNode.id).innerHTML = content;
	}
}
*/

function showTextOnav(obj, description){
	content = document.getElementById(obj.id).innerHTML;
	var htmlDescription = '<div>' + description + '</div>';
	if(!(content.includes(htmlDescription))){
		document.getElementById(obj.id).innerHTML += (htmlDescription);
	}
}

function hideTextOnav(obj, description){
	let content = document.getElementById(obj.id).innerHTML;
	var htmlDescription = '<div>' + description + '</div>';
	if((content.includes(htmlDescription))){
		content = content.replace(htmlDescription, '');
		document.getElementById(obj.id).innerHTML = content;
	}
}

function convertRem(value) {
  return value * getRootElementFontSize();
}
