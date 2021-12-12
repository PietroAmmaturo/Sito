

document.getElementById("about_button").addEventListener("mouseenter", function(){showTextOnav(this, 'ABOUT')});
document.getElementById("about_button").addEventListener("mouseleave", function(){hideTextOnav(this, 'ABOUT')});
document.getElementById("portfolio_button").addEventListener("mouseenter", function(){showTextOnav(this, 'WORKS')});
document.getElementById("portfolio_button").addEventListener("mouseleave", function(){hideTextOnav(this, 'WORKS')});
document.getElementById("news_button").addEventListener("mouseenter", function(){showTextOnav(this, 'NEWS')});
document.getElementById("news_button").addEventListener("mouseleave", function(){hideTextOnav(this, 'NEWS')});
document.getElementById("social_button").addEventListener("mouseenter", function(){showTextOnav(this, 'SOCIAL')});
document.getElementById("social_button").addEventListener("mouseleave", function(){hideTextOnav(this, 'SOCIAL')});


document.getElementById("websites_button").addEventListener("click", function(){showWebsites()});
document.getElementById("webxr_button").addEventListener("click", function(){showWebxr()});
