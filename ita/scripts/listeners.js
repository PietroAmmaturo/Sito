var isMobile = is_touch_device1(); //initiate as false
// device detection
function is_touch_device1() {
  return 'ontouchstart' in window;
}

if (!isMobile) {
  document.getElementById("blocktogglevnav").addEventListener("mouseenter", function () {
    showTextOnav(this, 'TOGGLE')
  });
  document.getElementById("blocktogglevnav").addEventListener("mouseleave", function () {
    hideTextOnav(this, 'TOGGLE')
  });
  document.getElementById("blocktoggleonav").addEventListener("mouseenter", function () {
    showTextOnav(this, 'TOGGLE')
  });
  document.getElementById("blocktoggleonav").addEventListener("mouseleave", function () {
    hideTextOnav(this, 'TOGGLE')
  });
}
document.getElementById("gotoindex").addEventListener("mouseenter", function () {
  showTextOnav(this, 'HOME')
});
document.getElementById("gotoindex").addEventListener("mouseleave", function () {
  hideTextOnav(this, 'HOME')
});
document.getElementById("gotowhoami").addEventListener("mouseenter", function () {
  showTextOnav(this, 'INFO')
});
document.getElementById("gotowhoami").addEventListener("mouseleave", function () {
  hideTextOnav(this, 'INFO')
});
document.getElementById("gotonews").addEventListener("mouseenter", function () {
  showTextOnav(this, 'NEWS')
});
document.getElementById("gotonews").addEventListener("mouseleave", function () {
  hideTextOnav(this, 'NEWS')
});
document.getElementById("gotoexperiments").addEventListener("mouseenter", function () {
  showTextOnav(this, 'TRY ME')
});
document.getElementById("gotoexperiments").addEventListener("mouseleave", function () {
  hideTextOnav(this, 'TRY ME')
});
