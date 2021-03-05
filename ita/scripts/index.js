var typeString = [
  'What is life?...<br>' +
  '...Exactly what you think it is',
  'What is reality?...<br>' +
  '...Whatever you want it to be',
  'Do not let others force you in their realities',
];
var i = 0;
var count = 0
var selectedText = '';
var text = '';
/* original code
(function type() {
if (count == typeString.length) {
count = 0;
}
selectedText = typeString[count];
text = selectedText.slice(0, ++i);
document.getElementById('typing').innerHTML = text;
if (text.length === selectedText.length) {
count++;
i = 0;
}
setTimeout(type, 100);
}());

function sleep(milliseconds) {
var start = new Date().getTime();
for (var i = 0; i < 1e7; i++) {
if ((new Date().getTime() - start) > milliseconds){
break;
}
}
}
*/

/* my code */
selectedText = typeString[count];
typeEffect();

/*first full just type animation*/
/*function typeEffect() {
text = selectedText.slice(0, i);
i++;
document.getElementById('typing').innerHTML = text;
if (i != selectedText.length)
setTimeout(typeEffect, 100);
else{
count++;
i = 0;
selectedText = typeString[count];
setTimeout(typeEffect, 5000);
}
};
*/

function deleteEffect() {
  i--;
  let character = selectedText.slice(i - 1, i);
  if (character == '>') {
    i = i - 4;
  }
  text = selectedText.slice(0, i);
  document.getElementById('typing').innerHTML = text;
  if (i >= 0) {
    setTimeout(deleteEffect, 40);
  } else {
    text = '';
    document.getElementById('typing').innerHTML = text;
    count++;
    i = 0;
    selectedText = typeString[count];
    if (count == typeString.length) {
      count = 0;
      selectedText = typeString[count];
    }
    setTimeout(typeEffect, 500);
  }
};

function typeEffect() {
  let character = selectedText.slice(i, i + 1);
  if (character == '<')
    i = i + 3;
  text = selectedText.slice(0, i);
  document.getElementById('typing').innerHTML = text;
  i++;
  if (i <= selectedText.length) {
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(deleteEffect, 5000);
  }
};


var sentences = [
  'CHOOSEYOURWORLD',
  'BECOMEYOURCHIEF',
  'FOLLOWYOURDREAM'
];
var names = [
  'a1', 'a2', 'a3', 'a4', 'a5', 'a6',
  'b1', 'b2', 'b3', 'b4',
  'c1', 'c2', 'c3', 'c4', 'c5'
];
console.log(names.length);
var time = 0;
let j = 0;
let k = 0;
let isreset = false;

function switchSentence() {
  str = sentences[j];
  j++;
  if (j >= sentences.length) {
    j = 0;
  }
};

function stamp(obj, num) {
  if (!obj.locked && !isreset) {
    obj.style.backgroundColor = "rgba(0,0,0,0)";
    var name = obj.id;
    var canvas = document.getElementById(name);
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "black";
    ctx.font = "bold 10em'Consolas', sans-serif";
    value = str.charAt(num);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillText(value, canvas.width / 2.7, canvas.height / 1.2);
  }
};

function lock(obj, num) {
  stamp(obj, num);
  if (!obj.locked && !isreset) {
    obj.locked = true;
    obj.style.backgroundColor = "rgba(0,0,0,0.8)";
    var name = obj.id;
    var canvas = document.getElementById(name);
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "white";
    ctx.font = "bold 10em'Consolas', sans-serif";
    value = str.charAt(num);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillText(value, canvas.width / 2.7, canvas.height / 1.2);
  } else {
    obj.locked = false;
    stamp(obj, num);
  }
}

function fade(obj) {
  if (!obj.locked) {
    setTimeout(function() {
      cancel(obj);
    }, 4000 + 4000 * Math.random());
  }
}

function cancel(obj) {
  if (!obj.locked) {
    var name = obj.id;
    var canvas = document.getElementById(name);
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
};

function reset(name) {
  document.getElementById(name).locked = false;
  setTimeout(function() {
    var canvas = document.getElementById(name);
    var ctx = canvas.getContext("2d");
    document.getElementById(name).style.backgroundColor = "rgba(0,0,0,0.8)";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }, 1000 * Math.random());
};

function resetAll() {
  isreset = true;
  setTimeout(switchSentence, 1000);
  for (k = 0; k < names.length; k++) {
    reset(names[k]);
  }
  setTimeout(function() {
    isreset = false;
  }, 1000);
  setTimeout(resetAll, 30000);
};

resetAll();
/*
<div class="side S">
<div class = "square" id = "a1" value ="0"  onclick="stamp(this)"></div>
<div class = "square" id = "a2"></div>
<div class = "square" id = "a3"></div>
<div class = "square" id = "a4"></div>
<div class = "square" id = "a5"></div>
<br>
<div class = "square" id = "b1"></div>
<div class = "square" id = "b2"></div>
<div class = "square" id = "b3"></div>
<div class = "square" id = "b4"></div>
<br>
<div class = "square" id = "c1"></div>
<div class = "square" id = "c2"></div>
<div class = "square" id = "c3"></div>
<div class = "square" id = "c4"></div>
<div class = "square" id = "c5"></div>
</div>
*/
/*
div .square{
display: inline-flex;
border: 4px;
width: 4em;
height: 4em;
background-color: grey;
}
div .square:hover{
background-color: rgba(100, 100, 100, 0.5);
}
*/
